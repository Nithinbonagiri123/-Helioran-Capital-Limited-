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
      <section className="relative overflow-hidden border-b border-white/[0.05] pt-44 pb-24 sm:pt-52">
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(ellipse_at_top,rgba(15,55,168,0.35),transparent_60%)]"
        />
        <div className="container">
          <p className="eyebrow mb-8">Selected work</p>
          <h1 className="font-display text-balance text-5xl leading-[1.02] tracking-tightest sm:text-6xl md:text-7xl">
            Mandates that defined <span className="italic text-white/85">outcomes</span>.
          </h1>
          <p className="mt-8 max-w-2xl text-[17px] leading-relaxed text-white/65">
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
