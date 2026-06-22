"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowDownRight, Activity, Clock } from "lucide-react";
import type {
  Ticker,
  SectorPulse,
  PropertyMetric,
  InsightArticle,
} from "@/data/insights";
import {
  baseTickers,
  sectorPulse,
  propertyMetrics,
  insightArticles,
} from "@/data/insights";
import { cn, formatPercent } from "@/lib/utils";

type FeedResponse = {
  generatedAt: string;
  tickers: Ticker[];
  sectors: SectorPulse[];
  property: PropertyMetric[];
  articles: InsightArticle[];
};

const ease = [0.22, 1, 0.36, 1] as const;

export function Insights() {
  const [data, setData] = useState<FeedResponse>({
    generatedAt: new Date().toISOString(),
    tickers: baseTickers,
    sectors: sectorPulse,
    property: propertyMetrics,
    articles: insightArticles,
  });
  const [pulseKey, setPulseKey] = useState(0);

  useEffect(() => {
    let mounted = true;

    async function tick() {
      try {
        const res = await fetch("/api/market", { cache: "no-store" });
        if (!res.ok) return;
        const j = (await res.json()) as FeedResponse;
        if (mounted) {
          setData(j);
          setPulseKey((k) => k + 1);
        }
      } catch {
        // ignore — fallback in place
      }
    }

    tick();
    const id = setInterval(tick, 7000);
    return () => {
      mounted = false;
      clearInterval(id);
    };
  }, []);

  const lastUpdated = new Date(data.generatedAt).toLocaleTimeString("en-IE", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <section id="insights" className="relative py-20 sm:py-28 lg:py-40">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-[40%] bg-[radial-gradient(ellipse_at_top,rgba(31,92,255,0.18),transparent_60%)]"
      />

      <div className="container">
        <div className="grid grid-cols-12 items-end gap-y-8 sm:gap-y-10">
          <div className="col-span-12 md:col-span-8">
            <p className="eyebrow mb-5 sm:mb-6">Market intelligence</p>
            <h2 className="font-display text-balance text-3xl font-medium leading-[1.05] tracking-tightest sm:text-5xl md:text-6xl">
              The Helioran <span className="font-serif italic text-white/90">Pulse</span>.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4">
            <div className="md:ml-auto md:text-right">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] tracking-tight text-white/65">
                <motion.span
                  key={pulseKey}
                  initial={{ scale: 0.6, opacity: 0.4 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, ease }}
                  className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.7)]"
                />
                Live feed
                <span className="text-white/35">·</span>
                <span className="tabular">{lastUpdated}</span>
              </div>
              <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-white/45 md:ml-auto">
                Synthesised from listed equities, sovereigns, FX, and Irish
                real-asset benchmarks. Refreshed every seven seconds.
              </p>
            </div>
          </div>
        </div>

        {/* Dashboard grid */}
        <div className="mt-12 grid grid-cols-12 gap-4 sm:mt-16 sm:gap-5">
          {/* Tickers panel */}
          <div className="col-span-12 lg:col-span-8">
            <Panel title="Capital Markets" subtitle="Equities · Rates · Commodities · FX">
              <div className="grid grid-cols-2 divide-x divide-y divide-white/[0.05] sm:grid-cols-4">
                {data.tickers.map((t) => (
                  <TickerCell key={t.symbol} t={t} />
                ))}
              </div>
            </Panel>
          </div>

          {/* Macro / "Helioran view" */}
          <div className="col-span-12 lg:col-span-4">
            <Panel title="Helioran View" subtitle="Positioning · Conviction" tone="accent">
              <div className="space-y-5 p-6">
                <ViewBullet
                  tone="positive"
                  label="Overweight"
                  body="Quality compounders with positive FCF conversion across IE/UK mid-market."
                />
                <ViewBullet
                  tone="neutral"
                  label="Selective"
                  body="Prime Dublin office where covenant strength and ESG specification align."
                />
                <ViewBullet
                  tone="negative"
                  label="Underweight"
                  body="Late-stage venture without credible 18-month liquidity narrative."
                />
              </div>
            </Panel>
          </div>

          {/* Sector pulse */}
          <div className="col-span-12 lg:col-span-7">
            <Panel title="Sector Pulse" subtitle="YTD performance · Helioran conviction">
              <div className="divide-y divide-white/[0.05]">
                {data.sectors.map((s) => (
                  <SectorRow key={s.sector} s={s} />
                ))}
              </div>
            </Panel>
          </div>

          {/* Property yields */}
          <div className="col-span-12 lg:col-span-5">
            <Panel title="Irish Real Assets" subtitle="Prime yields · YTD movement">
              <div className="divide-y divide-white/[0.05]">
                {data.property.map((p) => (
                  <div
                    key={p.region}
                    className="grid grid-cols-[1fr_auto_auto] items-center gap-4 px-6 py-4"
                  >
                    <div>
                      <div className="text-[14px] tracking-tight text-white">
                        {p.region}
                      </div>
                      <div className="text-[11px] uppercase tracking-[0.18em] text-white/40">
                        {p.segment}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-display text-xl tabular leading-none text-white">
                        {p.yieldPct.toFixed(2)}%
                      </div>
                      <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/40">
                        Yield
                      </div>
                    </div>
                    <span
                      className={cn(
                        "rounded-full px-2.5 py-1 text-[11px] tabular",
                        p.ytdPct >= 0
                          ? "bg-emerald-500/10 text-emerald-300"
                          : "bg-rose-500/10 text-rose-300"
                      )}
                    >
                      {formatPercent(p.ytdPct)}
                    </span>
                  </div>
                ))}
              </div>
            </Panel>
          </div>

          {/* Editorial: insights articles */}
          <div className="col-span-12">
            <Panel title="Latest from the desk" subtitle="Long-form commentary & briefings">
              <ul className="divide-y divide-white/[0.05]">
                {data.articles.map((a, i) => (
                  <motion.li
                    key={a.id}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease, delay: i * 0.05 }}
                  >
                    <a
                      href="#"
                      className="group grid grid-cols-[1fr_auto] gap-x-4 gap-y-2 px-5 py-5 transition-colors hover:bg-white/[0.02] sm:grid-cols-12 sm:items-center sm:gap-4 sm:px-6"
                    >
                      <span className="col-start-1 row-start-1 text-[10px] uppercase tracking-[0.18em] text-white/50 sm:col-span-2 sm:text-[11px]">
                        {a.category}
                      </span>
                      <span className="col-span-2 row-start-2 font-display text-[16px] font-medium leading-snug tracking-tight text-white sm:col-span-7 sm:row-start-auto sm:text-[20px]">
                        {a.title}
                      </span>
                      <span className="col-start-1 row-start-3 mt-1 inline-flex items-center gap-1.5 text-[11px] text-white/45 sm:col-span-2 sm:row-start-auto sm:mt-0 sm:text-[12px]">
                        <Clock className="h-3.5 w-3.5" />
                        {a.readMinutes} min
                      </span>
                      <span className="col-start-2 row-span-3 row-start-1 inline-flex h-9 w-9 items-center justify-center self-start rounded-full border border-white/10 bg-white/[0.02] transition-all group-hover:bg-white group-hover:text-ink-950 sm:col-span-1 sm:row-span-1 sm:self-center">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </Panel>
          </div>
        </div>
      </div>
    </section>
  );
}

