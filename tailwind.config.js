/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /bg-(red|green|blue|yellow|slate|violet|orange|gray)-500/,
    },
    {
      pattern: /text-(red|green|blue|yellow|slate|violet|orange)-500/,
    },
    {
      pattern: /bg-(red|blue|gray)-600/,
      variants: ["hover"]
    }
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}