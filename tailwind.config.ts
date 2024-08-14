import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "450px",
      },
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
          200: "#F0F0F0",
        },
        orange: {
          600: "#FF520E",
        },
        "background-black": "#101010",
        "input-box": "#303030",
      },
      boxShadow: {
        xl: "-2px -4px 10px 0 #FFFFFF",
        card: "0 5px 35px #dadada",
      },
      fontFamily: {
        leckerli: ["Leckerli One", "cursive"],
        cambay: ["Cambay", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-gradient":
          "linear-gradient(180deg, #0F0F0F, #292929,#474747,#858585)",
        "hero-vector": "url('assets/hero/left-side-wave.svg')",
        "white-wave": "url(assets/white-wave.svg)",
        "blue-wave": "url(assets/wave.svg)",
        "star-button": "url('assets/hero/button-bg.svg')",
        "hero-right-vector": "url('assets/hero/right-blue-vector.svg')",
        "hero-sparkle-star": "url('assets/hero/sparklestars.svg')",
        "hero-top-vector": "url('assets/hero/top-vector.png')",
      },
    },
  },
  plugins: [],
};
export default config;
