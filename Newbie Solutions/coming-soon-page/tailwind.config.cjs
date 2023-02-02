/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary
        Blue: "hsl(223, 87%, 63%)",
        // Secondary
        paleBlue: "hsl(223, 100%, 88%)",
        lightRed: "hsl(354, 100%, 66%)",
        // Neutral
        gray: "hsl(0, 0%, 59%)",
        veryDarkBlue: "hsl(209, 33%, 12%)",
      },
      fontFamily: {
        libreFranklin: ["Libre Franklin", "sans-serif"],
      },
    },
  },
  plugins: [],
};
