"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import type { Ticker } from "@/data/insights";
import { baseTickers } from "@/data/insights";
import { cn } from "@/lib/utils";

export function MarketTicker() {
  const [tickers, setTickers] = useState<Ticker[]>(baseTickers);

  useEffect(() => {
    let mounted = true;

    async function fetchOnce() {
      try {
        const res = await fetch("/api/market", { cache: "no-store" });
        if (!res.ok) return;
        const data = await res.json();
        if (mounted && data?.tickers) setTickers(data.tickers);
      } catch {
        // silent — fall back to base values
      }
    }

    fetchOnce();
    const id = setInterval(fetchOnce, 6000);
    return () => {
      mounted = false;
      clearInterval(id);
    };
  }, []);

  const doubled = [...tickers, ...tickers];

  return (
    <div className="relative overflow-hidden border-y border-white/[0.06] bg-white/[0.015] backdrop-blur">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-ink-950 to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-ink-950 to-transparent sm:w-24" />
      <div className="flex w-max animate-ticker gap-8 py-3 sm:gap-12 sm:py-4">
        {doubled.map((t, i) => (
          <div
            key={`${t.symbol}-${i}`}
            className="flex items-center gap-2 text-[11px] tabular tracking-tight whitespace-nowrap sm:gap-3 sm:text-[12px]"
          >
            <span className="text-white/45">{t.symbol}</span>
            <span className="text-white/85">{t.price.toLocaleString("en-IE", { maximumFractionDigits: 2 })}</span>
            <span
              className={cn(
                "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] sm:text-[11px]",
                t.changePct >= 0
                  ? "bg-emerald-500/10 text-emerald-300"
                  : "bg-rose-500/10 text-rose-300"
              )}
            >
              {t.changePct >= 0 ? (
                <ArrowUpRight className="h-3 w-3" />
              ) : (
                <ArrowDownRight className="h-3 w-3" />
              )}
              {t.changePct >= 0 ? "+" : ""}
              {t.changePct.toFixed(2)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
