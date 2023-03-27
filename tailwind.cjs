/** @type {import('tailwindcss').Config} */
const { join } = require("node:path");
module.exports = {
  content: [join(__dirname, "*/.{js,jsx,ts,tsx}")],
  theme: {
    extend: {
      colors: {
        primary: "#96C09F",
        secondary: "#F4F4F4",
        tertiary: "#FFFFFF",
        white: "#FFFFFF",
        black: "#212121",
        grey1: "#F4F4F4",
        grey2: "#8E8E95",
        grey3: "#3C3F42",
      },
    },
  },
  plugins: [],
};
