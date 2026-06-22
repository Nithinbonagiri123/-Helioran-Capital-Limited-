import { Hero } from "@/components/sections/Hero";
import { MarketTicker } from "@/components/sections/MarketTicker";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Insights } from "@/components/sections/Insights";
import { WhyHelioran } from "@/components/sections/WhyHelioran";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { CTA } from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarketTicker />
      <About />
      <Services />
      <Insights />
      <WhyHelioran />
      <CaseStudies />
      <CTA />
    </>
  );
}
