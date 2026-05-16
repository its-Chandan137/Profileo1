import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0d0d0d",
        panel: "#161616",
        line: "#2a2a2a",
        gold: "#f5c518",
        muted: "#888888",
        copy: "#e0e0e0"
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"]
      },
      boxShadow: {
        gold: "0 0 36px rgba(245, 197, 24, 0.16)"
      }
    }
  },
  plugins: []
};

export default config;
