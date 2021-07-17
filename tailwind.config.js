module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'grey': '#f7f8fa',
     }),
     fontFamily: {
      'lato': ['Lato', 'sans-serif']
     },
     
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
