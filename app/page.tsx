import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { brand, createPageMetadata, siteDescription } from "./siteMetadata";

export const metadata: Metadata = createPageMetadata({
  title: "Sarcastikant",
  description: siteDescription,
  canonical: "/"
});

export default function Home() {
  const portals = [
    {
      href: "/library",
      label: "The Living Library",
      note: "Books that refused to stay silent"
    },
    {
      href: "/systems",
      label: "Systems",
      note: "Code, experiments, engineered worlds"
    },
    {
      href: "/fragments",
      label: "Fragments",
      note: "Observations in low light"
    }
  ];

  return (
    <main className="relative isolate flex min-h-screen overflow-hidden bg-[#090909] text-[#efe8d5]">
      <div className="paper-grain" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_14%,rgba(193,155,90,0.16),transparent_25rem),radial-gradient(circle_at_76%_74%,rgba(52,71,85,0.22),transparent_27rem),linear-gradient(135deg,#080807_0%,#12100d_48%,#050505_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-56 bg-gradient-to-b from-[#c98a3a14] to-transparent" />
      <div className="pointer-events-none absolute inset-0 -z-10 shadow-[inset_0_0_140px_rgba(0,0,0,0.78)]" />
      <img
        alt="Sarcastikant"
        className="brand-signature pointer-events-none absolute left-6 top-6 z-10 w-28 opacity-70 md:left-10 md:top-9 md:w-36"
        src={brand.logo}
      />

      <section className="mx-auto flex min-h-screen w-full max-w-6xl items-center px-6 py-10 md:px-10">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.34em] text-[#bda977]">SARCASTIKANT</p>
          <h1 className="mt-6 font-display text-5xl leading-[0.92] text-[#fff3d0] sm:text-7xl md:text-8xl">
            Neti Neti
            <span className="block text-[#c9b98e]">Most of it sounds fictional anyway.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-[#b9ad95] sm:text-lg">
           Books, systems, and thoughts left running after midnight.
          </p>

          <nav aria-label="Primary destinations" className="mt-11 grid max-w-2xl gap-3 sm:grid-cols-3">
            {portals.map((portal) => (
              <Link
                className="home-portal group relative min-h-32 overflow-hidden border border-[#efe8d51a] bg-[#efe8d508] p-5 text-left text-[#efe8d5] outline-none transition duration-300 focus-visible:border-[#e6c27a] focus-visible:shadow-[0_0_0_3px_rgba(230,194,122,0.18)]"
                href={portal.href}
                key={portal.href}
              >
                <span className="home-portal-gleam" />
                <span className="flex items-center justify-between gap-4">
                  <span className="font-display text-2xl leading-none">{portal.label}</span>
                  <ArrowRight
                    aria-hidden="true"
                    className="home-portal-arrow mt-1 shrink-0 text-[#d8b96b] opacity-70"
                    size={18}
                  />
                </span>
                <span className="mt-5 block text-sm leading-6 text-[#a89d86]">{portal.note}</span>
              </Link>
            ))}
          </nav>
        </div>
      </section>
    </main>
  );
}
