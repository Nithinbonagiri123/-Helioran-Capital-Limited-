"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import Link from "next/link";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

export function Services() {
  const [activeId, setActiveId] = useState<string>(services[0].id);
  const active = services.find((s) => s.id === activeId) ?? services[0];
  const Icon = active.icon;

  return (
    <section id="services" className="relative py-32 sm:py-40">
      <div className="container">
        <div className="grid grid-cols-12 items-end gap-y-10">
          <div className="col-span-12 md:col-span-8">
            <p className="eyebrow mb-6">Practice areas</p>
            <h2 className="font-display text-balance text-4xl leading-[1.05] tracking-tightest sm:text-5xl md:text-6xl">
              Twelve disciplines. <span className="italic text-white/85">One</span> standard.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4">
            <p className="max-w-sm text-[15px] leading-relaxed text-white/55 md:ml-auto">
              A coordinated practice spanning advisory, transactions, and
              capital — engineered to compound across the lifecycle of a
              business.
            </p>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-12 gap-x-10 gap-y-10">
          {/* Left: list of services as luxury editorial rows */}
          <div className="col-span-12 lg:col-span-7">
            <ol className="divide-y divide-white/[0.06]">
              {services.map((s) => {
                const isActive = s.id === activeId;
                return (
                  <li key={s.id}>
                    <button
                      type="button"
                      onMouseEnter={() => setActiveId(s.id)}
                      onFocus={() => setActiveId(s.id)}
                      onClick={() => setActiveId(s.id)}
                      className={cn(
                        "group relative grid w-full grid-cols-[auto_1fr_auto] items-center gap-6 py-6 text-left transition-colors duration-300",
                        isActive ? "text-white" : "text-white/55 hover:text-white/85"
                      )}
                    >
                      <span className="font-mono text-[11px] tracking-[0.18em] text-white/35">
                        {s.number}
                      </span>
                      <span className="font-display text-2xl tracking-tight sm:text-3xl">
                        {s.title}
                      </span>
                      <motion.span
                        animate={{ rotate: isActive ? 45 : 0 }}
                        transition={{ duration: 0.3, ease }}
                        className={cn(
                          "grid h-9 w-9 place-items-center rounded-full border transition-colors",
                          isActive
                            ? "border-white/30 bg-white/10"
                            : "border-white/10 bg-white/[0.02]"
                        )}
                      >
                        <Plus className="h-4 w-4" />
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          key={`detail-${s.id}`}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4, ease }}
                          className="overflow-hidden lg:hidden"
                        >
                          <div className="pb-6 pl-12">
                            <p className="max-w-prose text-[15px] leading-relaxed text-white/70">
                              {s.description}
                            </p>
                            <ul className="mt-5 flex flex-wrap gap-2">
                              {s.highlights.map((h) => (
                                <li
                                  key={h}
                                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] tracking-tight text-white/65"
                                >
                                  {h}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* Right: persistent detail panel for desktop */}
          <div className="col-span-12 hidden lg:col-span-5 lg:block">
            <div className="sticky top-32">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease }}
                  className="glass relative overflow-hidden rounded-lg p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/[0.04]">
                      <Icon className="h-5 w-5 text-white" />
                    </span>
                    <span className="font-mono text-[11px] tracking-[0.22em] text-white/40">
                      {active.number} / {String(services.length).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-8 font-display text-3xl leading-tight tracking-tight">
                    {active.title}
                  </h3>
                  <p className="mt-5 text-[15px] leading-relaxed text-white/70">
                    {active.description}
                  </p>

                  <div className="mt-8 hairline" />
                  <ul className="mt-6 space-y-3">
                    {active.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-center gap-3 text-[14px] text-white/80"
                      >
                        <span className="h-px w-4 bg-white/40" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-10">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-[14px] tracking-tight text-white underline-offset-4 hover:underline"
                    >
                      Discuss this mandate
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
