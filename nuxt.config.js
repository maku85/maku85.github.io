import colors from 'vuetify/es5/util/colors';

export default {
  ssr: false,
  target: 'static',

  head: {
    title: 'Mauro Cunsolo',
    htmlAttrs: { lang: 'it' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || 'My personal site',
      },
      { name: 'format-detection', content: 'telephone=no' },
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
    routes: ['404'],
    fallback: '404.html',
  },

  /*
   ** Global CSS
   */
  css: ['~/assets/scss/main.scss'],
  scss: {
    indentedSyntax: true,
  },

  /*
   ** Nuxt.js modules
   */
  modules: [
    'nuxt-i18n',
    '@nuxtjs/pwa',
    '@nuxt/content',
    'nuxt-fontawesome',
    'vue-social-sharing/nuxt',
  ],

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
  ],

  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css',
      },
    },
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
          Experiences: 'Esperienze',
          Education: 'Educazione',
          'Go to notes': 'Vai agli appunti',
          'Latest notes': 'Appunti recenti',
          'Last update': 'Ultimo aggiornamento',
          'My notes': 'I miei appunti',
          'My skills': 'Le mie competenze',
          'My works': 'I miei lavori',
          Next: 'Successivo',
          'no-notes': 'Non ci sono appunti qui :(',
          Previous: 'Precedente',
          'Recent notes': 'Appunti recenti',
          Resume: 'CV',
          'Search notes': 'Cerca tra gli appunti',
          Works: 'Lavori',
        },
      },
    },
  },

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
  },
};
