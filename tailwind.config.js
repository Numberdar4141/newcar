/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        xxl: "1400px",
        xxxl: "1600px",
      },
      colors: {
        p1: "#f26222", //primary color
        s1: "#231E20", //secondary color
        s2:"#f26222",
        s3:"#f26222",
        s4:"#f26222",
        softBg:"#F7F7F7",
        softBg1:"#EAFAF8",
        bodyText:"#3B4A46",
        mainTextColor:"#FFFFFF",
        strokeColor:"#E4E4E4",

      },
      padding: {
        "30": "120px",
        "15": "60px",
      },
    },
  },
  plugins: [],
}