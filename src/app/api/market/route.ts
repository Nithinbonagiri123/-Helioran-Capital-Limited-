import { NextResponse } from "next/server";
import { baseTickers, sectorPulse, propertyMetrics, insightArticles } from "@/data/insights";

// Simulated market intelligence endpoint.
// Adds small randomized drift to base tickers to mimic a live feed.
export async function GET() {
  const now = Date.now();
  const tickers = baseTickers.map((t) => {
    const drift = (Math.sin(now / 9000 + t.symbol.charCodeAt(0)) + Math.random() * 0.4 - 0.2) * 0.6;
    const price = +(t.price * (1 + drift / 100)).toFixed(t.symbol === "EURUSD" || t.symbol === "BUND" ? 4 : 2);
    const changePct = +(t.changePct + drift / 4).toFixed(2);
    return { ...t, price, changePct };
  });

  return NextResponse.json(
    {
      generatedAt: new Date().toISOString(),
      tickers,
      sectors: sectorPulse,
      property: propertyMetrics,
      articles: insightArticles,
    },
    {
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    }
  );
}
