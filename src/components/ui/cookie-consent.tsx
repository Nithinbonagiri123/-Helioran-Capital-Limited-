"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

const STORAGE_KEY = "helioran-cookie-consent-v1";
const ease = [0.22, 1, 0.36, 1] as const;

type Choice = "accepted" | "declined";

export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let raised = false;
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      raised = Boolean(raw);
    } catch {
      // localStorage unavailable (private mode etc) — show the banner
      raised = false;
    }
    if (!raised) {
      const t = setTimeout(() => setShow(true), 900);
      return () => clearTimeout(t);
    }
  }, []);

  function dismiss(choice: Choice) {
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ choice, ts: Date.now() })
      );
    } catch {
      // best-effort
    }
    setShow(false);
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          role="dialog"
          aria-live="polite"
          aria-label="Cookie preferences"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 32 }}
          transition={{ duration: 0.5, ease }}
          className="fixed inset-x-4 bottom-4 z-[60] sm:inset-x-auto sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-md"
        >
          <div className="glass-strong relative overflow-hidden rounded-lg p-5 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] sm:p-6">
            <button
              type="button"
              aria-label="Dismiss"
              onClick={() => dismiss("declined")}
              className="absolute right-3 top-3 grid h-7 w-7 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-white/55 transition-colors hover:bg-white/10 hover:text-white"
            >
              <X className="h-3.5 w-3.5" />
            </button>

            <div className="flex items-start gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.03]">
                <Cookie className="h-4 w-4 text-white/80" />
              </span>
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-white/45">
                  Cookies
                </p>
                <p className="mt-2 text-[13.5px] leading-relaxed text-white/75">
                  We use only the cookies needed to make this site work. We do
                  not run advertising or third-party tracking. Read our{" "}
                  <Link
                    href="/privacy"
                    className="text-white underline decoration-white/30 underline-offset-2 hover:decoration-white"
                  >
                    privacy policy
                  </Link>
                  .
                </p>
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:gap-3">
              <button
                type="button"
                onClick={() => dismiss("accepted")}
                className="h-10 flex-1 rounded-full bg-white px-5 text-[13px] font-medium tracking-tight text-ink-950 transition-opacity hover:opacity-90"
              >
                Accept
              </button>
              <button
                type="button"
                onClick={() => dismiss("declined")}
                className="h-10 flex-1 rounded-full border border-white/15 bg-white/[0.02] px-5 text-[13px] tracking-tight text-white transition-colors hover:bg-white/[0.06] hover:border-white/25"
              >
                Decline
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
