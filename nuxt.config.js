import global from './utils/global'
import getRoutes from './utils/getRoutes'
import getSiteMeta from './utils/getSiteMeta'
const meta = getSiteMeta()
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'John Philip',
    htmlAttrs: {
      lang: 'en', // it sets the language English
    },
    meta: [
      ...meta,
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      {
        hid: 'description',
        name: 'description',
        content: 'John Philip | Software Developer | Tech Writer',
      },
      {
        property: 'og:site_name',
        content: 'John Philip',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://johnphilip.dev',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'John Philip',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'John Philip | Software Developer | Tech Writer',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content:
          'https://images.pexels.com/photos/5935794/pexels-photo-5935794.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      },
      { name: 'twitter:site', content: '@amjohnphilip' },
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://johnphilip.dev',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'John Philip',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'John Philip | Software Developer | Tech Writer',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content:
          'https://images.pexels.com/photos/5935794/pexels-photo-5935794.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/johnphilip.jpg' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/vue-scroll-indicator', ssr: false }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  hooks: {
    'content:file:beforeInsert': (document) => {
      if (document.extension === '.md') {
        const stats = require('reading-time')(document.text)
        document.readingStats = stats
      }
    },
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css',
      },
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxt/content', '@nuxtjs/sitemap', '@nuxtjs/color-mode'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  sitemap: {
    hostname: global.siteUrl,
    routes() {
      return getRoutes()
    },
  },
}
