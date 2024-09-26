import vuetify from 'vite-plugin-vuetify';

export default defineNuxtConfig({
  app: {
    baseURL: '/',
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Mauro Cunsolo - Back-end Developer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'description', content: 'Mauro Cunsolo - Back-end Developer' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Jost%3A0%2C100%3B0%2C200%3B0%2C300%3B0%2C400%3B0%2C500%3B0%2C600%3B0%2C700%3B0%2C800%3B0%2C900%3B1%2C100%3B1%2C200%3B1%2C300%3B1%2C400%3B1%2C500%3B1%2C600%3B1%2C700%3B1%2C800%3B1%2C900%7CCaveat%3A400%3B500%3B600%3B700%7CRoboto%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRoboto+Slab%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&display=swap',
        },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  build: {
    transpile: ['vuetify'],
  },

  sourcemap: { client: true },

  css: [
    '@mdi/font/css/materialdesignicons.min.css',
    '@/assets/sass/app.scss',
    '@/assets/css/main.css',
  ],

  experimental: {
    payloadExtraction: false,
  },

  debug: false,

  modules: [
    '@nuxt/content',
    '@nuxtjs/critters',
    '@nuxtjs/robots',

    /* Treeshaking: https://next.vuetifyjs.com/en/features/treeshaking/ */
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config?.plugins?.push(vuetify());
      });
    },
  ],

  nitro: {
    routeRules: {
      '/_ipx/**': { cache: { maxAge: 60 * 10 } },
      '/_nuxt/**': { cache: { maxAge: 60 * 10 } },
      '/img/**': { cache: { maxAge: 60 * 10 } },
    },
  },

  spaLoadingTemplate: false,

  // disable server side rendering
  ssr: false,

  // disable telemetry
  telemetry: false,

  // content
  content: {
    documentDriven: true,
    experimental: {
      clientDB: true,
      stripQueryParameters: false,
    },
    highlight: {
      theme: 'material-theme',
      langs: ['javascript', 'typescript', 'json', 'bash', 'python'],
    },
    markdown: { mdc: true },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  critters: {
    config: {
      preload: 'swap',
    },
  },

  compatibilityDate: '2024-09-25',
});
