import type { Metadata } from "next";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Engage Helioran Capital — confidential, considered counsel on strategy, capital, and transactions.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/[0.05] pt-32 pb-12 sm:pt-44 sm:pb-16 lg:pt-52">
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(ellipse_at_top,rgba(15,55,168,0.35),transparent_60%)]"
        />
        <div className="container">
          <p className="eyebrow mb-6 sm:mb-8">Begin a conversation</p>
          <h1 className="font-display text-balance text-[34px] font-medium leading-[1.02] tracking-tightest sm:text-5xl md:text-6xl lg:text-7xl">
            Tell us about the decision in front of you.
          </h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-white/65 sm:mt-8 sm:text-[17px]">
            Every engagement begins with a short, confidential conversation. We
            respond personally within two business days.
          </p>
        </div>
      </section>

      <section className="relative py-16 sm:py-24 lg:py-32">
        <div className="container">
          <div className="grid grid-cols-12 gap-x-10 gap-y-12 lg:gap-y-16">
            <div className="col-span-12 lg:col-span-4">
              <div className="space-y-8 lg:sticky lg:top-32 lg:space-y-10">
                <ContactBlock
                  icon={MapPin}
                  label="Office"
                  body={
                    <>
                      Fitzwilliam Square
                      <br />
                      Dublin 2, D02 XR62
                      <br />
                      Ireland
                    </>
                  }
                />
                <ContactBlock
                  icon={Mail}
                  label="Email"
                  body={
                    <a
                      href="mailto:advisory@helioran.ie"
                      className="hover:text-white"
                    >
                      advisory@helioran.ie
                    </a>
                  }
                />
                <ContactBlock
                  icon={Phone}
                  label="Telephone"
                  body={
                    <a href="tel:+35315000000" className="hover:text-white">
                      +353 (0)1 500 0000
                    </a>
                  }
                />
                <ContactBlock
                  icon={Clock}
                  label="Response time"
                  body="Within two business days, personally."
                />
              </div>
            </div>

            <div className="col-span-12 lg:col-span-8">
              <div className="glass rounded-lg p-5 sm:p-8 lg:p-10">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactBlock({
  icon: Icon,
  label,
  body,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  body: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.02]">
          <Icon className="h-4 w-4 text-white/70" />
        </span>
        <span className="text-[11px] uppercase tracking-[0.22em] text-white/40">
          {label}
        </span>
      </div>
      <div className="mt-4 text-[15px] leading-relaxed text-white/75">
        {body}
      </div>
    </div>
  );
}
