const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      red: colors.red,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      wyadarkblue: {
        '100': '#030307',
        '200': '#06060e',
        '300': '#0c0c1c',
        '400': '#12122a',
        '500': '#181837',
        '600': '#525269',
        '700': '#8c8c9b',
        '800': '#c6c6cd',
        '900': '#e3e3e6',
      },
      wyablue: {
        "100": "#0b0b19",
        "200": "#0c0c1c",
        "300": "#181837",
        "400": "#242452",
        "500": "#2f2f6d",
        "600": "#636392",
        "700": "#9797b6",
        "800": "#cbcbdb",
        "900": "#d0d0de",
      },
      wyagreen: {
        '100': '#ccfcf7',
        '200': '#99f9f0',
        '300': '#66f6e8',
        '400': '#33f3e1',
        '500': '#00ffb1',
        '600': '#00c0ae',
        '700': '#009082',
        '800': '#006057',
        '900': '#00302b',
      },
      wyapink: {
        '100': '#3a0029',
        '200': '#40002d',
        '300': '#800059',
        '400': "#c00085",
        '500': '#FF00B1',
        '600': '#ff40c5',
        '700': '#ff80d8',
        '800': '#ffc0ec',
        '900': '#ffc6ee',
      },
      wyasilver: {
        '100': '#aba8b4',
        '200': '#bdbac4',
        '300': '#cfccd3',
        '400': '#eae7eb',
        '500': '#f2f0f2',
        '600': '#f6f4f6',
        '700': '#f9f7f9',
        '800': '#fcfcfc'
      }
    },
    fontFamily: {
      'sans': ['Montserrat', ...defaultTheme.fontFamily.sans],
      'alt': ['Roboto', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      spacing: {
        '84': '21rem',
        '144': '48rem',
      }
    },
  },
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
