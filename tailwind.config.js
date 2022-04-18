const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.{html,ts}"],

  darkMode: 'class',
  theme: {
    extend: {},
    colors:{

      dazzle:{
        medium:"#c9d8e7",
        strong:"#3b6e99",
        light:"#e2eaf3",
        small:"#a9c6de"
      },
      sidebar:"#29347a",
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,

    },

    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      '2lg':'1140px',
      'xl': '1280px',
      '2xl': '1400px',
    }
  },
  variants: {
    extend: {
      animation: ['motion-safe'],
      opacity:['disabled']
    },
  },
  plugins: [],
}

