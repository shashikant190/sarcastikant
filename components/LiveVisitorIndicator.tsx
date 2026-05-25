"use client";

import { Eye } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type VisitorSnapshot = {
  activeVisitors: number;
  totalVisitors: number;
};

function createClientId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
}

function compactCount(count: number) {
  if (count < 1000) {
    return `${count}`;
  }

  const units = [
    { suffix: "B", value: 1_000_000_000 },
    { suffix: "M", value: 1_000_000 },
    { suffix: "K", value: 1_000 }
  ];
  const unit = units.find((candidate) => count >= candidate.value);

  if (!unit) {
    return `${count}`;
  }

  const value = count / unit.value;
  const displayValue = value >= 10 ? Math.floor(value) : Math.floor(value * 10) / 10;

  return `${displayValue.toString().replace(".0", "")}${unit.suffix}`;
}

export default function LiveVisitorIndicator() {
  const [snapshot, setSnapshot] = useState<VisitorSnapshot | null>(null);
  const sessionId = useMemo(createClientId, []);

  useEffect(() => {
    const visitorStorageKey = "living-library-visitor-id";
    const existingVisitorId = window.localStorage.getItem(visitorStorageKey);
    const visitorId = existingVisitorId ?? createClientId();

    if (!existingVisitorId) {
      window.localStorage.setItem(visitorStorageKey, visitorId);
    }

    let isMounted = true;

    const heartbeat = async (countVisit = false) => {
      try {
        const response = await fetch("/api/live-visitors", {
          body: JSON.stringify({ countVisit, sessionId, visitorId }),
          cache: "no-store",
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST"
        });
        const nextSnapshot = (await response.json()) as VisitorSnapshot;

        if (isMounted) {
          setSnapshot(nextSnapshot);
        }
      } catch {
        // The indicator is decorative; the archive should stay silent if tracking is unavailable.
      }
    };

    void heartbeat(true);

    const intervalId = window.setInterval(heartbeat, 25_000);
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        void heartbeat();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      isMounted = false;
      window.clearInterval(intervalId);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [sessionId]);

  if (!snapshot) {
    return null;
  }

  return (
    <aside
      aria-label={`${snapshot.activeVisitors} live visitors, ${snapshot.totalVisitors} total visitors`}
      className="live-visitor-indicator"
    >
      <Eye aria-hidden="true" strokeWidth={1.7} />
      <span>{compactCount(snapshot.totalVisitors)}</span>
    </aside>
  );
}
