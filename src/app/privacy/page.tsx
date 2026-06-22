import type { Metadata } from "next";
import { LegalLayout, type LegalSection } from "@/components/sections/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Helioran Capital Limited collects, uses, and protects personal data — written in line with the EU General Data Protection Regulation (GDPR).",
};

const sections: LegalSection[] = [
  {
    id: "controller",
    title: "Who we are",
    body: (
      <>
        <p>
          Helioran Capital Limited (&ldquo;<strong>Helioran</strong>,&rdquo;
          &ldquo;<strong>we</strong>,&rdquo; &ldquo;<strong>our</strong>&rdquo;
          or &ldquo;<strong>us</strong>&rdquo;) is the data controller for any
          personal information processed in connection with this website and
          our advisory services.
        </p>
        <p>
          Registered office: Ducart Suite, Commercial Campus, Castletroy,
          Limerick V94 Y6FD, Ireland. You can reach our data contact at{" "}
          <a href="mailto:niamh@heliorancapital.com">
            niamh@heliorancapital.com
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "what-we-collect",
    title: "What we collect",
    body: (
      <>
        <p>
          We collect the minimum information needed to respond to enquiries and
          provide advisory services. This may include:
        </p>
        <ul>
          <li>
            Your <strong>name</strong>, <strong>email address</strong>, and
            (optionally) the <strong>organisation</strong> you represent, when
            you complete the contact form.
          </li>
          <li>
            The <strong>contents of your message</strong>, including any
            commercial information you choose to share.
          </li>
          <li>
            Basic <strong>technical data</strong> such as IP address, device
            type, and browser, recorded by our hosting provider for security
            and abuse prevention.
          </li>
          <li>
            Information you share with us in the course of an engagement —
            collected and used strictly under the terms of the engagement
            letter.
          </li>
        </ul>
        <p>
          We do <strong>not</strong> sell personal data, and we do not use it
          for advertising or profiling.
        </p>
      </>
    ),
  },
  {
    id: "why-we-use-it",
    title: "Why we use it",
    body: (
      <>
        <p>We process personal data for the following purposes:</p>
        <ol>
          <li>
            <strong>To respond to enquiries</strong> made via the website or
            email — legal basis: your consent and our legitimate interest in
            engaging with prospective clients.
          </li>
          <li>
            <strong>To deliver advisory services</strong> under a signed
            engagement — legal basis: performance of a contract.
          </li>
          <li>
            <strong>To comply with legal obligations</strong>, including
            anti-money-laundering, tax, and professional record-keeping
            requirements — legal basis: legal obligation.
          </li>
          <li>
            <strong>To protect our website and systems</strong> against abuse
            — legal basis: legitimate interest.
          </li>
        </ol>
      </>
    ),
  },
  {
    id: "sharing",
    title: "Who we share it with",
    body: (
      <>
        <p>
          We do not share personal data except where strictly necessary to
          deliver our service or comply with the law. Recipients may include:
        </p>
        <ul>
          <li>
            Our infrastructure providers (e.g. Vercel for website hosting),
            who process data on our instructions under written terms.
          </li>
          <li>
            Professional advisors (legal, accounting, audit) bound by
            confidentiality.
          </li>
          <li>
            Regulators, courts, or law enforcement, where a valid legal
            request requires disclosure.
          </li>
        </ul>
        <p>
          If any processor is located outside the European Economic Area, we
          rely on appropriate safeguards such as the European
          Commission&apos;s Standard Contractual Clauses.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    title: "How long we keep it",
    body: (
      <>
        <p>
          We retain personal data only for as long as is necessary for the
          purpose for which it was collected, or as required by law:
        </p>
        <ul>
          <li>
            <strong>Enquiry messages</strong> — up to 24 months from the most
            recent contact, unless an engagement begins.
          </li>
          <li>
            <strong>Client engagement records</strong> — for the duration of
            the engagement and a further 6 years thereafter, in line with Irish
            commercial and tax record-keeping standards.
          </li>
          <li>
            <strong>Technical logs</strong> — up to 90 days, then deleted or
            anonymised.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "rights",
    title: "Your rights under GDPR",
    body: (
      <>
        <p>
          If you are in the EU/EEA, you have the right to:
        </p>
        <ul>
          <li>
            <strong>Access</strong> the personal data we hold about you.
          </li>
          <li>
            <strong>Rectify</strong> inaccurate or incomplete data.
          </li>
          <li>
            <strong>Erase</strong> your data, subject to legal retention
            requirements.
          </li>
          <li>
            <strong>Restrict</strong> processing in certain circumstances.
          </li>
          <li>
            <strong>Receive</strong> your data in a portable format.
          </li>
          <li>
            <strong>Object</strong> to processing carried out under our
            legitimate interests.
          </li>
          <li>
            <strong>Withdraw consent</strong> at any time, where consent is the
            legal basis for processing.
          </li>
        </ul>
        <p>
          To exercise any of these rights, email{" "}
          <a href="mailto:niamh@heliorancapital.com">
            niamh@heliorancapital.com
          </a>
          . We respond within one calendar month.
        </p>
        <p>
          You may also lodge a complaint with the Irish Data Protection
          Commission at{" "}
          <a href="https://www.dataprotection.ie" target="_blank" rel="noopener">
            dataprotection.ie
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies and tracking",
    body: (
      <>
        <p>
          Our website uses only the cookies and similar technologies that are
          strictly necessary to make it work. We do not currently use
          third-party analytics or advertising trackers.
        </p>
        <p>
          If we add analytics in future, we will update this policy and ask for
          your consent through our cookie banner before any non-essential
          tracking is enabled.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "Security",
    body: (
      <>
        <p>
          We protect personal data with technical and organisational measures
          appropriate to the risk, including encrypted transport (TLS), access
          controls, and confidentiality obligations on all personnel.
        </p>
        <p>
          No system is perfectly secure. If you believe your data has been
          compromised, please contact us immediately at{" "}
          <a href="mailto:niamh@heliorancapital.com">
            niamh@heliorancapital.com
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: (
      <p>
        We may update this policy from time to time. The &ldquo;Last
        updated&rdquo; date at the top of the page reflects the most recent
        revision. Material changes will be communicated by an appropriate
        means.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalLayout
      eyebrow="Privacy"
      title="Your data, treated with care."
      lede="This policy explains how Helioran Capital Limited collects, uses, stores, and protects personal data — in line with the EU General Data Protection Regulation (GDPR) and Irish data protection law."
      updated="2026-06-22"
      sections={sections}
    />
  );
}
