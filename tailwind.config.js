// @type {import('tailwindcss').Config} 
module.exports = {
  content: ["./src/*.html"],
  theme: {
    fontFamily: {
      'body': ['Montserrat'],
    },
    fontSize: {
      sm: ['16px', '24px'],
      base: ['16px', '24px'],
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'grey-s': '#E6E6F0',
      'main-reg': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
    },
    extend: {},
  },
  plugins: [],
}

