/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      orange: "#FE8C00",
      white: "#FFFFFF",
      black: "#101010",
      darkgray: "#C2C2C2",
      lightgray: "#878787"
    },
    fontFamily: {
      inter: ["Inter", 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'image1': "url('/image1.png')",
        'image2': "url('/image2.png')",
        'image3': "url('/image3.png')",
      },
    },
  },
  plugins: [],
}

