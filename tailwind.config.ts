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
        "primary": "#ff4b5c",
        "secondary": "#ffb6c1",
        "accent": "#ff8c94",
        "success": "#4caf50",
        "fail": "#f44336",
        "white": "#ffffff", 
        "off-white": "#f9f9f9",
        "black-text": "#333333" 
      },
    },
  },
  plugins: [],
};
export default config;
