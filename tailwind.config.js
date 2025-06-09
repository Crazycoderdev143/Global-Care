/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // <-- important
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'theme': 'background-color, color, border-color, fill, stroke',
      },
    },
  },
  plugins: [],
}