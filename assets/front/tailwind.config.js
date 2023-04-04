const Encore = require('@symfony/webpack-encore');
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/**/*.html',
  ],
  theme: {
    extend: {
      maxWidth: {
        'prose': '70ch',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'dark-blue': '#104F55',
        blue: '#32746D',
        'light-blue': '#9EC5AB',
        'dark-green': '#01200F',
        night: '#011502',
        red: '#5a1818',
        brown: '#5f392e',
      },
      backgroundImage: {
        'fond': "url('./images/fond.jpg')",
        'tarot': "url('./images/tarot.webp')",
        'panthere': "url('./images/panthere.webp')",
        'homebird': "url('./images/homebird.png')",
      },
      screens: {
        'xs': '40px',
        '4xl': '2000px',
      },
    },
  },
  variants: {},
  corePlugins: {},
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
  purge: Encore.isProduction(),
}
