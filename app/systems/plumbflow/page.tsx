import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import { createPageMetadata } from "../../siteMetadata";

export const metadata: Metadata = createPageMetadata({
  title: "PlumbFlow",
  description:
    "Modern plumbing business management software.",
  canonical: "/systems/plumbflow"
});

export default function PlumbFlowPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#090909] text-[#efe8d5]">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(189,169,119,0.10),transparent_45%)]" />

      ```tsx
<section className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-10">

  <div className="text-center">

    <div className="flex justify-center">
      <Image
        src="/systems/plumbflow-mark.svg"
        alt="PlumbFlow"
        width={130}
        height={130}
        className="rounded-3xl"
      />
    </div>

    <p className="mt-8 text-xs uppercase tracking-[0.4em] text-[#bda977]">
      PlumbFlow
    </p>

    <h1 className="mt-6 text-5xl md:text-7xl text-[#fff3d0]">
      Built for Modern
      <br />
      Plumbing Businesses
    </h1>

    <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-[#b9ad95]">
      Generate invoices.
      Manage customers.
      Track payments.
      Run your plumbing business from one system.
    </p>

  </div>

<div className="mt-16 grid grid-cols-3 gap-3 md:gap-6">

  <div className="rounded-3xl border border-[#2b2a26] bg-[#111111]/60 p-4 md:p-6 text-center">
    <h3 className="text-sm md:text-xl text-[#fff3d0]">
      Smart Billing
    </h3>

    <p className="mt-2 md:mt-4 text-xs md:text-base text-[#b9ad95]">
      Professional invoices in seconds.
    </p>
  </div>

  <div className="rounded-3xl border border-[#2b2a26] bg-[#111111]/60 p-4 md:p-6 text-center">
    <h3 className="text-sm md:text-xl text-[#fff3d0]">
      Customer CRM
    </h3>

    <p className="mt-2 md:mt-4 text-xs md:text-base text-[#b9ad95]">
      Customer and payment history.
    </p>
  </div>

  <div className="rounded-3xl border border-[#2b2a26] bg-[#111111]/60 p-4 md:p-6 text-center">
    <h3 className="text-sm md:text-xl text-[#fff3d0]">
      Dashboard
    </h3>

    <p className="mt-2 md:mt-4 text-xs md:text-base text-[#b9ad95]">
      Revenue and operations tracking.
    </p>
  </div>

</div>

  <div className="mt-14 flex flex-wrap justify-center gap-5">

    <a
      href="mailto:39brogaming@gmail.com?subject=PlumbFlow Demo Request"
      className="rounded-full bg-[#bda977] px-8 py-4 text-black transition hover:opacity-80"
    >
      Request Demo
    </a>

    <a
      href="https://plumbflow.sarcastikant.com/"
      className="rounded-full border border-[#2b2a26] px-8 py-4 transition hover:border-[#bda977]"
    >
      Existing Customer Login
    </a>

  </div>

  <div className="mt-10 text-center">

    <Link
      href="/systems"
      className="text-sm uppercase tracking-[0.3em] text-[#e6c27a]"
    >
      ← Return to Systems
    </Link>

  </div>

</section>
```


    </main>
  );
}