/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      uncounted: "#F6FAFC",
      buttoncolor: "#083471",
      verylight: "#F7FAFD",
      light1: "#E5EFFA",
      light2: "#DDE7EE",
      grayblue: "#939DAE",
      darkgrayblue: "#5E6778",
      darkblue: "#1C202B",
      darkred: "#F65351",
      fontblue: "#0A317B",
      white:'#FFFFFF'
    },
    extend: {
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
