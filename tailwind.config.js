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
    }
  },
  plugins: [],
  darkMode: 'media'
}
