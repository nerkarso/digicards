const { sky, gray } = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  darkMode: 'class',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        neutral: gray,
        primary: sky,
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
