import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(210 30% 98%)",
        foreground: "hsl(214 32% 14%)",
        primary: {
          DEFAULT: "hsl(214 43% 20%)",
          foreground: "hsl(210 40% 98%)"
        },
        accent: {
          DEFAULT: "hsl(32 32% 58%)",
          foreground: "hsl(214 32% 14%)"
        },
        muted: {
          DEFAULT: "hsl(210 20% 93%)",
          foreground: "hsl(214 16% 35%)"
        },
        card: "hsl(0 0% 100%)",
        border: "hsl(210 16% 84%)"
      },
      boxShadow: {
        soft: "0 10px 30px -18px rgba(19, 35, 58, 0.32)"
      },
      borderRadius: {
        xl: "1rem"
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        "fade-up": "fade-up 0.55s ease-out both"
      }
    }
  },
  plugins: []
};

export default config;
