/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sub_header: ["Dancing Script", "cursive"],
      header: ["Oxygen", "sans-serif"],
      paragraph: ["Merriweather", "serif"],
    },
  },
  plugins: [],
};
