export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Purpsot | POC | Nuxt.js',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;700&display=swap'
    }


    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/scss/global/index.scss'
  ],


  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    // '@/plugins/vue-match-heights',
    // '@/plugins/vue-mq',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
     '@nuxtjs/style-resources',
  ],

  styleResources: {
    scss: [
      '~/assets/scss/component-imports/*.scss'
    ]
  },

  // svgSprite: {
  //   input: '~/assets/icons/'
  // },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {

    // Makes an external css file
    extractCSS:  true,

    extend(config, ctx) {
      config.resolve.alias['vue'] = 'vue/dist/vue.common'
    }
  }
}
