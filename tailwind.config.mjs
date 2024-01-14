/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: { prussian: "#1D63FF" },
    },
    fontFamily: {
      helvetica: ["Helvetica", "Arial", "sans-serif"],
      libre: ["Libre Baskerville", "Garamond"],
      fjalla: ["Fjalla One"],
    },
  },
  plugins: [],
};
