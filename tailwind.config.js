// tailwind.config.js
module.exports = {
  content: [
    // broad globs so Tailwind won't accidentally purge needed classes
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
    "./**/*.{js,ts,jsx,tsx,html}"
  ],
  safelist: [
    // explicit classes or regex patterns used dynamically in code
    'grid-cols-1',
    'grid-cols-2',
    'grid-cols-3',
    // regex example for dynamic colors: bg-red-500, bg-blue-200, text-green-600 ...
    { pattern: /^(bg|text|border)-(red|green|blue|yellow|gray|indigo)-(100|200|300|400|500|600|700|800|900)$/ }
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
