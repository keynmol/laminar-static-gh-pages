/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./target/scala-3.2.2/**/*.{js,ts,jsx,tsx}",
    "./main.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
