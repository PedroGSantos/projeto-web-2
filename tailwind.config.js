/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{html,js}',
  ],
  theme: {
    screens:{
      sm: '640px',
      md: '870px',
      lg: '1024px',
      xl: '1280px'
    },
    extend: {
      colors: {
        primaryRed: '#FF0707',
        white: '#FFF'
      }
    },
  },
  plugins: [],
}
