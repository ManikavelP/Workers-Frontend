/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        backGround: "#132D3A",
        cardColor:"rgb(44,243,88)",
        starColor:"#E2A03F"
      }
    },
  },
  plugins: [],
}