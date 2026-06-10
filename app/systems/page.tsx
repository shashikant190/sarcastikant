import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { createPageMetadata } from "../siteMetadata";

export const metadata: Metadata = createPageMetadata({
  title: "Systems",
  description:
    "Software systems, experiments, engineered worlds, and technical notes from Sarcastikant.",
  canonical: "/systems"
});

export default function SystemsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#090909] px-6 py-20 text-[#efe8d5]">
      {/* Ambient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(189,169,119,0.08),transparent_45%)]" />

      <section className="relative mx-auto max-w-7xl">
        <p className="text-xs uppercase tracking-[0.35em] text-[#bda977]">
          Systems
        </p>

        <h1 className="mt-6 text-5xl md:text-6xl text-[#fff3d0]">
          Some systems become companies.
        </h1>

        <p className="mt-6 max-w-2xl leading-8 text-[#b9ad95]">
          A place for engineered worlds, software systems,
          experiments and ideas built during long nights.
        </p>

        {/* Systems Grid */}
        <div className="mt-20 grid grid-cols-2 gap-6 lg:grid-cols-4">

          {/* ===================== */}
          {/* PLUMBFLOW CARD */}
          {/* ===================== */}

          <Link
            href="/systems/plumbflow"
            className="group relative overflow-hidden rounded-3xl border border-[#2b2a26] bg-[#121212]/80 p-5 transition-all duration-500 hover:-translate-y-2 hover:border-[#bda977] hover:shadow-[0_0_50px_rgba(189,169,119,0.15)]"
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#bda977]/5 blur-3xl" />

            <div className="relative">
              <Image
    src="/systems/plumbflow-social-preview-v2.png"
    alt="PlumbFlow"
    width={600}
    height={600}
    className="max-h-full max-w-full object-contain transition duration-500 group-hover:scale-105"
  />

              <p className="mt-5 text-[10px] uppercase tracking-[0.3em] text-[#bda977]">
                SaaS Product
              </p>

              <h2 className="mt-3 text-2xl text-[#fff3d0]">
                PlumbFlow
              </h2>

              <p className="mt-3 text-sm leading-7 text-[#b9ad95]">
                Plumbing billing and business management software.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full border border-[#2b2a26] px-3 py-1 text-[10px] uppercase">
                  Billing
                </span>

                <span className="rounded-full border border-[#2b2a26] px-3 py-1 text-[10px] uppercase">
                  CRM
                </span>

                <span className="rounded-full border border-[#2b2a26] px-3 py-1 text-[10px] uppercase">
                  SaaS
                </span>
              </div>

              <div className="mt-6 text-xs uppercase tracking-[0.25em] text-[#e6c27a]">
                Explore →
              </div>
            </div>
          </Link>

          {/* ===================== */}
          {/* COMING SOON */}
          {/* ===================== */}

          <div className="rounded-3xl border border-dashed border-[#2b2a26] bg-[#101010]/50 p-5 opacity-70 transition-all duration-300 hover:border-[#bda977]/40 hover:opacity-100">
            <div className="flex h-52 items-center justify-center rounded-2xl border border-[#2b2a26]">
              <span className="text-6xl text-[#5f584c]">
                +
              </span>
            </div>

            <p className="mt-5 text-[10px] uppercase tracking-[0.3em] text-[#8a806c]">
              Coming Soon
            </p>

            <h2 className="mt-3 text-2xl text-[#d7ccb5]">
              Future System
            </h2>

            <p className="mt-3 text-sm leading-7 text-[#8e836f]">
              Another engineered world is under construction.
            </p>
          </div>

          {/* ===================== */}
          {/* COMING SOON */}
          {/* ===================== */}

          <div className="rounded-3xl border border-dashed border-[#2b2a26] bg-[#101010]/50 p-5 opacity-70 transition-all duration-300 hover:border-[#bda977]/40 hover:opacity-100">
            <div className="flex h-52 items-center justify-center rounded-2xl border border-[#2b2a26]">
              <span className="text-6xl text-[#5f584c]">
                +
              </span>
            </div>

            <p className="mt-5 text-[10px] uppercase tracking-[0.3em] text-[#8a806c]">
              Coming Soon
            </p>

            <h2 className="mt-3 text-2xl text-[#d7ccb5]">
              Future System
            </h2>

            <p className="mt-3 text-sm leading-7 text-[#8e836f]">
              Another engineered world is under construction.
            </p>
          </div>

          {/* ===================== */}
          {/* COMING SOON */}
          {/* ===================== */}

          <div className="rounded-3xl border border-dashed border-[#2b2a26] bg-[#101010]/50 p-5 opacity-70 transition-all duration-300 hover:border-[#bda977]/40 hover:opacity-100">
            <div className="flex h-52 items-center justify-center rounded-2xl border border-[#2b2a26]">
              <span className="text-6xl text-[#5f584c]">
                +
              </span>
            </div>

            <p className="mt-5 text-[10px] uppercase tracking-[0.3em] text-[#8a806c]">
              Coming Soon
            </p>

            <h2 className="mt-3 text-2xl text-[#d7ccb5]">
              Future System
            </h2>

            <p className="mt-3 text-sm leading-7 text-[#8e836f]">
              Another engineered world is under construction.
            </p>
          </div>

        </div>

        <div className="mt-20">
          <Link
            href="/"
            className="inline-flex items-center text-sm uppercase tracking-[0.24em] text-[#e6c27a] transition-opacity duration-300 hover:opacity-70"
          >
            Return
          </Link>
        </div>
      </section>
    </main>
  );
}
