/** @type {import('tailwindcss').Config} */
const relativeHeights = {
  '1/12': '8.333333%',
  '2/12': '16.666667%',
  '3/12': '25%',
  '4/12': '33.333333%',
  '5/12': '41.666667%',
  '6/12': '50%',
  '7/12': '58.333333%',
  '8/12': '66.666667%',
  '9/12': '75%',
  '10/12': '83.333333%',
  '11/12': '91.666667%',
  '12/12': '100%',
}

module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        t_blue: {
          light: '#025078',
          DEFAULT: '#003049',
          dark: '#002639'
        },
        t_tred: {
          light: '#FC3333',
          DEFAULT: '#D62828',
          dark: '#B52323'
        },
        t_orange: {
          light: '#FF9728',
          DEFAULT: '#F77F00',
          dark: '#D76F02'
        },
        t_yellow: {
          light: '#FFD585',
          DEFAULT: '#FCBF49',
          dark: '#D4A13D'
        },
        t_white: {
          light: '#F1ECD1',
          DEFAULT: '#EAE2B7',
          dark: '#BCB695'
        },
      },
      keyframes: {
        float: {
          '0%': { transform: 'translatey(0px)' },
          '50%': { transform: 'translatey(20px)' },
          '100%': { transform: 'translatey(0px)' }
        }
      },
      animation: {
        float: 'float 3s ease-in-out infinite'
      },
      height: relativeHeights,
      fontFamily: {
        'litia': 'litia'
      }
    },
  },
  plugins: [],
}
