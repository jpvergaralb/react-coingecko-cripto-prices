/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "cool-dark": "#0e0e0e",
        "gh-blue": "#0d1117",
        "gh-softer-blue": "#161b22"
      }
    },
  },
  plugins: [],
}