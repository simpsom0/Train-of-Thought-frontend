/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {},
    minWidth: {
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem'
    },
    colors: {
      'c-white': {
        DEFAULT: '#eaf2ef',
        50: '#eaf2ef',
        light: '#eaf2ef',
        100: '#dcebe6',
        200: '#b9d6cc',
        300: '#8ebaad',
        400: '#679a8d',
        500: '#4d7f73',
        600: '#3c655c',
        700: '#33524c',
        800: '#2c433f',
        900: '#273a35',
        dark: '#273a35',
        950: '#13201e'
      },
      'c-red': {
        DEFAULT: '#af1b3f',
        50: '#fef2f3',
        100: '#fde6e7',
        200: '#fbd0d5',
        300: '#f8a9b3',
        400: '#f3798b',
        500: '#ea4965',
        600: '#d6284e',
        700: '#af1b3f',
        800: '#971a3d',
        900: '#811a3a',
        950: '#48091b'
      },
      'c-purple': {
        DEFAULT: '#473144',
        50: '#f9f6f9',
        100: '#f4eff4',
        200: '#e9e0ea',
        300: '#d9c8d9',
        400: '#c1a5c1',
        500: '#ac88ab',
        600: '#956d92',
        700: '#7d5979',
        800: '#694b65',
        900: '#594256',
        950: '#473144'
      },
      'c-orange': {
        DEFAULT: '#ff8360',
        50: '#fff4f1',
        100: '#ffe8e1',
        200: '#ffd3c7',
        300: '#ffb5a0',
        400: '#ff8360',
        500: '#f8653b',
        600: '#e5491d',
        700: '#c13a14',
        800: '#a03314',
        900: '#843018',
        950: '#481507'
      },
      'c-green': {
        DEFAULT: '#5c7457',
        50: '#f4f6f3',
        100: '#e5e9e2',
        200: '#cad3c7',
        300: '#a5b5a0',
        400: '#7c9176',
        500: '#5c7457',
        600: '#455a41',
        700: '#374834',
        800: '#2d3a2b',
        900: '#253024',
        950: '#141b13'
      }
    }
  },
  plugins: [],
  darkMode: 'media'
};
