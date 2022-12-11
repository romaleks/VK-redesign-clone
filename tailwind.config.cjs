/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          400: '#487ebb',
          500: '#5377a3',
          600: '#415e81',
          800: '#2b4a76',
        },
        gray: {
          100: '#f2f3f5',
          200: '#e8eaed',
        },
      },
      maxWidth: {
        '7xl': '1600px',
      },
    },
  },
  plugins: [],
}
