"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as const;

export function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28 lg:py-40">
      <div className="container">
        <div className="grid grid-cols-12 gap-x-10 gap-y-12 lg:gap-y-16">
          <div className="col-span-12 lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease }}
              className="lg:sticky lg:top-32"
            >
              <p className="eyebrow mb-6 sm:mb-8">About Helioran</p>
              <h2 className="font-display text-balance text-3xl font-medium leading-[1.05] tracking-tightest sm:text-5xl md:text-6xl">
                A practice built for the
                <span className="font-serif italic text-white/90"> decisions </span>
                that change the trajectory of capital.
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/60 sm:mt-8 sm:text-[16px]">
                Founded in Ireland, Helioran Capital advises businesses,
                investors, and developers across the moments that define value
                — capital formation, transactions, expansion, and stewardship.
              </p>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 text-[14px] tracking-tight text-white/85 underline-offset-4 hover:underline sm:mt-10"
              >
                The full story
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, ease }}
              className="relative aspect-[5/4] overflow-hidden rounded-lg border border-white/10"
            >
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
                alt="Architectural interior — modern finance setting"
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
                <p className="font-display text-xl font-medium leading-snug tracking-tight text-white sm:text-3xl">
                  &ldquo;Independent counsel, institutional rigour, founder
                  pragmatism — applied to every mandate.&rdquo;
                </p>
                <div className="mt-4 flex items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-white/55 sm:mt-6 sm:text-[11px]">
                  <span className="h-px w-8 bg-white/40" />
                  Helioran Capital — Operating Principle
                </div>
              </div>
            </motion.div>

            <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-6">
              <Pillar
                eyebrow="Mission"
                body="To empower businesses and investors with expert guidance, strategic insight, and practical solutions that drive sustainable growth and long-term success."
              />
              <Pillar
                eyebrow="Vision"
                body="To become a trusted advisory partner recognised for innovation, commercial excellence, and value-driven outcomes across business and investment."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pillar({ eyebrow, body }: { eyebrow: string; body: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease }}
      className="glass relative overflow-hidden rounded-lg p-6 sm:p-7"
    >
      <p className="eyebrow">{eyebrow}</p>
      <p className="mt-4 text-[14px] leading-relaxed text-white/75 sm:mt-5 sm:text-[15px]">{body}</p>
    </motion.div>
  );
}
