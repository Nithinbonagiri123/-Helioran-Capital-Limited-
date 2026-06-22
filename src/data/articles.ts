// Editorial articles — full bodies for /insights/[slug].
//
// These are placeholder professional commentaries written in Helioran's voice.
// Replace each `sections` body with real Helioran analysis before public launch.
// Slugs and metadata are stable and safe to leave as-is.

export type ArticleCategory = "Market" | "Capital" | "Property" | "Macro";

export type ArticleSection = {
  id?: string;
  heading?: string;
  paragraphs: string[];
  bullets?: string[];
  pullquote?: string;
};

export type Article = {
  slug: string;
  category: ArticleCategory;
  title: string;
  dek: string;
  publishedAt: string;
  readMinutes: number;
  author: { name: string; role: string };
  sections: ArticleSection[];
};

const helioranDesk = { name: "The Helioran Desk", role: "Editorial" };

export const articles: Article[] = [
  {
    slug: "irish-private-capital",
    category: "Capital",
    title: "Irish private capital deployment hits a five-year high",
    dek: "Family offices and domestic syndicates are quietly outpacing institutional flows into mid-market mandates.",
    publishedAt: "2026-06-18",
    readMinutes: 6,
    author: helioranDesk,
    sections: [
      {
        paragraphs: [
          "For most of the past decade the dominant headline in Irish private capital has been the inbound. International funds — predominantly UK and US — set the pace, the price, and frequently the structure of mid-market deals on the island. Twelve months in, that picture is quietly shifting.",
        ],
      },
      {
        heading: "The flow has turned",
        paragraphs: [
          "Across the engagements we have advised on this year, the proportion of cheques sourced from domestic capital — family offices, founder-led syndicates, and a small number of pension-aligned private investment programmes — has materially exceeded what we would have characterised as a typical year. Some of this is base-effect; some of it is real.",
          "Without overstating a single dataset, the directionality is unambiguous. Where 24 months ago a €15–30m equity ticket on an Irish mid-market business would have been routed first to one of three or four institutional addresses in London or Edinburgh, today's process more often includes — and not infrequently is led by — a Dublin- or Limerick-anchored principal vehicle. The cheque is the same. The capital has changed seats.",
        ],
      },
      {
        heading: "Why now",
        paragraphs: [
          "Three forces are at work. First, the slowdown in cross-border fund formation through 2024 reduced the supply of institutional dry powder applicable to Irish mid-market deals; new vintages are arriving but the pipeline is thinner than the headline AUM figures suggest. Second, domestic family wealth — much of it created in the late-1990s technology cycle and now in the hands of successor generations — is professionalising at pace. Third, the regulatory and tax architecture for private investment vehicles in Ireland has become measurably more efficient, particularly for co-investment structures.",
        ],
        pullquote:
          "The cheque is the same. The capital has changed seats.",
      },
      {
        heading: "Implications for operators",
        paragraphs: [
          "For founders and CEOs running businesses likely to seek capital in the next 12–18 months, the practical takeaways are concrete:",
        ],
        bullets: [
          "Build the investor map locally before going international. The first call should no longer reflexively be to a London GP.",
          "Expect more granular operational diligence from family offices that have lived an operating cycle themselves. The bar on commercial diligence is rising, not falling.",
          "Plan for slightly longer process timelines on domestic-led rounds. Many of these vehicles still run lean teams; the rigour is the same, the cadence is sometimes different.",
        ],
      },
      {
        heading: "What we are watching",
        paragraphs: [
          "Two indicators tell us whether this is structural or cyclical. The first is whether domestic syndicates are taking lead positions, not merely co-investing alongside institutional leads — early signals suggest they increasingly are. The second is whether the cheque sizes scale. A €30m commitment is one thing; a coordinated €60–100m process led from Dublin is the next step. Neither is impossible inside 18 months.",
          "None of this is bearish for international capital deployed into Ireland — far from it. The Irish opportunity remains structurally compelling for cross-border funds with the right thesis. But the assumption that the local seat at the cap table is necessarily institutional, and necessarily non-Irish, no longer holds. That matters for how processes are run, how relationships are nurtured, and how value is created on the way to exit.",
        ],
      },
    ],
  },
  {
    slug: "dublin-office-recalibration",
    category: "Property",
    title: "Dublin's office stack is recalibrating, not collapsing",
    dek: "Prime yields compress as covenant quality, ESG specification, and floorplate flexibility separate winners from the rest.",
    publishedAt: "2026-06-12",
    readMinutes: 8,
    author: helioranDesk,
    sections: [
      {
        paragraphs: [
          "The international narrative on commercial offices remains uniformly negative. Headlines speak of vacant towers and structural demand collapse. The Dublin reality is more textured — and more interesting — than that story allows.",
        ],
      },
      {
        heading: "Two markets, not one",
        paragraphs: [
          "There is no single Dublin office market in any meaningful analytical sense. There is a prime market, broadly defined as Grade-A space in the IFSC, Docklands, and the City Centre core, where occupier demand for floor specification, accessibility, and credentialled ESG performance remains acute. And there is a secondary market — older B-grade stock in less connected locations — where the picture genuinely is challenging. Yield trends in the two segments are now meaningfully decoupled.",
          "On the prime side, yield compression has resumed cautiously, supported by selective institutional re-entry and the realisation that the build-out cycle is at or near its peak. Yields in the secondary segment continue to drift wider, reflecting both higher vacancy and higher capex requirements to bring older stock to a leasable specification.",
        ],
      },
      {
        heading: "What occupiers actually want",
        paragraphs: [
          "The conversations we have with corporate occupiers — both Irish-headquartered and Dublin-resident multinationals — are remarkably consistent in their priorities. In rough order: ESG and energy-performance credentials; large floor plates with daylight; end-of-trip facilities; and demonstrable accessibility for hybrid work. Rental rates, surprisingly, are not the leading screen. They become decisive only after specification has been satisfied.",
          "This has direct implications for both landlords and investors. Stock that does not meet the new operational floor will increasingly trade at distressed-recovery pricing or convert to alternative uses. Stock that does meet it — and there is a finite quantity of it — will see rental tension.",
        ],
        pullquote:
          "Rental rates are not the leading screen. They become decisive only after specification has been satisfied.",
      },
      {
        heading: "Where capital is going",
        paragraphs: [
          "Institutional appetite is not absent. It is selective. Capital is moving toward assets with a credible occupier covenant; a clear path to BER A-grade or equivalent; and pricing that reflects the new cost of capital. Where these three conditions align, transactional appetite is real — including from international institutional pools that paused activity through 2023–2024.",
          "Family-office capital is doing something different. We are seeing increasing willingness to take repositioning risk on Grade-B+ assets — buying at depressed pricing, capex-ing to specification, and re-letting at the new prime rate. This is a labour-intensive thesis but the gross returns can be meaningful for investors with the patience and the operating discipline.",
        ],
      },
      {
        heading: "Outlook",
        paragraphs: [
          "We expect prime yields to compress modestly through the next four quarters, supported by limited new supply and resumed institutional appetite. Secondary yields will likely continue to widen until repurposing economics — into residential, mixed-use, or specialised commercial — meet the available pricing. Leasing velocity will remain a more reliable indicator than headline yield in the near term.",
          "The office sector is being restructured, not deconstructed. For investors with capital, conviction, and a willingness to operate, the next 18 months in Dublin look more like a sorting event than a collapse.",
        ],
      },
    ],
  },
  {
    slug: "venture-late-stage",
    category: "Market",
    title: "Late-stage venture: discipline returns to growth equity",
    dek: "Mark-downs have run their course. The next 18 months reward operators with positive unit economics and credible IPO optionality.",
    publishedAt: "2026-06-04",
    readMinutes: 7,
    author: helioranDesk,
    sections: [
      {
        paragraphs: [
          "The 2022–2024 mark-down cycle in late-stage venture is largely complete. The harder question — what does growth equity look like on the other side of it — is now legitimately answerable.",
        ],
      },
      {
        heading: "The reset is mostly behind us",
        paragraphs: [
          "On the prevailing data and what we have observed across processes, the median secondary mark on quality late-stage assets has compressed roughly 35–55% from 2021 peaks, with concentrated outliers either side. That work is, in our view, substantially complete. New primary rounds are pricing off realistic multiples again. The exception list is shrinking.",
        ],
      },
      {
        heading: "What growth-stage capital is screening for",
        paragraphs: [
          "The discriminating filters have changed materially. In the easy-money era, the lead screen was growth at almost any cost. Today's growth funds are explicitly underwriting:",
        ],
        bullets: [
          "Demonstrated path to profitability inside 18 months of close, not the 36–48 month horizons that worked in 2021.",
          "Capital efficiency metrics that compare favourably against listed peers, not just private benchmarks.",
          "A credible secondary or strategic exit narrative — not necessarily an IPO timeline, but a coherent answer to the question of how the next holder gets paid.",
        ],
      },
      {
        paragraphs: [
          "None of this is novel investing — it is, in fact, the discipline that built the franchise of every reputable growth platform. What has changed is that the discipline is now the explicit filter, not the implicit one.",
        ],
        pullquote:
          "The discipline is now the explicit filter, not the implicit one.",
      },
      {
        heading: "For founders raising at growth stages",
        paragraphs: [
          "Board conversations now warrant more preparation than they did 24 months ago. Specific suggestions:",
        ],
        bullets: [
          "Lead with the unit economics story. Bridge revenue, gross margin, and the cost-of-acquisition trajectory in the first ten minutes.",
          "Be transparent about cash runway and the path through it. Optimism without arithmetic is no longer persuasive.",
          "Frame the exit narrative early. Sophisticated growth investors will press on it, and they prefer founders who have already done the work.",
        ],
      },
      {
        heading: "Selective IPO optionality",
        paragraphs: [
          "The IPO window for venture-backed assets has not reopened broadly. It has reopened selectively — for companies with demonstrable scale, profitability, and operational maturity. Through the next four to six quarters, we expect a thin but credible stream of issuance from this profile, predominantly in B2B software, vertical SaaS, and select infrastructure-software categories. Companies positioned for this should be working with their boards and advisors now.",
          "For growth-stage capital, the next 18–24 months reward operators who treat capital as expensive and unit economics as load-bearing. That is not bearish. It is, on the long view, healthier.",
        ],
      },
    ],
  },
  {
    slug: "ecb-trajectory",
    category: "Macro",
    title: "ECB's terminal trajectory and what it means for Irish deal flow",
    dek: "A measured cutting cycle is reopening leveraged buy-out math — but only for assets with credible cash conversion.",
    publishedAt: "2026-05-28",
    readMinutes: 5,
    author: helioranDesk,
    sections: [
      {
        paragraphs: [
          "After two years of restrictive monetary policy that materially constrained leveraged deal activity across European mid-market, the ECB's measured cutting cycle is now reopening parts of the deal math that have been arithmetically closed since 2022.",
        ],
      },
      {
        heading: "Where rates are heading",
        paragraphs: [
          "The current consensus path implies a deposit facility rate stabilising in the 2.25–2.50% range through the next twelve to eighteen months — meaningfully lower than the 4.0% peak, but distinctly higher than the pre-2022 baseline. For leveraged buy-out structures, that translates to all-in debt cost in the low-to-mid single digits on senior, and mid-to-high single digits on subordinated, paper. The math works again — selectively.",
        ],
      },
      {
        heading: "LBO capacity returns, but differently",
        paragraphs: [
          "The reopening is not symmetric. Acquisitions in sectors with predictable cash conversion — business services, healthcare provision, regulated infrastructure, sub-segments of consumer staples — are seeing leverage capacity return to something close to historical norms. Acquisitions in sectors with cyclical or working-capital-intensive cash profiles are not. The senior lender community has internalised the cost-of-equity lessons of the 2022–2024 vintage and is pricing the difference.",
          "Sponsor-led activity is responding. Process volumes through Q2 2026 are visibly higher than the trough of late 2023, and the cadence of approachable deals coming to market is firming further into the second half.",
        ],
        pullquote: "The math works again — selectively.",
      },
      {
        heading: "Implications for Irish mid-market",
        paragraphs: [
          "Ireland's mid-market — broadly defined as €25–200m enterprise-value transactions — is unusually well positioned to benefit. Three reasons:",
        ],
        bullets: [
          "Sector composition. A high proportion of Irish mid-market businesses sit in healthcare services, business services, food production, and selected light manufacturing — precisely the cash-converting sectors in which leverage capacity is normalising fastest.",
          "Sponsor presence. The UK-, Dublin-, and continental-European mid-market sponsor community is actively scoping Irish opportunities, with a noticeable uplift in process attendance since Q1 2026.",
          "Currency and regulatory clarity. Sterling-euro volatility and post-Brexit regulatory bedding-in have both reduced as concerns, removing two friction points that intermittently delayed processes in 2023–2024.",
        ],
      },
      {
        heading: "What could derail this",
        paragraphs: [
          "The thesis is constructive but not unconditional. Three risks deserve attention. First, a re-acceleration in eurozone inflation that forces the ECB to pause or partially reverse the cutting cycle — currently a low-probability scenario but a non-zero one. Second, a deterioration in sponsor-side fundraising that limits the equity-side capacity for new deals. Third, geopolitical events that compress risk appetite at the institutional limited-partner level. None of these are base-case; all of them are tracked.",
          "For founders, boards, and investors operating in Irish mid-market, the next twelve months are likely to be the most active operating window since 2021. Preparing well — financial discipline, governance, equity story — is now timely work, not premature work.",
        ],
      },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getRelatedArticles(slug: string, limit: number = 3): Article[] {
  return articles.filter((a) => a.slug !== slug).slice(0, limit);
}
