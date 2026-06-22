import type { Metadata } from "next";
import { Insights } from "@/components/sections/Insights";
import { MarketTicker } from "@/components/sections/MarketTicker";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Market Intelligence",
  description:
    "Live capital markets pulse, sector conviction, Irish real-asset yields, and Helioran's editorial commentary.",
};

export default function InsightsPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/[0.05] pt-32 pb-12 sm:pt-44 sm:pb-16 lg:pt-52">
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(ellipse_at_top,rgba(15,55,168,0.35),transparent_60%)]"
        />
        <div className="container">
          <p className="eyebrow mb-6 sm:mb-8">Intelligence desk</p>
          <h1 className="font-display text-balance text-[34px] font-medium leading-[1.02] tracking-tightest sm:text-5xl md:text-6xl lg:text-7xl">
            A live read on the markets that matter.
          </h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-white/65 sm:mt-8 sm:text-[17px]">
            A continuously refreshed pulse of capital markets, sector
            conviction, Irish real-asset yields, and long-form commentary from
            the Helioran desk.
          </p>
        </div>
      </section>
      <MarketTicker />
      <Insights />
      <CTA />
    </>
  );
}
