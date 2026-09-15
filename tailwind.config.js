/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        night: {
          950: "#060910",
          900: "#0a0f1c",
          800: "#0f1626",
          700: "#161f33",
          600: "#1e2942",
        },
        gold: {
          300: "#f0d98a",
          400: "#e6c766",
          500: "#d4af37",
          600: "#b8942a",
        },
        jade: {
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "var(--font-bengali)", "system-ui", "sans-serif"],
        bengali: ["var(--font-bengali)", "sans-serif"],
        display: ["var(--font-fraunces)", "var(--font-bengali)", "serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #f0d98a 0%, #d4af37 50%, #b8942a 100%)",
        "mesh": "radial-gradient(at 20% 20%, rgba(212,175,55,0.12) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(16,185,129,0.10) 0px, transparent 50%), radial-gradient(at 60% 90%, rgba(212,175,55,0.08) 0px, transparent 50%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "float": {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s ease forwards",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
};
