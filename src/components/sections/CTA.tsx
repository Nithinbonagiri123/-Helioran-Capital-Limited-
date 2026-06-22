"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ease = [0.22, 1, 0.36, 1] as const;

export function CTA() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease }}
          className="relative overflow-hidden rounded-2xl border border-white/[0.08]"
        >
          <Image
            src="https://images.unsplash.com/photo-1605792657660-596af9009e82?auto=format&fit=crop&w=2000&q=80"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-40"
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-br from-ink-950/95 via-ink-950/85 to-brand-900/60" />

          <div className="relative grid grid-cols-12 gap-y-10 p-10 sm:p-14 md:p-20">
            <div className="col-span-12 md:col-span-8">
              <p className="eyebrow mb-6">Begin a conversation</p>
              <h2 className="font-display text-balance text-4xl leading-[1.05] tracking-tightest sm:text-5xl md:text-6xl">
                A short conversation often reveals the right next move.
              </h2>
              <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-white/70">
                We accept a small number of mandates each quarter. If your
                situation calls for considered counsel, we&apos;d welcome the
                introduction.
              </p>
            </div>
            <div className="col-span-12 flex items-end md:col-span-4 md:justify-end">
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Engage with Helioran
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
