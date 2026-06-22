import type { Metadata } from "next";
import { LegalLayout, type LegalSection } from "@/components/sections/LegalLayout";

export const metadata: Metadata = {
  title: "Regulatory Disclosure",
  description:
    "Helioran Capital Limited — regulatory status, the nature of our services, and important client disclosures.",
};

const sections: LegalSection[] = [
  {
    id: "entity",
    title: "About the entity",
    body: (
      <>
        <p>
          <strong>Helioran Capital Limited</strong> is a private company
          incorporated in Ireland.
        </p>
        <p>
          Registered office: Ducart Suite, Commercial Campus, Castletroy,
          Limerick V94 Y6FD, Ireland.
        </p>
        <div className="callout">
          <strong>Verification</strong>
          Our Companies Registration Office (CRO) number is to be inserted
          here. This page is updated as company particulars change.
        </div>
      </>
    ),
  },
  {
    id: "what-we-do",
    title: "What we do",
    body: (
      <>
        <p>
          Helioran provides <strong>commercial advisory and consultancy</strong>
          {" "}services to businesses, entrepreneurs, investors, and property
          developers. Typical mandates include:
        </p>
        <ul>
          <li>Strategic and growth advisory.</li>
          <li>Corporate finance support, including capital structure and transaction readiness.</li>
          <li>Independent investment analysis and due diligence.</li>
          <li>Mergers and acquisitions support — buy-side and sell-side.</li>
          <li>Property investment consultancy.</li>
          <li>Market research and commercial intelligence.</li>
          <li>Investor relations and capital raising support.</li>
        </ul>
      </>
    ),
  },
  {
    id: "regulatory-status",
    title: "Regulatory status",
    body: (
      <>
        <p>
          Helioran Capital Limited provides advisory services on commercial and
          strategic matters. Our standard engagements do <strong>not</strong>{" "}
          constitute the provision of regulated investment services within the
          meaning of the European Union (Markets in Financial Instruments)
          Regulations 2017 (the &ldquo;MiFID Regulations&rdquo;) or related
          Irish legislation.
        </p>
        <p>
          We do not currently hold authorisation from the Central Bank of
          Ireland under the MiFID Regulations and do not undertake regulated
          activities that would require such authorisation. Where a particular
          mandate would fall within scope of regulated activity, we will refer
          the client to a duly authorised firm or decline the engagement.
        </p>
        <div className="callout">
          <strong>For client verification</strong>
          This disclosure should be reviewed by a regulatory or legal advisor
          familiar with Irish financial services law before public launch. If
          Helioran obtains or intends to apply for Central Bank of Ireland
          authorisation, this page will be updated with the precise nature and
          scope of that authorisation.
        </div>
      </>
    ),
  },
  {
    id: "no-recommendation",
    title: "No offer, no recommendation",
    body: (
      <>
        <p>
          Nothing on this website — including the Market Intelligence section,
          insights articles, case studies, or commentary — constitutes:
        </p>
        <ul>
          <li>An offer to buy or sell any financial instrument or asset.</li>
          <li>A solicitation of any offer to buy or sell.</li>
          <li>A personal recommendation or investment advice within the meaning of the MiFID Regulations.</li>
          <li>Legal, tax, or accounting advice.</li>
        </ul>
        <p>
          Market data, performance figures, and benchmark information published
          on this site are illustrative, may be drawn from publicly available
          sources, and may not reflect current market conditions. Past
          performance is not a reliable indicator of future results.
        </p>
      </>
    ),
  },
  {
    id: "risk-warning",
    title: "Risk warning",
    body: (
      <>
        <p>
          Investing — whether in listed securities, private companies, real
          assets, or other instruments — involves risk. Capital is at risk and
          you may receive back less than you invested.
        </p>
        <p>
          You should consider seeking independent financial, legal, and tax
          advice before making any investment decision. Where a transaction is
          described or referenced on this site, any decision to participate
          must be based on the offering documents and your own independent
          assessment.
        </p>
      </>
    ),
  },
  {
    id: "anti-money-laundering",
    title: "Anti-money laundering and client due diligence",
    body: (
      <>
        <p>
          Before commencing certain engagements, we may be required to carry
          out client due diligence in line with the Criminal Justice (Money
          Laundering and Terrorist Financing) Acts 2010–2021 and related
          guidance. Clients are expected to cooperate with reasonable requests
          for identification and beneficial ownership information.
        </p>
      </>
    ),
  },
  {
    id: "complaints",
    title: "Complaints",
    body: (
      <>
        <p>
          We take complaints seriously. If you are dissatisfied with any aspect
          of our service, please write to us at{" "}
          <a href="mailto:niamh@heliorancapital.com">
            niamh@heliorancapital.com
          </a>{" "}
          with the subject line &ldquo;Complaint&rdquo;. We will acknowledge
          receipt within five business days and aim to provide a substantive
          response within 20 business days.
        </p>
      </>
    ),
  },
  {
    id: "third-party-content",
    title: "Third-party content and links",
    body: (
      <p>
        This site may reference third-party services, data sources, or
        websites. Helioran does not control the content of third-party
        resources and is not responsible for their accuracy, completeness, or
        availability.
      </p>
    ),
  },
];

export default function RegulatoryPage() {
  return (
    <LegalLayout
      eyebrow="Regulatory"
      title="Status, scope, and important disclosures."
      lede="This page sets out who Helioran Capital Limited is, what services we provide, and the disclosures that apply to our website and our work. It is intended as a clear-language summary and is not a substitute for our engagement letter."
      updated="2026-06-22"
      sections={sections}
    />
  );
}
