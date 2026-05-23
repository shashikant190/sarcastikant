import Link from "next/link";

export default function SystemsPage() {
  return (
    <main className="relative flex min-h-screen items-center overflow-hidden bg-[#090909] px-6 text-[#efe8d5]">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(189,169,119,0.08),transparent_45%)]" />
      <div className="absolute inset-0 opacity-[0.03] mix-blend-soft-light bg-[url('/noise.png')]" />

      <section className="relative mx-auto w-full max-w-3xl">
        <p className="text-xs uppercase tracking-[0.34em] text-[#bda977]">
          Systems
        </p>

        <h1 className="mt-5 font-display text-5xl leading-tight text-[#fff3d0] md:text-6xl">
          Some systems are still compiling.
        </h1>

        <p className="mt-6 max-w-2xl leading-8 text-[#b9ad95]">
          A room for software systems, experiments, technical notes,
          engineered things, and ideas built during long nights.
          Some projects here are stable.
          Others are still becoming.
        </p>

        <div className="mt-10 flex flex-wrap gap-3 text-xs uppercase tracking-[0.22em] text-[#8e836f]">
          <span className="rounded-full border border-[#2b2a26] px-4 py-2">
            MCA
          </span>

          <span className="rounded-full border border-[#2b2a26] px-4 py-2">
            Systems
          </span>

          <span className="rounded-full border border-[#2b2a26] px-4 py-2">
            Experiments
          </span>

          <span className="rounded-full border border-[#2b2a26] px-4 py-2">
            Engineering
          </span>
        </div>

        <Link
          className="mt-12 inline-flex items-center text-sm uppercase tracking-[0.24em] text-[#e6c27a] transition-opacity duration-300 hover:opacity-70"
          href="/"
        >
          Return
        </Link>
      </section>
    </main>
  );
}