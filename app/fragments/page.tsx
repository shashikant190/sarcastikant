import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "../siteMetadata";

export const metadata: Metadata = createPageMetadata({
  title: "Fragments",
  description:
    "Fragments, observations, marginalia, and literary notes from Sarcastikant and The Living Library.",
  canonical: "/fragments"
});

const fragments = [
  "A city can be crowded and still emotionally abandoned.",
  "Most systems survive because exhaustion defeats resistance.",
  "People no longer fear corruption. They fear inconvenience.",
  "Some truths sound fictional until they become ordinary.",
  "Silence is sometimes society pretending not to notice itself."
];

export default function FragmentsPage() {
  return (
    <main className="relative flex min-h-screen items-center overflow-hidden bg-[#090909] px-6 text-[#efe8d5]">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(189,169,119,0.08),transparent_45%)]" />
      <div className="absolute inset-0 opacity-[0.03] mix-blend-soft-light bg-[url('/noise.png')]" />

      <section className="relative mx-auto w-full max-w-3xl">
        <p className="text-xs uppercase tracking-[0.34em] text-[#bda977]">
          Fragments
        </p>

        <h1 className="mt-5 font-display text-5xl leading-tight text-[#fff3d0] md:text-6xl">
          Loose pages, not yet bound.
        </h1>

        <p className="mt-6 max-w-2xl leading-8 text-[#b9ad95]">
          A shelf for observations, marginalia, and sentences that
          arrived before their essays did.
        </p>

        <div className="mt-12 space-y-5 border-l border-[#2b2a26] pl-6">
          {fragments.map((fragment) => (
            <p
              key={fragment}
              className="max-w-2xl text-[15px] leading-7 text-[#d7ccb5] transition-all duration-500 hover:translate-x-1 hover:text-[#fff3d0]"
            >
              {fragment}
            </p>
          ))}
        </div>

        <Link
          className="mt-14 inline-flex items-center text-sm uppercase tracking-[0.24em] text-[#e6c27a] transition-opacity duration-300 hover:opacity-70"
          href="/"
        >
          Return
        </Link>
      </section>
    </main>
  );
}
