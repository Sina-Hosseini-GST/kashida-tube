/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '*.{html,js}',
    '*/*.{html,js}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'c': ['roboto-medium', 'sans-serif']
      }
    },
  },
  plugins: [],
}

