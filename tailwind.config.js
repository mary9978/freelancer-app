/** @type {import('tailwindcss').Config} */
import {fontFamily} from 'tailwindcss/defaultTheme';
function withOpacity(variableName) {
   return({opacityValue})=>{
    if(variableName !== undefined){
      return `rgba(var(${variableName}),${opacityValue})`
   }
   else{
     return `rgb(var(${variableName}))`
   }
   }
}
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      "vazir":["vazir",...fontFamily.sans],
      "PlusJakartaSans":["PlusJakartaSans",...fontFamily.sans]
    },
  
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        primary: {
          900: withOpacity("--color-primary-900"),
          800: withOpacity("--color-primary-800"),
          700: withOpacity("--color-primary-700"),
          600: withOpacity("--color-primary-600"),
          500: withOpacity("--color-primary-500"),
          400: withOpacity("--color-primary-400"),
          300: withOpacity("--color-primary-300"),
          200: withOpacity("--color-primary-200"),
          100: withOpacity("--color-primary-100"),
        },
        secondary: {
          900: withOpacity("--color-secondary-900"),
          800: withOpacity("--color-secondary-800"),
          700: withOpacity("--color-secondary-700"),
          600: withOpacity("--color-secondary-600"),
          500: withOpacity("--color-secondary-500"),
          400: withOpacity("--color-secondary-400"),
          300: withOpacity("--color-secondary-300"),
          200: withOpacity("--color-secondary-200"),
          100: withOpacity("--color-secondary-100"),
          50: withOpacity("--color-secondary-50"),
          0: withOpacity("--color-secondary-0"),
        },
        success: withOpacity("--color-success"),
        warning: withOpacity("--color-warning"),
        error: withOpacity("--color-error"),
      },
      backgroundImage:{
        'bg-four-o-four':'url("https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif")'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

