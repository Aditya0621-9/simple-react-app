module.exports = {
  
  plugins: [
    // ...
    require('tailwindcss'),
    require('autoprefixer'),
    // ...
  ],
  future: {
    removeDeprecatedGapUtilities: true,
  },
}