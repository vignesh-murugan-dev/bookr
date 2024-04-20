/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blueGray: {
          '50': '#f8fafc',
          '100': '#2b335a',
          // Add more shades as needed
          '800': '#1c213e',
        },
      },
    },
  },
  plugins: [],
}