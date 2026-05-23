import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        library: {
          black: "#070706",
          charcoal: "#12110f",
          ash: "#242421",
          paper: "#e8ddc4",
          vellum: "#bda977",
          amber: "#c98a3a",
          blue: "#344755",
          green: "#425448",
          wine: "#5d3035"
        }
      },
      fontFamily: {
        display: ["Cormorant Garamond", "Playfair Display", "Georgia", "serif"],
        serif: ["Merriweather", "EB Garamond", "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 32px rgba(201, 138, 58, 0.28)",
        book: "12px 18px 38px rgba(0, 0, 0, 0.45)"
      }
    }
  },
  plugins: []
};

export default config;
