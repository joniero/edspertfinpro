/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tahiti': '#152a46',
        'whitebluebg': '#EFF4FA',
      },
    },
  },
  plugins: [],
}

