import type { Config } from "tailwindcss";

const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#ff4b5c",
        "secondary": "#ffb6c1",
        "accent": "#ff8c94",
        "success": "#4caf50",
        "fail": "#f44336",
        "white": "#ffffff", 
        "off-white": "#f9f9f9",
        "black-text": "#333333" 
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        'xss': '0.7rem',
      },
      width: {
        '70': '17.5rem',
        '82': '23rem', 
      },
      height: {
        '100': '28rem',
      },
      screens: {
        'smd': '360px',
      },
    },
  },
  plugins: [],
});
export default config;
