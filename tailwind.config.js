/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/index.html"],
  theme: {
    screens:{
      sm: '640px',
      md: '768px',
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
