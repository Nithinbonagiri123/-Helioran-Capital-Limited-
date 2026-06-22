"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { caseStudies } from "@/data/case-studies";

const ease = [0.22, 1, 0.36, 1] as const;

export function CaseStudies() {
  return (
    <section id="case-studies" className="relative py-20 sm:py-28 lg:py-40">
      <div className="container">
        <div className="grid grid-cols-12 items-end gap-y-8 sm:gap-y-10">
          <div className="col-span-12 md:col-span-8">
            <p className="eyebrow mb-5 sm:mb-6">Selected work</p>
            <h2 className="font-display text-balance text-3xl font-medium leading-[1.05] tracking-tightest sm:text-5xl md:text-6xl">
              Mandates that defined <span className="font-serif italic text-white/90">outcomes</span>.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4">
            <p className="max-w-md text-[14px] leading-relaxed text-white/55 sm:text-[15px] md:ml-auto md:max-w-sm">
              A sample of recent engagements — anonymised where confidentiality
              requires, representative of the standard we hold across every
              mandate.
            </p>
          </div>
        </div>

        <ul className="mt-12 divide-y divide-white/[0.06] border-y border-white/[0.06] sm:mt-16 lg:mt-20">
          {caseStudies.map((cs, i) => (
            <motion.li
              key={cs.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease, delay: i * 0.06 }}
              className="group relative"
            >
              {/* Mobile layout — metric pinned top-right, headline + summary below */}
              <div className="grid grid-cols-[auto_1fr_auto] gap-x-4 gap-y-4 py-8 sm:hidden">
                <span className="col-start-1 row-start-1 self-start font-mono text-[10px] tracking-[0.18em] text-white/35">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="col-start-2 row-start-1 self-start">
                  <div className="text-[12px] tracking-tight text-white">
                    {cs.sector}
                  </div>
                  <div className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-white/40">
                    {cs.geography} · {cs.year}
                  </div>
                </div>
                <div className="col-start-3 row-start-1 self-start text-right">
                  <div className="font-display text-xl font-medium tabular leading-none tracking-tight text-white">
                    {cs.metricValue}
                  </div>
                  <div className="mt-1 text-[9px] uppercase tracking-[0.18em] text-white/40">
                    {cs.metricLabel}
                  </div>
                </div>
                <div className="col-span-3 col-start-1 row-start-2">
                  <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] tracking-tight text-white/65">
                    {cs.mandate}
                  </span>
                  <h3 className="mt-4 font-display text-[18px] font-medium leading-snug tracking-tight text-white">
                    {cs.headline}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-white/60">
                    {cs.summary}
                  </p>
                  <div className="mt-3 text-[10px] uppercase tracking-[0.18em] text-white/35">
                    Engagement · {cs.duration}
                  </div>
                </div>
              </div>

              {/* Desktop layout */}
              <div className="hidden grid-cols-12 items-center gap-x-8 gap-y-6 py-10 sm:grid">
                <div className="col-span-1">
                  <span className="font-mono text-[11px] tracking-[0.18em] text-white/35">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="col-span-3">
                  <div className="text-[13px] tracking-tight text-white">
                    {cs.sector}
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-white/40">
                    {cs.geography} · {cs.year}
                  </div>
                  <div className="mt-3 inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] tracking-tight text-white/65">
                    {cs.mandate}
                  </div>
                </div>

                <div className="col-span-6">
                  <h3 className="font-display text-2xl font-medium leading-snug tracking-tight text-white sm:text-3xl">
                    {cs.headline}
                  </h3>
                  <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-white/60">
                    {cs.summary}
                  </p>
                  <div className="mt-3 text-[11px] uppercase tracking-[0.18em] text-white/35">
                    Engagement · {cs.duration}
                  </div>
                </div>

                <div className="col-span-2 text-right">
                  <div className="font-display text-3xl font-medium tabular tracking-tight text-white">
                    {cs.metricValue}
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-white/40">
                    {cs.metricLabel}
                  </div>
                </div>
              </div>

              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-0 -bottom-px h-px scale-x-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:scale-x-100"
              />
            </motion.li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col items-start gap-5 sm:mt-14 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-6">
          <p className="max-w-md text-[13px] text-white/55 sm:text-[14px]">
            Confidentiality is foundational to our work. Detailed case
            references are available under NDA upon request.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-[13px] tracking-tight text-white underline-offset-4 hover:underline sm:text-[14px]"
          >
            Request a confidential reference
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
