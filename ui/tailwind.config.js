/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: (theme) => ({
        primary: theme.colors.blue["500"],
        primaryDark: theme.colors.blue["600"],
      }),
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
