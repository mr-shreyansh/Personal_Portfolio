/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      signature: ["Great Vibes"],
    },
    dropShadow:{
      '3xl': '0 15px 15px rgba(40, 40, 40, 0.8)',
    }
  },
  plugins: [],
}