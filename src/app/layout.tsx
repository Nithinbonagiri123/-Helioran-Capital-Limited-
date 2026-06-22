import type { Metadata, Viewport } from "next";
import { Fraunces } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/sections/Footer";

// Display serif used only for italic accents (e.g. "with conviction").
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["italic", "normal"],
  variable: "--font-fraunces",
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#05070d",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={fraunces.variable}>
      <head>
        {/* Satoshi — primary UI / body sans, via Fontshare CDN */}
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700,900&display=swap"
        />
      </head>
      <body className="min-h-screen font-sans text-white antialiased">
        <Navigation />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
