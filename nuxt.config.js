export default {
  mode: 'spa',
  target: 'static',
  components: true,

  head: {
    title: 'Mauro Cunsolo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  plugins: [{ src: '~/plugins/vue-resize-text.js', ssr: false }],

  build: {
    publicPath: '/assets/',
  },

  generate: {
    routes: ['404'],
  },

  /*
   ** Global CSS
   */
  css: [
    '@/assets/css/bootstrap.min.css',
    '@/assets/scss/theme.scss',
    '@/assets/transitions.css',
  ],
  scss: {
    indentedSyntax: true,
  },

  styleResources: {
    scss: ['~/assets/scss/theme.scss'],
  },

  /*
   ** Nuxt.js modules
   */
  modules: [
    'nuxt-i18n',
    '@nuxtjs/pwa',
    '@nuxt/content',
    '@nuxtjs/style-resources',
    'nuxt-fontawesome',
    'vue-social-sharing/nuxt',
  ],

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/google-analytics',
    // '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
  ],

  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css',
      },
    },
  },

  fontawesome: {
    component: 'fa',
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas'],
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab'],
      },
    ],
  },

  googleAnalytics: {
    id: 'UA-198866487-1',
  },

  i18n: {
    locales: ['en', 'it'],
    defaultLocale: 'it',
    vueI18n: {
      fallbackLocale: 'en',
      detectBrowserLanguage: {
        useCookie: true,
        cookieKey: 'i18n_redirected',
        onlyOnRoot: true, // recommended
      },
      messages: {
        en: {
          'about-title': 'Hey! I’m',
          'about-description':
            "Experienced Node.js back-end developer but deeply passionate about all the latest back-end, front-end and mobile technologies.<br /><br />I'm curious, love challenges but I hate monotony.",
          'contact-description':
            'Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities.',
          'no-posts': 'No post found :(',
        },
        it: {
          About: 'Chi sono',
          'about-title': 'Ciao! Sono',
          'about-description':
            'Sviluppatore back-end Node.js ma profondamente appassionato di tutte le ultime tecnologie back-end, front-end e mobile.<br /><br />Sono curioso, amo le sfide ma odio la monotonia.',
          'About me': 'Chi sono',
          Contact: 'Contatti',
          'contact-description':
            'Sentiti libero di metterti in contatto con me. Sono sempre disponibile a discutere di nuovi progetti, idee creative o opportunità.',
          'Contact me': 'Teniamoci in contatto',
          'Latest posts': 'Articoli recenti',
          'My blog': 'Il mio blog',
          'My skills': 'Le mie competenze',
          'My works': 'I miei lavori',
          Next: 'Successivo',
          Previous: 'Precedente',
          'no-posts': 'Non ci sono post qui :(',
          'Recent posts': 'Articoli recenti',
          'Search posts': 'Cerca tra gli articoli',
          Works: 'Lavori',
          'Work & Education': 'Esperienze ed educazione',
        },
      },
    },
  },
}
