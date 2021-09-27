export default {
  ssr: false,
  target: 'static',

  head: {
    title: 'Mauro Cunsolo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || 'My personal site',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  plugins: [
    {
      src: '~/plugins/vue-google-analytics',
      mode: 'client',
    },
    { src: '~/plugins/vue-resize-text.js', ssr: false },
  ],

  components: true,

  env: {
    hostname: process.env.HOSTNAME || 'https://www.maurocunsolo.com',
  },

  build: {
    publicPath: '/assets/',
  },

  generate: {
    // fallback: 'index.html',
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
          'about-title': 'Hey! It’s-a me,',
          'about-description':
            "Experienced Node.js back-end developer but deeply passionate about all the latest back-end, front-end and mobile technologies.<br />I'm curious, love challenges but I hate monotony.",
          'contact-description':
            'Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities.',
          'contact-priority': 'Priority',
          'contact-name': "What's your name?",
          'contact-email': 'Where can I contact you?',
          'contact-message': 'What is your message?',
          'contact-send': 'Send message',
          'no-notes': 'No notes found :(',
        },
        it: {
          About: 'Chi sono',
          'about-title': 'Hey! It’s-a me,',
          'about-description':
            'Sviluppatore back-end Node.js ma profondamente appassionato di tutte le ultime tecnologie back-end, front-end e mobile.<br />Sono curioso, amo le sfide ma odio la monotonia.',
          'About me': 'Chi sono',
          Contact: 'Contatti',
          'contact-description':
            'Sentiti libero di metterti in contatto con me. Sono sempre disponibile a discutere di nuovi progetti, idee creative o opportunità.',
          'contact-priority': 'Prioritaria',
          'contact-email': 'Dove ti posso ricontattare?',
          'contact-name': 'Come ti chiami?',
          'contact-message': "Qual'è il tuo messaggio?",
          'Contact me': 'Teniamoci in contatto',
          'contact-send': 'Invia messaggio',
          'Latest notes': 'Appunti recenti',
          'Last update': 'Ultimo aggiornamento',
          'My notes': 'I miei appunti',
          'My skills': 'Le mie competenze',
          'My works': 'I miei lavori',
          Next: 'Successivo',
          Previous: 'Precedente',
          'no-notes': 'Non ci sono appunti qui :(',
          'Recent notes': 'Appunti recenti',
          'Search notes': 'Cerca tra gli appunti',
          Works: 'Lavori',
          'Work & Education': 'Esperienze ed educazione',
        },
      },
    },
  },
};
