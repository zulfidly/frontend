/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require('tailwindcss/colors')


module.exports = {
  content: ['./index.html'],
  theme: {
    screens: {
      xs: "540px",
      ...defaultTheme.screens,
    },

    extend: {
      fontFamily: { Inter: ["'Inter'", ...defaultTheme.fontFamily.sans] },

      colors: {
        AlmostWhite :  'hsl(0, 0%, 98%)',
        bgGrid      :  'hsl(0, 0%, 96%)',
        MediumGray  :  'hsl(0 0% 41%)',
        AlmostBlack :  'hsl(0 0% 8%)',
      }
    },
  },
  plugins: [],
}
