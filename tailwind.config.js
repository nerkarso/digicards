const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  darkMode: 'class',
  purge: ['./node_modules/@vechaiui/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.sky,
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@vechaiui/core')({
      colors: ['primary'],
    }),
  ],
};