function Panel({
  title,
  subtitle,
  children,
  tone,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  tone?: "accent";
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg border border-white/[0.07]",
        tone === "accent"
          ? "bg-gradient-to-br from-brand-700/30 via-brand-900/20 to-transparent"
          : "bg-white/[0.015]"
      )}
    >
      <div className="flex items-center justify-between gap-3 border-b border-white/[0.05] px-5 py-4 sm:px-6">
        <div className="min-w-0">
          <div className="text-[13px] tracking-tight text-white">{title}</div>
          {subtitle && (
            <div className="mt-0.5 truncate text-[10px] uppercase tracking-[0.18em] text-white/40 sm:text-[11px]">
              {subtitle}
            </div>
          )}
        </div>
        <Activity className="h-3.5 w-3.5 shrink-0 text-white/30" />
      </div>
      {children}
    </div>
  );
}

function TickerCell({ t }: { t: Ticker }) {
  const positive = t.changePct >= 0;
  return (
    <div className="px-4 py-4 sm:px-5 sm:py-5">
      <div className="flex items-center justify-between gap-2">
        <span className="truncate text-[10px] uppercase tracking-[0.18em] text-white/40 sm:text-[11px]">
          {t.symbol}
        </span>
        <span
          className={cn(
            "inline-flex shrink-0 items-center gap-0.5 text-[10px] tabular sm:text-[11px]",
            positive ? "text-emerald-300" : "text-rose-300"
          )}
        >
          {positive ? (
            <ArrowUpRight className="h-3 w-3" />
          ) : (
            <ArrowDownRight className="h-3 w-3" />
          )}
          {formatPercent(t.changePct)}
        </span>
      </div>
      <AnimatePresence mode="popLayout">
        <motion.div
          key={t.price}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.3 }}
          className="mt-3 font-display text-xl font-medium tabular leading-none tracking-tight text-white sm:text-2xl"
        >
          {t.price.toLocaleString("en-IE", { maximumFractionDigits: t.price < 10 ? 4 : 2 })}
        </motion.div>
      </AnimatePresence>
      <div className="mt-1 truncate text-[11px] text-white/45 sm:text-[12px]">{t.name}</div>
    </div>
  );
}

