// Mocked market intelligence data. In production this would come from
// providers like Refinitiv, Bloomberg, or aggregated public APIs.

import { articles } from "./articles";

export type Ticker = {
  symbol: string;
  name: string;
  price: number;
  changePct: number;
};

export type SectorPulse = {
  sector: string;
  ytdReturn: number;
  momentum: "up" | "down" | "flat";
  conviction: "Overweight" | "Neutral" | "Underweight";
};

export type PropertyMetric = {
  region: string;
  yieldPct: number;
  ytdPct: number;
  segment: string;
};

// Preview shape used by the Insights dashboard. Derived from /data/articles so
// the slug, category, title, dek, etc. stay in sync with the article pages.
export type InsightArticle = {
  id: string;
  slug: string;
  category: "Market" | "Capital" | "Property" | "Macro";
  title: string;
  dek: string;
  readMinutes: number;
  published: string;
};

export const baseTickers: Ticker[] = [
  { symbol: "ISEQ", name: "Euronext Dublin", price: 9842.31, changePct: 0.42 },
  { symbol: "FTSE", name: "FTSE 100", price: 8211.55, changePct: -0.18 },
  { symbol: "SX5E", name: "Euro Stoxx 50", price: 4982.07, changePct: 0.31 },
  { symbol: "SPX", name: "S&P 500", price: 5614.92, changePct: 0.12 },
  { symbol: "EURUSD", name: "EUR/USD", price: 1.0842, changePct: -0.06 },
  { symbol: "BUND", name: "10Y Bund Yield", price: 2.41, changePct: 0.03 },
  { symbol: "BRENT", name: "Brent Crude", price: 78.92, changePct: 0.88 },
  { symbol: "GOLD", name: "Gold Spot", price: 2384.5, changePct: 0.27 },
];

export const sectorPulse: SectorPulse[] = [
  { sector: "Financial Services", ytdReturn: 11.4, momentum: "up", conviction: "Overweight" },
  { sector: "Technology", ytdReturn: 18.2, momentum: "up", conviction: "Overweight" },
  { sector: "Industrials", ytdReturn: 6.7, momentum: "flat", conviction: "Neutral" },
  { sector: "Real Estate", ytdReturn: 4.1, momentum: "up", conviction: "Neutral" },
  { sector: "Healthcare", ytdReturn: 8.9, momentum: "up", conviction: "Overweight" },
  { sector: "Energy", ytdReturn: -2.3, momentum: "down", conviction: "Underweight" },
];

export const propertyMetrics: PropertyMetric[] = [
  { region: "Dublin", segment: "Prime Office", yieldPct: 5.25, ytdPct: 2.1 },
  { region: "Cork", segment: "Industrial", yieldPct: 6.75, ytdPct: 4.4 },
  { region: "Galway", segment: "Residential PRS", yieldPct: 4.85, ytdPct: 3.2 },
  { region: "Limerick", segment: "Mixed-Use", yieldPct: 6.10, ytdPct: 2.8 },
];

export const insightArticles: InsightArticle[] = articles.map((a) => ({
  id: a.slug,
  slug: a.slug,
  category: a.category,
  title: a.title,
  dek: a.dek,
  readMinutes: a.readMinutes,
  published: a.publishedAt,
}));
