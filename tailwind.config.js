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
      },
      spacing: {
        'c': '25dvh',
        'c-2': 'calc(75dvh - 2.5rem)',
        'c-3': 'calc(50dvh - 2.5rem)',
        'c-4': 'calc(50dvh - 5rem)',
        'c-5': 'calc(100dvw - 17.5rem)'
      }
    },
  },
  plugins: [],
}

