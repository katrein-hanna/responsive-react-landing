/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#010851",
        "secondary": "#9A7Af1",
        "tartiary": "#707070",
        "pink": "#EE9AE5",
      },
      boxShadow: {
        '3xl' : '0px 10px 50px 0px rgba(0,0,0,0.15)',
      }
    },
  },
  plugins: [],
}

