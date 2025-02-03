// tailwind.config.js
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.css",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "primary-text": "#141416",
        "page-bg": "#F9FBFF",
        "scrollbar-track": "#CDD4E5",
        "scrollbar-thumb": "#CDD4E5",
        "scrollbar-hover": "#3E88F7",
        // Green theme
        "accent-green": "#00C2A6",
        "light-green-bg": "#E5F9F6",
        // Purple theme
        "accent-purple": "#6707FD",
        "light-purple-bg": "#F0E6FF",
        // Additional Colors
        "badge-blue": "#3E8CFF",
        "badge-month-bg": "rgba(62,140,255,0.25)",
        "badge-day-bg": "rgba(62,140,255,0.1)",
        "muted-gray": "#777E90",
        "vivid-blue": "#4323FF",
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
    require("tailwind-scrollbar"),
    plugin(function ({ addComponents }) {
      addComponents({
        ".custom-scrollbar": {
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundImage: `
              url('data:image/svg+xml,<svg width="4" height="10" viewBox="0 0 4 10" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" width="10" height="4" rx="2" transform="rotate(90 4 0)" fill="%23F9FBFF"/></svg>'),
              url('data:image/svg+xml,<svg width="4" height="10" viewBox="0 0 4 10" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" width="10" height="4" rx="2" transform="rotate(90 4 0)" fill="%23F9FBFF"/></svg>'),
              url('data:image/svg+xml,<svg width="4" height="10" viewBox="0 0 4 10" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" width="10" height="4" rx="2" transform="rotate(90 4 0)" fill="%23F9FBFF"/></svg>')
            `,
            backgroundSize: "4px 10px",
            backgroundRepeat: "no-repeat",
            backgroundPosition:
              "calc(50% - 20px) center, center center, calc(50% + 20px) center",
            borderRadius: "4px",
            transition:
              "background-position 0.3s ease-in-out, border-radius 0.3s ease-in-out, background-color 0.3s ease-in-out",
            "&:hover": {
              backgroundPosition:
                "calc(50% - 30px) center, center center, calc(50% + 30px) center",
              borderRadius: "25px",
              backgroundColor: "#3E88F7",
            },
          },
        },
      });
    }),
  ],
} satisfies Config;
