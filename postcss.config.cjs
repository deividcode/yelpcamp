const purgecss = require('@fullhuman/postcss-purgecss');
const autoprefixer = require('autoprefixer');
const postcssNested = require('postcss-nested');
const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [
    tailwindcss(),
    postcssNested(),
    autoprefixer(),
    purgecss({
      content: ['index.html'],
      css: ["src/**/*.css"]
    }),
  ]
}