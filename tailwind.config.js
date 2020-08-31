module.exports = {
  purge: [
    './src/**/*'
  ],
  theme: {
    fontFamily: {
      body: [ 'Raleway', 'sans-serif' ]
    },
    colors: {
      'orange': '#CC4B00', // (Links)
      'yellow': '#FFC700', // (Navigation highlight)
      'blue-light': '#006EF5', // (Branding)
      'blue': '#004EAE', // (Search and Small screen navigation)
      'blue-dark': '#013371', // (hover/focus in navigation)
      'gray': '#767676', // (Meta info and placeholder text)
      'gray-dark': '#333333', // (Content and in-form search icon)
      'white': '#FFFFFF', // (Header links / icons and search input)
      'black': '#000000',
    },
    screens: {
      "lg": { min: "640px" }
    },
    extend: {},
  },
  variants: [
    // Enable all variants:
    'responsive', 'group-hover', 'group-focus', 'focus-within', 'first', 'last', 'odd', 'even', 'hover', 'focus', 'active', 'visited', 'disabled'
  ],
  plugins: [],
}
