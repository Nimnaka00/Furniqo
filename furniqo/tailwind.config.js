/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      },
      colors: {
        primary: '#F97316', // Adjust this if needed to match Home.png
        dark: '#1f2937',
      }
    },
  },
  plugins: [],
}
