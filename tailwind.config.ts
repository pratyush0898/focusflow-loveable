
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: "#8B5CF6",
          foreground: "#fff"
        },
        accent: "#33C3F0",
        sky: "#F2FCE2",
        peach: "#FDE1D3",
        neutral: "#8E9196",
      },
      backgroundImage: {
        "cta-gradient": "linear-gradient(90deg, #8B5CF6 0%, #33C3F0 100%)"
      },
      animation: {
        "fade-in": "fade-in 0.4s ease",
        "fade-up": "fade-in-up 0.5s cubic-bezier(.21,.8,.67,1.07)"
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        }
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
