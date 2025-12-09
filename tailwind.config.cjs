/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        olive: {
          50: '#f5f7f2',
          100: '#e8ede2',
          200: '#d1dcc5',
          300: '#b9cba8',
          600: '#6b7a53',
          700: '#555f42',
          800: '#3f4431',
        },
        beige: {
          50: '#faf9f7',
          100: '#f5f3f0',
          200: '#ebe7e1',
        },
        maroon: {
          600: '#9c3a55',
          700: '#802e44',
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};