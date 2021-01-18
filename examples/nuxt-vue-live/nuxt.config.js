export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'DruxtJS Menu: Decoupled Menu Initiative demo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://menu.druxtjs.org
    'druxt-menu'
  ],

  // Druxt Configuration
  druxt: {
    baseUrl: 'https://demo-api.druxtjs.org',
    menu: {
      jsonApiMenuItems: true,
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend(config, { isDev, isClient }) {
      // https://github.com/vue-styleguidist/vue-live#enabling-template-compilation
      config.resolve.alias.vue$ = 'vue/dist/vue.esm.js'

      config.module.rules.push({
        enforce: 'pre',
        test: /\.txt$/,
        loader: 'raw-loader',
        exclude: /(node_modules)/
      });
    },
  }
}
