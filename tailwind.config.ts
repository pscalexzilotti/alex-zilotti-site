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
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        ring: "hsl(var(--ring))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        luxury: {
          deep: "#0b0c0d",
          graphite: "#1c1f21",
          ivory: "#f4f2ee",
          offwhite: "#efece6",
          taupe: "#b9b2a7",
          bronze: "#8c7a5b",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      borderRadius: {
        sm: "0.375rem",
        DEFAULT: "0.5rem",
        lg: "0.875rem",
        xl: "1.25rem",
      },
      boxShadow: {
        soft: "0 18px 50px rgba(0,0,0,0.22)",
        luxe: "0 24px 80px rgba(0,0,0,0.34)",
      },
      maxWidth: {
        prosewide: "72ch",
      },
      letterSpacing: {
        editorial: "0.18em",
      },
    },
  },
  plugins: [],
};

export default config;
