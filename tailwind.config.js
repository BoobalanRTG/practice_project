/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        18: '4.1rem', // Define the spacing value equivalent to 18
      },
    },
  },
  plugins: [],
}

