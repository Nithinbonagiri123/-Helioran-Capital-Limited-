import type { Metadata } from "next";
import { Services } from "@/components/sections/Services";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Strategic advisory, corporate finance, M&A, venture, property, and private investment consulting — delivered with institutional rigour.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/[0.05] pt-32 pb-16 sm:pt-44 sm:pb-24 lg:pt-52">
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(ellipse_at_top,rgba(15,55,168,0.35),transparent_60%)]"
        />
        <div className="container">
          <p className="eyebrow mb-6 sm:mb-8">Practice areas</p>
          <h1 className="font-display text-balance text-[34px] font-medium leading-[1.02] tracking-tightest sm:text-5xl md:text-6xl lg:text-7xl">
            Twelve disciplines. <span className="font-serif italic text-white/90">One</span> standard of work.
          </h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-white/65 sm:mt-8 sm:text-[17px]">
            Helioran&apos;s practice spans the lifecycle of capital — from the
            advice that shapes strategy, to the transactions that realise it,
            to the stewardship that protects it.
          </p>
        </div>
      </section>
      <Services />
      <CTA />
    </>
  );
}
