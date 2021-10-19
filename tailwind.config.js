module.exports = {
  mode: 'jit',
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  darkMode: 'class',
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors:{
        'txcolor':'#1a6183',
        "bgwhite":"#f1f4f6",
        "darkbg":'#111827',
        "textwhite":'#f1f4f6'
      }
    },
  },
  variants: {},
  plugins: [],
}
