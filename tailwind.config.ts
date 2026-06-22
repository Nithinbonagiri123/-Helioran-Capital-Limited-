import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
      },
      screens: {
        "2xl": "1320px",
      },
    },
    extend: {
      colors: {
        ink: {
          950: "#05070d",
          900: "#080b14",
          800: "#0c111c",
          700: "#111827",
        },
        brand: {
          50: "#eaf2ff",
          100: "#cfe0ff",
          200: "#9ec0ff",
          300: "#6a9cff",
          400: "#3f7bff",
          500: "#1f5cff",
          600: "#1546d6",
          700: "#0f37a8",
          800: "#0b2a82",
          900: "#081e5e",
        },
        gold: {
          300: "#e8d4a2",
          400: "#d5b876",
          500: "#bf9a4c",
        },
        border: "rgba(255,255,255,0.08)",
        muted: {
          DEFAULT: "rgba(255,255,255,0.6)",
          foreground: "rgba(255,255,255,0.7)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        display: ["var(--font-instrument)", "Georgia", "serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      letterSpacing: {
        "tightest": "-0.04em",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(180deg, transparent, rgba(5,7,13,1) 80%), linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(ellipse at top, rgba(31,92,255,0.25), transparent 60%)",
        "noise":
          "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 .12 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
      },
      animation: {
        "ticker": "ticker 40s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      boxShadow: {
        "glow": "0 0 0 1px rgba(255,255,255,0.04), 0 30px 80px -20px rgba(31,92,255,0.35)",
        "inner-glow": "inset 0 1px 0 0 rgba(255,255,255,0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
