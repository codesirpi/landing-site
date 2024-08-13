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
        primary: "#0081FF",
        yellow: "#FF0",
        white: "#FFF",
        violet: {
          700: "#5E0BEF",
        },
        grey: {
          700: "#333333",
          650: "#545454",
          600: "#5C5C5C",
          500: "#888888",
          400: "#808080",
          300: "#AAB0BC",
        },
        orange: {
          600: "#FF520E",
        },
      },
      boxShadow: {
        xl: "-2px -4px 10px 0 #FFFFFF",
      },
      fontFamily: {
        leckerli: ["Leckerli One", "cursive"],
        cambay: ["Cambay", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "white-wave": "url(assets/white-wave.svg)",
      },
    },
  },
  plugins: [],
};
export default config;
