import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

const linkGroups = [
  {
    title: "Practice",
    links: [
      { href: "/services#strategic-advisory", label: "Strategic Advisory" },
      { href: "/services#corporate-finance", label: "Corporate Finance" },
      { href: "/services#ma", label: "M&A Support" },
      { href: "/services#venture-capital", label: "Venture Advisory" },
      { href: "/services#property", label: "Property Investment" },
    ],
  },
  {
    title: "Firm",
    links: [
      { href: "/about", label: "About" },
      { href: "/insights", label: "Market Intelligence" },
      { href: "/case-studies", label: "Case Studies" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "#", label: "Privacy Policy" },
      { href: "#", label: "Terms of Engagement" },
      { href: "#", label: "Regulatory Disclosure" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] pt-16 pb-10 sm:pt-20">
      <div className="container">
        <div className="grid grid-cols-12 gap-y-10 sm:gap-y-12">
          <div className="col-span-12 lg:col-span-5">
            <Image
              src="/logo.png"
              alt="Helioran Capital"
              width={384}
              height={324}
              className="h-14 w-auto sm:h-16"
            />
            <p className="mt-5 max-w-md text-[13px] leading-relaxed text-white/55 sm:text-[14px]">
              An Irish investment advisory firm partnering with businesses,
              investors, and developers on the decisions that shape capital.
            </p>

            <ul className="mt-6 space-y-3 text-[13px] text-white/65 sm:mt-8">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />
                <span>
                  Ducart Suite, Commercial Campus, Castletroy, Limerick V94 Y6FD, Ireland
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-white/40" />
                <a
                  href="mailto:niamh@heliorancapital.com"
                  className="hover:text-white"
                >
                  niamh@heliorancapital.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-white/40" />
                <a href="tel:+353838878910" className="hover:text-white">
                  +353 83 887 8910
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:col-span-7">
            {linkGroups.map((group) => (
              <div key={group.title}>
                <div className="text-[11px] uppercase tracking-[0.22em] text-white/40">
                  {group.title}
                </div>
                <ul className="mt-5 space-y-3">
                  {group.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="group inline-flex items-center gap-1.5 text-[14px] tracking-tight text-white/75 transition-colors hover:text-white"
                      >
                        {l.label}
                        <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="divider my-10 sm:my-12" />

        <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row sm:items-center sm:gap-6">
          <p className="text-[11px] tracking-tight text-white/40 sm:text-[12px]">
            © {new Date().getFullYear()} Helioran Capital Limited. Registered
            in Ireland. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
