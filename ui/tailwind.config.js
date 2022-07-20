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
      spacing: {
        128: "32rem",
        144: "36rem",
        192: "48rem",
      },
      maxWidth: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
