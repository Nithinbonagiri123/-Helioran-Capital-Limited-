import type { Metadata } from "next";
import { About } from "@/components/sections/About";
import { WhyHelioran } from "@/components/sections/WhyHelioran";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Helioran Capital is an Irish investment advisory firm built on independence, rigour, and long-term value creation.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Helioran"
        title="An advisory practice for the moments that move capital."
        body="Helioran Capital is an Irish investment advisory firm built around a simple proposition — that good counsel, applied with rigour and independence, is one of the most under-priced inputs in business."
      />
      <About />
      <WhyHelioran />
      <CTA />
    </>
  );
}

function PageHero({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.05] pt-44 pb-24 sm:pt-52">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(ellipse_at_top,rgba(15,55,168,0.35),transparent_60%)]"
      />
      <div className="container">
        <p className="eyebrow mb-8">{eyebrow}</p>
        <h1 className="font-display text-balance text-5xl leading-[1.02] tracking-tightest sm:text-6xl md:text-7xl">
          {title}
        </h1>
        <p className="mt-8 max-w-2xl text-[17px] leading-relaxed text-white/65">
          {body}
        </p>
      </div>
    </section>
  );
}
