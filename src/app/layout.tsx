import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/sections/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://helioran.ie"),
  title: {
    default: "Helioran Capital — Investment Advisory & Corporate Finance | Ireland",
    template: "%s — Helioran Capital",
  },
  description:
    "Helioran Capital is an Irish investment advisory firm delivering strategic counsel across corporate finance, venture capital, M&A, and property investment.",
  keywords: [
    "investment advisory Ireland",
    "corporate finance Dublin",
    "M&A advisory",
    "venture capital advisory",
    "property investment consultancy",
    "Helioran Capital",
  ],
  openGraph: {
    type: "website",
    locale: "en_IE",
    siteName: "Helioran Capital",
    title: "Helioran Capital — Investment Advisory & Corporate Finance",
    description:
      "Strategic counsel for businesses, investors, and property developers across Ireland and Europe.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${instrument.variable}`}>
      <body className="min-h-screen font-sans text-white antialiased">
        <Navigation />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
