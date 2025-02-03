import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.css" 
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], 
      },
      colors: {
        primaryText: "#141416",
        pageBg: '#F9FBFF',
        scrollbarTrack: "#CDD4E5",
        scrollbarThumb: "#CDD4E5",
        scrollbarHover: "#3E88F7"
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
} satisfies Config;
