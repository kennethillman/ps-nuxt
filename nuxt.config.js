export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Purpsot | POC | Nuxt.js',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv':'X-UA-Compatible', content:'IE=edge' },
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
     {src: '@/plugins/vue-body-scroll-lock', mode: 'client'}
    // '@/plugins/vue-mq',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
     '@nuxtjs/axios', 
     '@nuxtjs/style-resources',
     '@nuxtjs/svg-sprite',
     '@nuxtjs/toast',
  ],

  axios: {
    // proxy: true
  },

  styleResources: {
    scss: [
      '~/assets/scss/component-imports/*.scss'
    ]
  },

  svgSprite: {
    input: '~/assets/icons/',
    elementClass: 'ps-icon'
  },

  toast: {
      position: 'bottom-center',
      duration: 1375
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {

    // Makes an external css file
    extractCSS:  true,



    extend(config, ctx) {
      config.node = {
        fs: 'empty',
        path: 'empty',
      }
      config.resolve.alias['vue'] = 'vue/dist/vue.common';
    }
  }
}
