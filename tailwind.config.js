module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'blue': {
        '100': '#edf5fa',
        '200': '#10394D'
      },
      'gray': '#374151',
      'green': '#79BF41',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
