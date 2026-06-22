import {
  Compass,
  LineChart,
  Briefcase,
  Sparkles,
  Building2,
  Handshake,
  ShieldCheck,
  TrendingUp,
  Rocket,
  Users,
  Network,
  FileSearch,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: LucideIcon;
  highlights: string[];
};

export const services: Service[] = [
  {
    id: "strategic-advisory",
    number: "01",
    shortTitle: "Strategy",
    title: "Strategic Business Advisory",
    description:
      "Boardroom-grade counsel on growth trajectories, capital allocation, and competitive positioning — translated into decisions that move the balance sheet.",
    icon: Compass,
    highlights: ["Growth strategy design", "Operating model review", "Executive workshops"],
  },
  {
    id: "corporate-finance",
    number: "02",
    shortTitle: "Corp Finance",
    title: "Corporate Finance Support",
    description:
      "Capital structure, financing strategy, and transaction readiness — engineered for institutional rigour and founder pragmatism.",
    icon: LineChart,
    highlights: ["Capital structuring", "Debt & equity advisory", "Financial modelling"],
  },
  {
    id: "investment-analysis",
    number: "03",
    shortTitle: "Investment",
    title: "Investment Analysis & Evaluation",
    description:
      "Independent diligence on opportunities across asset classes — quantitative, qualitative, and unflinching.",
    icon: FileSearch,
    highlights: ["Deal screening", "Valuation modelling", "Investment memoranda"],
  },
  {
    id: "venture-capital",
    number: "04",
    shortTitle: "Venture",
    title: "Venture Capital & Startup Advisory",
    description:
      "Operator-led guidance for founders building category-defining companies — from seed thesis to Series C governance.",
    icon: Rocket,
    highlights: ["Fundraising strategy", "Investor matching", "Board readiness"],
  },
  {
    id: "private-investment",
    number: "05",
    shortTitle: "Private",
    title: "Private Investment Consulting",
    description:
      "Confidential, principal-aligned advice for family offices, HNW individuals, and private syndicates pursuing differentiated returns.",
    icon: Briefcase,
    highlights: ["Portfolio construction", "Co-investment access", "Wealth structuring"],
  },
  {
    id: "property",
    number: "06",
    shortTitle: "Property",
    title: "Property Investment Consultancy",
    description:
      "Real-asset strategy across residential, commercial, and mixed-use — anchored in market microstructure and yield discipline.",
    icon: Building2,
    highlights: ["Acquisition advisory", "Yield analysis", "Development feasibility"],
  },
  {
    id: "ma",
    number: "07",
    shortTitle: "M&A",
    title: "Mergers & Acquisitions Support",
    description:
      "End-to-end M&A execution — from target identification through negotiation, diligence, and post-close integration.",
    icon: Handshake,
    highlights: ["Buy-side mandates", "Sell-side processes", "Integration planning"],
  },
  {
    id: "due-diligence",
    number: "08",
    shortTitle: "Diligence",
    title: "Due Diligence & Risk Assessment",
    description:
      "Multi-disciplinary diligence — commercial, financial, operational, and regulatory — calibrated to the asset and the appetite.",
    icon: ShieldCheck,
    highlights: ["Commercial DD", "Financial review", "Risk register"],
  },
  {
    id: "market-research",
    number: "09",
    shortTitle: "Research",
    title: "Market Research & Commercial Intelligence",
    description:
      "Bespoke intelligence on sectors, geographies, and competitors — sourced, validated, and structured for decision-making.",
    icon: TrendingUp,
    highlights: ["Sector deep-dives", "Competitor mapping", "Demand modelling"],
  },
  {
    id: "growth",
    number: "10",
    shortTitle: "Growth",
    title: "Business Growth & Expansion Planning",
    description:
      "Scaling playbooks for businesses entering new markets, channels, or product lines — built for execution, not slideware.",
    icon: Sparkles,
    highlights: ["Market entry", "Channel strategy", "Operating cadence"],
  },
  {
    id: "project",
    number: "11",
    shortTitle: "Projects",
    title: "Project Development & Management Support",
    description:
      "Hands-on stewardship of complex initiatives — from feasibility through delivery — with a single line of accountability.",
    icon: Network,
    highlights: ["Feasibility studies", "PMO setup", "Delivery oversight"],
  },
  {
    id: "investor-relations",
    number: "12",
    shortTitle: "IR & Capital",
    title: "Investor Relations & Capital Raising",
    description:
      "Narrative, materials, and access — built to convert conviction into commitments across institutional and private capital.",
    icon: Users,
    highlights: ["IR strategy", "Pitch architecture", "Capital introductions"],
  },
];
