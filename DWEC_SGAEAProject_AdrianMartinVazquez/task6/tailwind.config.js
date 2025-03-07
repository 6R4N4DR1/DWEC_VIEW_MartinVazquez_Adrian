/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./fuente/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'rojo': {
          claro: '#ffcccc',
          normal: '#ff6666',
          oscuro: '#cc0000'
        }
      },
      spacing:{
        '27xl': '120rem'
      },
      screen:{
        '5xl': '2000px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('flowbite/plugin'),
  ],
}

