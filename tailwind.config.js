/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'], // Add Roboto font family
      },
      colors: {
        black: "#1e2812",
        primary: "#1e28320d",
        pat: "#f5f5f5",
      },
    },
  },
  plugins: [],
}
