import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

export const dynamic = "force-dynamic";

const ACTIVE_WINDOW_MS = 75_000;
const ACTIVE_WINDOW_SECONDS = Math.floor(ACTIVE_WINDOW_MS / 1000);
const VISITOR_COUNT_OFFSET = Number(process.env.VISITOR_COUNT_OFFSET ?? 0);
const DATABASE_URL = process.env.DATABASE_URL;

type VisitorStore = {
  activeSessions: Map<string, number>;
  totalVisitors: number;
};

declare global {
  // eslint-disable-next-line no-var
  var livingLibraryVisitors: VisitorStore | undefined;
  // eslint-disable-next-line no-var
  var livingLibraryVisitorSchemaReady: Promise<void> | undefined;
}

const sql = DATABASE_URL ? neon(DATABASE_URL) : null;

function getStore() {
  if (!globalThis.livingLibraryVisitors) {
    globalThis.livingLibraryVisitors = {
      activeSessions: new Map(),
      totalVisitors: 0
    };
  }

  return globalThis.livingLibraryVisitors;
}

function getSchemaReady() {
  if (!sql) {
    return Promise.resolve();
  }

  if (!globalThis.livingLibraryVisitorSchemaReady) {
    globalThis.livingLibraryVisitorSchemaReady = (async () => {
      await sql`
        CREATE TABLE IF NOT EXISTS living_library_visitor_totals (
          id integer PRIMARY KEY DEFAULT 1,
          total_visitors bigint NOT NULL DEFAULT 0,
          updated_at timestamptz NOT NULL DEFAULT now(),
          CONSTRAINT living_library_visitor_totals_singleton CHECK (id = 1)
        )
      `;
      await sql`
        CREATE TABLE IF NOT EXISTS living_library_visitor_sessions (
          session_id text PRIMARY KEY,
          visitor_id text,
          last_seen_at timestamptz NOT NULL DEFAULT now()
        )
      `;
      await sql`
        INSERT INTO living_library_visitor_totals (id, total_visitors)
        VALUES (1, 0)
        ON CONFLICT (id) DO NOTHING
      `;
    })();
  }

  return globalThis.livingLibraryVisitorSchemaReady;
}

function pruneInactiveSessions(store: VisitorStore) {
  const activeAfter = Date.now() - ACTIVE_WINDOW_MS;

  for (const [sessionId, lastSeenAt] of store.activeSessions.entries()) {
    if (lastSeenAt < activeAfter) {
      store.activeSessions.delete(sessionId);
    }
  }
}

function snapshot(store: VisitorStore) {
  pruneInactiveSessions(store);

  return {
    activeVisitors: store.activeSessions.size,
    totalVisitors: store.totalVisitors + VISITOR_COUNT_OFFSET
  };
}

async function databaseSnapshot() {
  if (!sql) {
    return snapshot(getStore());
  }

  await getSchemaReady();
  await sql`
    DELETE FROM living_library_visitor_sessions
    WHERE last_seen_at < now() - (${ACTIVE_WINDOW_SECONDS} * interval '1 second')
  `;

  const [activeRow] = await sql`
    SELECT count(*)::int AS active_visitors
    FROM living_library_visitor_sessions
    WHERE last_seen_at >= now() - (${ACTIVE_WINDOW_SECONDS} * interval '1 second')
  `;
  const [totalRow] = await sql`
    SELECT total_visitors::text AS total_visitors
    FROM living_library_visitor_totals
    WHERE id = 1
  `;

  return {
    activeVisitors: Number(activeRow?.active_visitors ?? 0),
    totalVisitors: Number(totalRow?.total_visitors ?? 0) + VISITOR_COUNT_OFFSET
  };
}

async function trackInDatabase(sessionId?: string, visitorId?: string, countVisit = true) {
  if (!sql) {
    return null;
  }

  await getSchemaReady();

  if (countVisit) {
    await sql`
      UPDATE living_library_visitor_totals
      SET total_visitors = total_visitors + 1,
          updated_at = now()
      WHERE id = 1
    `;
  }

  if (sessionId) {
    await sql`
      INSERT INTO living_library_visitor_sessions (session_id, visitor_id, last_seen_at)
      VALUES (${sessionId}, ${visitorId ?? null}, now())
      ON CONFLICT (session_id)
      DO UPDATE SET
        visitor_id = EXCLUDED.visitor_id,
        last_seen_at = now()
    `;
  }

  return databaseSnapshot();
}

export async function GET() {
  return NextResponse.json(await databaseSnapshot());
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as {
    countVisit?: boolean;
    sessionId?: string;
    visitorId?: string;
  } | null;

  const visitorId = body?.visitorId?.slice(0, 96);
  const sessionId = body?.sessionId?.slice(0, 96) ?? visitorId;
  const shouldCountVisit = body?.countVisit !== false;
  const databaseResult = await trackInDatabase(sessionId, visitorId, shouldCountVisit);

  if (databaseResult) {
    return NextResponse.json(databaseResult);
  }

  const store = getStore();

  if (shouldCountVisit) {
    store.totalVisitors += 1;
  }

  if (sessionId) {
    store.activeSessions.set(sessionId, Date.now());
  }

  return NextResponse.json(snapshot(store));
}
