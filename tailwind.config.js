/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './public/**/*.{html,js}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        // primary: '#14b8a6',
        primary: '#008696',
        dark: '#001419',
        darks: '#00181d',
        secondary: '#64748b',
      },
      screens: {
        // xs: '300px',
        xl: '1320px',
      },
    },
  },
  plugins: [],
};
