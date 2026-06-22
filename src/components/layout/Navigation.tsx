"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/insights", label: "Insights" },
  { href: "/case-studies", label: "Case Studies" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-white/[0.06] bg-ink-950/60 backdrop-blur-xl supports-[backdrop-filter]:bg-ink-950/40"
            : "bg-transparent"
        )}
      >
        <div className="container flex h-[72px] items-center justify-between">
          <Link href="/" className="group flex items-center gap-3">
            <Logo />
            <div className="flex flex-col leading-none">
              <span className="font-display text-[17px] tracking-tight text-white">
                Helioran Capital
              </span>
              <span className="mt-1 text-[10px] uppercase tracking-[0.22em] text-white/40">
                Investment Advisory · Ireland
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 text-[13px] tracking-tight transition-colors",
                    active ? "text-white" : "text-white/55 hover:text-white"
                  )}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3 -bottom-0.5 h-px bg-white/70"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className="group inline-flex h-10 items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] pl-5 pr-2 text-[13px] tracking-tight text-white transition-all hover:bg-white/[0.06]"
            >
              Engage
              <span className="grid h-7 w-7 place-items-center rounded-full bg-white text-ink-950 transition-transform group-hover:rotate-45">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] md:hidden"
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-ink-950/95 backdrop-blur-xl md:hidden"
          >
            <div className="container flex h-full flex-col justify-between pt-28 pb-12">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.4 }}
                  >
                    <Link
                      href={link.href}
                      className="block border-b border-white/5 py-5 font-display text-3xl tracking-tight text-white"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-ink-950"
              >
                Engage with Helioran
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Logo() {
  return (
    <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-full border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.02]">
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          d="M3 18L9 6L12 12L15 8L21 18"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="10.25" stroke="white" strokeOpacity="0.2" />
      </svg>
    </span>
  );
}