function SectorRow({ s }: { s: SectorPulse }) {
  const positive = s.ytdReturn >= 0;
  const bar = Math.min(100, Math.abs(s.ytdReturn) * 4);
  const convictionTone =
    s.conviction === "Overweight"
      ? "bg-emerald-500/15 text-emerald-300"
      : s.conviction === "Underweight"
      ? "bg-rose-500/15 text-rose-300"
      : "bg-white/10 text-white/65";

  return (
    <div className="grid grid-cols-[1fr_auto_auto] items-center gap-4 px-6 py-4">
      <div>
        <div className="text-[14px] tracking-tight text-white">{s.sector}</div>
        <div className="relative mt-2 h-1 w-44 max-w-full overflow-hidden rounded-full bg-white/[0.06]">
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: `${bar}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease }}
            className={cn(
              "absolute inset-y-0 left-0 rounded-full",
              positive
                ? "bg-gradient-to-r from-emerald-400 to-emerald-200"
                : "bg-gradient-to-r from-rose-500 to-rose-300"
            )}
          />
        </div>
      </div>
      <span
        className={cn(
          "tabular text-[13px]",
          positive ? "text-emerald-300" : "text-rose-300"
        )}
      >
        {formatPercent(s.ytdReturn)}
      </span>
      <span className={cn("rounded-full px-2.5 py-1 text-[11px]", convictionTone)}>
        {s.conviction}
      </span>
    </div>
  );
}

function ViewBullet({
  tone,
  label,
  body,
}: {
  tone: "positive" | "neutral" | "negative";
  label: string;
  body: string;
}) {
  const map = {
    positive: "bg-emerald-400",
    neutral: "bg-white/70",
    negative: "bg-rose-400",
  } as const;
  return (
    <div className="flex gap-4">
      <span className={cn("mt-1.5 h-2 w-2 shrink-0 rounded-full", map[tone])} />
      <div>
        <div className="text-[12px] uppercase tracking-[0.18em] text-white/55">
          {label}
        </div>
        <p className="mt-1 text-[14px] leading-relaxed text-white/80">{body}</p>
      </div>
    </div>
  );
}
