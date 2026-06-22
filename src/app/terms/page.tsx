import type { Metadata } from "next";
import { LegalLayout, type LegalSection } from "@/components/sections/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Engagement",
  description:
    "The principles and conditions that govern engagements with Helioran Capital Limited. The definitive scope of any individual engagement is set in the engagement letter.",
};

const sections: LegalSection[] = [
  {
    id: "scope",
    title: "Scope of services",
    body: (
      <>
        <p>
          Helioran Capital Limited (&ldquo;<strong>Helioran</strong>&rdquo;)
          provides commercial advisory and consultancy services across strategy,
          corporate finance support, investment analysis, property
          consultancy, mergers and acquisitions support, and related areas.
        </p>
        <p>
          The specific scope of any engagement is defined in a separate written{" "}
          <strong>engagement letter</strong> signed by Helioran and the client.
          Where these Terms and an engagement letter conflict, the engagement
          letter prevails.
        </p>
      </>
    ),
  },
  {
    id: "not-regulated-advice",
    title: "What we are — and are not",
    body: (
      <>
        <p>
          Helioran provides <strong>advisory and consultancy</strong> services
          on commercial and strategic matters. Unless an engagement letter
          explicitly states otherwise, we do not provide:
        </p>
        <ul>
          <li>
            <strong>Regulated investment advice</strong> within the meaning of
            the European Union (Markets in Financial Instruments) Regulations
            2017 or related Irish legislation.
          </li>
          <li>
            <strong>Legal advice.</strong> We do not act as solicitors.
          </li>
          <li>
            <strong>Tax advice.</strong> We may comment on commercial structure
            but recommend that clients engage qualified tax advisors.
          </li>
          <li>
            <strong>Audit, attest, or assurance services.</strong>
          </li>
        </ul>
        <div className="callout">
          <strong>Important</strong>
          Nothing on this website constitutes an offer, solicitation, or
          recommendation to buy or sell any financial instrument or to enter
          into any transaction. Information is provided for general guidance
          only and should not be relied upon as the sole basis for any
          investment, financial, or commercial decision.
        </div>
      </>
    ),
  },
  {
    id: "fees",
    title: "Fees and billing",
    body: (
      <>
        <p>
          Fees, expenses, milestones, and payment terms for each engagement are
          set out in the relevant engagement letter. Unless agreed otherwise:
        </p>
        <ul>
          <li>Invoices are issued in euro and are payable within 30 days of issue.</li>
          <li>Late payment may attract interest in line with applicable Irish law.</li>
          <li>Disbursements (e.g. third-party data, regulatory filings, travel) are recharged at cost.</li>
        </ul>
      </>
    ),
  },
  {
    id: "confidentiality",
    title: "Confidentiality",
    body: (
      <>
        <p>
          Helioran treats all non-public client information as confidential. We
          do not disclose client information to third parties except:
        </p>
        <ul>
          <li>With the client&apos;s written consent.</li>
          <li>To members of our team or trusted advisors who need it to deliver the engagement, and who are bound by equivalent confidentiality.</li>
          <li>Where required by law, regulation, or court order.</li>
        </ul>
        <p>
          These obligations survive termination of the engagement.
        </p>
      </>
    ),
  },
  {
    id: "conflicts",
    title: "Conflicts of interest",
    body: (
      <>
        <p>
          We maintain reasonable conflict-checking procedures before accepting
          new engagements. If a conflict becomes apparent during an
          engagement, we will discuss it promptly with the affected clients and
          agree on a path forward — which may include declining or withdrawing
          from one or more mandates.
        </p>
      </>
    ),
  },
  {
    id: "liability",
    title: "Limitation of liability",
    body: (
      <>
        <p>
          To the maximum extent permitted by law, our total aggregate liability
          to any client in connection with an engagement is limited to the
          fees actually paid to Helioran under that engagement in the twelve
          months preceding the event giving rise to the claim.
        </p>
        <p>
          We are not liable for any indirect, consequential, or special losses,
          including loss of profit, loss of opportunity, or loss of business.
        </p>
        <p>
          Nothing in these Terms limits liability for fraud, fraudulent
          misrepresentation, or any liability that cannot lawfully be limited.
        </p>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual property",
    body: (
      <>
        <p>
          Unless otherwise agreed, Helioran retains all intellectual property
          rights in the methodologies, frameworks, models, and proprietary
          materials we use in our work. The client receives a non-exclusive
          licence to use deliverables produced for them for the purpose for
          which they were prepared.
        </p>
      </>
    ),
  },
  {
    id: "termination",
    title: "Termination",
    body: (
      <>
        <p>
          Either party may terminate an engagement on reasonable written
          notice, as set out in the engagement letter. On termination:
        </p>
        <ul>
          <li>Fees and expenses incurred up to the date of termination are payable in full.</li>
          <li>Each party returns or destroys confidential information of the other on request, subject to legal retention requirements.</li>
        </ul>
      </>
    ),
  },
  {
    id: "governing-law",
    title: "Governing law and jurisdiction",
    body: (
      <p>
        These Terms, and any engagement letter, are governed by the laws of
        Ireland. The courts of Ireland have exclusive jurisdiction over any
        dispute, unless the parties agree otherwise in writing.
      </p>
    ),
  },
  {
    id: "contact-terms",
    title: "How to reach us",
    body: (
      <p>
        For questions about these Terms or about an existing engagement,
        contact us at{" "}
        <a href="mailto:niamh@heliorancapital.com">niamh@heliorancapital.com</a>
        {" "}or by post at our registered office.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalLayout
      eyebrow="Terms"
      title="The principles that govern our work."
      lede="These Terms of Engagement set out the general basis on which Helioran Capital Limited provides advisory and consultancy services. The specific scope of any engagement is set in a separate, signed engagement letter."
      updated="2026-06-22"
      sections={sections}
    />
  );
}
