import type { Metadata } from "next";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Selected anonymised mandates across venture capital, M&A, property, and market entry — representative of the standard we hold.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/[0.05] pt-32 pb-16 sm:pt-44 sm:pb-24 lg:pt-52">
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(ellipse_at_top,rgba(15,55,168,0.35),transparent_60%)]"
        />
        <div className="container">
          <p className="eyebrow mb-6 sm:mb-8">Selected work</p>
          <h1 className="font-display text-balance text-[34px] font-medium leading-[1.02] tracking-tightest sm:text-5xl md:text-6xl lg:text-7xl">
            Mandates that defined <span className="font-serif italic text-white/90">outcomes</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-white/65 sm:mt-8 sm:text-[17px]">
            Anonymised case studies from recent engagements — illustrative of
            the situations we accept and the standard we apply.
          </p>
        </div>
      </section>
      <CaseStudies />
      <CTA />
    </>
  );
}
