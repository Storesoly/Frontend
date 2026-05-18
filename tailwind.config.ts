import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "yellow-cta": "#F5C518",
        "hero-bg": "#0A0A0A",
        "dark-card": "#161616",
        "pricing-bg": "#EDE8DF",
        "badge-border": "rgba(255,255,255,0.12)",
        "grid-line": "rgba(255,255,255,0.055)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(255,255,255,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.055) 1px, transparent 1px)",
        "diamond-grid":
          "repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0, rgba(255,255,255,0.04) 1px, transparent 0, transparent 50%), repeating-linear-gradient(-45deg, rgba(255,255,255,0.04) 0, rgba(255,255,255,0.04) 1px, transparent 0, transparent 50%)",
      },
      backgroundSize: {
        "grid-size": "64px 64px",
        "diamond-size": "56px 56px",
      },
      boxShadow: {
        "card-light": "0 1px 3px rgba(0,0,0,0.06), 0 4px 24px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04)",
        "card-dark": "0 8px 40px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.3)",
        "card-hover": "0 4px 32px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.06)",
        "btn-yellow": "0 0 0 1px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.2)",
      },
      letterSpacing: {
        tighter2: "-0.04em",
        tight2: "-0.03em",
        wide2: "0.12em",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        marquee: "marquee 28s linear infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;