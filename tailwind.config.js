/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customPurple: '#4D4397',
        customWhite: '#F5F5F7',
        customBlue: '#161d3a',
        customPurpleBlue: '#453C8852'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        '-4': '-0.04em',
      },
    },
  },
  plugins: [],
}

