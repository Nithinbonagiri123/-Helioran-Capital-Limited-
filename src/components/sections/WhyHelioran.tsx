"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Scale, Target, Layers, Compass } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const pillars = [
  {
    icon: Scale,
    title: "Independent & objective",
    body: "No house view, no in-house product. Advice that serves the client — only the client.",
  },
  {
    icon: Target,
    title: "Tailored, not templated",
    body: "Every mandate is structured around the asset, the appetite, and the timeline. No off-the-shelf workstreams.",
  },
  {
    icon: Layers,
    title: "Commercial & analytical",
    body: "Boardroom judgement married to institutional-grade modelling. Numbers anchor the conversation.",
  },
  {
    icon: Compass,
    title: "Long-term value first",
    body: "We optimise for outcomes that compound — not transactions that close. Reputation is the only asset that matters.",
  },
  {
    icon: ShieldCheck,
    title: "Professionalism & integrity",
    body: "Confidentiality, candour, and care — applied as standard, never as exception.",
  },
];

export function WhyHelioran() {
  return (
    <section className="relative py-32 sm:py-40">
      <div className="container">
        <div className="grid grid-cols-12 gap-y-16">
          <div className="col-span-12 lg:col-span-5">
            <p className="eyebrow mb-6">Why Helioran</p>
            <h2 className="font-display text-balance text-4xl leading-[1.05] tracking-tightest sm:text-5xl">
              Five commitments. Held without exception.
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/55">
              The principles below are how we accept work, how we run it, and
              how we decide when to walk away.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <ul className="space-y-px">
              {pillars.map((p, i) => {
                const Icon = p.icon;
                return (
                  <motion.li
                    key={p.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, ease, delay: i * 0.06 }}
                    className="group relative grid grid-cols-[auto_1fr_auto] items-start gap-6 border-b border-white/[0.06] py-6 first:border-t"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] transition-colors group-hover:bg-white/[0.06]">
                      <Icon className="h-4 w-4 text-white/80" />
                    </span>
                    <div>
                      <h3 className="font-display text-xl tracking-tight">
                        {p.title}
                      </h3>
                      <p className="mt-2 max-w-prose text-[14px] leading-relaxed text-white/60">
                        {p.body}
                      </p>
                    </div>
                    <span className="font-mono text-[11px] tracking-[0.18em] text-white/30">
                      0{i + 1}
                    </span>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
