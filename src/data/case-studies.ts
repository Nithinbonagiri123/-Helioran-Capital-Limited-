export type CaseStudy = {
  id: string;
  sector: string;
  geography: string;
  mandate: string;
  headline: string;
  metricLabel: string;
  metricValue: string;
  summary: string;
  duration: string;
  year: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "fintech-series-a",
    sector: "FinTech",
    geography: "Dublin",
    mandate: "Capital Raise — Series A",
    headline: "Closed an oversubscribed Series A for a B2B payments platform.",
    metricLabel: "Raised",
    metricValue: "€12.4M",
    summary:
      "Repositioned the equity story, rebuilt the financial model, and ran a targeted process across UK, Irish, and Nordic funds — closing at the top of guidance.",
    duration: "14 weeks",
    year: "2025",
  },
  {
    id: "mixed-use-development",
    sector: "Real Estate",
    geography: "Cork",
    mandate: "Property Investment Advisory",
    headline: "Structured a mixed-use redevelopment in Cork's docklands corridor.",
    metricLabel: "GDV",
    metricValue: "€84M",
    summary:
      "Feasibility, capital stack design, and joint-venture negotiation across an institutional LP and a regional developer — delivered on a 9-week timeline.",
    duration: "9 weeks",
    year: "2025",
  },
  {
    id: "ma-buy-side",
    sector: "Industrial Services",
    geography: "UK & Ireland",
    mandate: "Buy-side M&A",
    headline: "Sourced and closed two bolt-on acquisitions for a mid-market PE platform.",
    metricLabel: "Combined EV",
    metricValue: "€38M",
    summary:
      "Built the acquisition thesis, ran outreach to 60+ targets, and led negotiation through to close — both deals signed within the same quarter.",
    duration: "6 months",
    year: "2024",
  },
  {
    id: "market-entry-ireland",
    sector: "Renewables",
    geography: "EU → Ireland",
    mandate: "Market Entry & Diligence",
    headline: "Advised a European renewables operator on Irish market entry.",
    metricLabel: "Pipeline secured",
    metricValue: "210 MW",
    summary:
      "Commercial diligence, regulatory mapping, and partner identification — culminating in a development partnership covering five counties.",
    duration: "11 weeks",
    year: "2024",
  },
];
