"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { ShaderAnimation } from "@/components/ui/shader-animation";
import { Button } from "@/components/ui/button";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Shader background — kept exactly as provided, deeply tinted for a luxury finance palette */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-[0.55] mix-blend-screen">
          <ShaderAnimation />
        </div>
        {/* Deep navy color wash so the rainbow shader reads as cinematic, not neon */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(15,55,168,0.45),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/40 via-ink-950/70 to-ink-950" />
        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(5,7,13,0.85)_100%)]" />
      </div>

      <div className="container relative flex min-h-[100svh] flex-col justify-between pt-36 pb-12 sm:pt-40">
        <div className="grid grid-cols-12 gap-y-12">
          <div className="col-span-12 lg:col-span-9">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.1 }}
              className="eyebrow mb-10"
            >
              <span>Helioran Capital · Est. Ireland</span>
            </motion.div>

            <h1 className="font-display text-balance text-[44px] leading-[0.98] tracking-tightest sm:text-[64px] md:text-[84px] lg:text-[108px]">
              <RevealLine delay={0.15}>
                <span className="text-white">Capital with</span>
              </RevealLine>
              <RevealLine delay={0.28}>
                <span className="text-white/85 italic font-display">conviction.</span>
              </RevealLine>
              <RevealLine delay={0.4}>
                <span className="text-white/55">Advisory with </span>
                <span className="text-white">rigour.</span>
              </RevealLine>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.7 }}
              className="mt-10 max-w-2xl text-[17px] leading-relaxed text-white/65 sm:text-[19px]"
            >
              An Irish investment advisory firm partnering with founders,
              boards, and investors on the decisions that shape capital — from
              first cheques to controlling stakes, from portfolios to platforms.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.85 }}
              className="mt-12 flex flex-wrap items-center gap-4"
            >
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Schedule a conversation
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="ghost" size="lg">
                  Explore our practice
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom strip: legacy metrics + scroll cue */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 1.05 }}
          className="mt-16 grid grid-cols-12 items-end gap-y-8"
        >
          <div className="col-span-12 md:col-span-9">
            <div className="grid grid-cols-2 gap-x-10 gap-y-6 sm:grid-cols-4">
              <Metric label="Sectors served" value="11+" />
              <Metric label="Capital advised" value="€340M+" />
              <Metric label="Geographies" value="IE · UK · EU" />
              <Metric label="Avg. engagement" value="14 weeks" />
            </div>
          </div>
          <div className="col-span-12 hidden items-center justify-end gap-3 md:col-span-3 md:flex">
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              className="grid h-9 w-9 place-items-center rounded-full border border-white/15"
            >
              <ArrowDown className="h-4 w-4 text-white/70" />
            </motion.div>
            <span className="text-[11px] uppercase tracking-[0.22em] text-white/40">
              Scroll
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-white/10 pt-4">
      <div className="font-display text-2xl tracking-tight text-white sm:text-3xl">
        {value}
      </div>
      <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-white/45">
        {label}
      </div>
    </div>
  );
}

function RevealLine({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.9, ease, delay }}
        className="block"
      >
        {children}
      </motion.span>
    </span>
  );
}
