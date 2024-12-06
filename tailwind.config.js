/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
const withMT = require("@material-tailwind/react/utils/withMT");
// eslint-disable-next-line no-undef
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        changa: ["ChangaOne", "sans-serif"],
        oxanium: ["Oxanium", "sans-serif"],
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("daisyui"),
  ],
});
