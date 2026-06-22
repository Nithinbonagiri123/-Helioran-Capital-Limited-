"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export type LegalSection = {
  id: string;
  title: string;
  body: React.ReactNode;
};

export function LegalLayout({
  eyebrow,
  title,
  lede,
  updated,
  sections,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/[0.05] pt-32 pb-12 sm:pt-44 sm:pb-16 lg:pt-52">
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(ellipse_at_top,rgba(15,55,168,0.35),transparent_60%)]"
        />
        <div className="container">
          <p className="eyebrow mb-6 sm:mb-8">{eyebrow}</p>
          <h1 className="font-display text-balance text-[34px] font-medium leading-[1.02] tracking-tightest sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-white/65 sm:mt-8 sm:text-[17px]">
            {lede}
          </p>
          <p className="mt-6 text-[11px] uppercase tracking-[0.18em] text-white/40">
            Last updated · {updated}
          </p>
        </div>
      </section>

      <section className="relative py-16 sm:py-24 lg:py-32">
        <div className="container">
          <div className="grid grid-cols-12 gap-x-10 gap-y-12 lg:gap-y-16">
            {/* Table of contents */}
            <aside className="col-span-12 lg:col-span-3">
              <div className="lg:sticky lg:top-32">
                <p className="eyebrow mb-5">Contents</p>
                <nav>
                  <ol className="space-y-3 text-[13px] text-white/55">
                    {sections.map((s, i) => (
                      <li key={s.id}>
                        <a
                          href={`#${s.id}`}
                          className="group flex items-start gap-3 transition-colors hover:text-white"
                        >
                          <span className="font-mono text-[10px] tracking-[0.18em] text-white/30 group-hover:text-white/55">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span>{s.title}</span>
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </div>
            </aside>

            {/* Body */}
            <article className="col-span-12 lg:col-span-9">
              <div className="space-y-14">
                {sections.map((s, i) => (
                  <motion.section
                    key={s.id}
                    id={s.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, ease, delay: i * 0.05 }}
                    className="scroll-mt-32"
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-[11px] tracking-[0.18em] text-white/35">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h2 className="font-display text-2xl font-medium tracking-tight text-white sm:text-3xl">
                        {s.title}
                      </h2>
                    </div>
                    <div className="prose-helioran mt-5 max-w-2xl pl-0 sm:pl-10">
                      {s.body}
                    </div>
                  </motion.section>
                ))}
              </div>

              <div className="mt-20 hairline" />

              <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                <p className="max-w-md text-[13px] text-white/55">
                  Questions about this document? We respond to data and
                  engagement queries personally within two business days.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-[14px] tracking-tight text-white underline-offset-4 hover:underline"
                >
                  Get in touch
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
