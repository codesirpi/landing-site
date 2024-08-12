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
        grey: {
          600: "#252525",
          500: "#303030",
          400: "#5C5C5C",
          300: "#707070",
          200: "#B3B3B3",
          100: "#454545",
          50: "#9E9E9E"
        },
        blue: {
          500: "#06c",
        },

      },
      fontFamily: {
        leckerli: ["Leckerli One", "cursive"],
        cambay: ["Cambay", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
