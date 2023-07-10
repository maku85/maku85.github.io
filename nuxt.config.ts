import vuetify from 'vite-plugin-vuetify';

export default defineNuxtConfig({
  // disable server side rendering
  ssr: false,

  // typescripts
  typescript: {
    strict: true,
    // typeCheck: true,
  },

  // css
  css: ['@/assets/sass/app.scss', '@mdi/font/css/materialdesignicons.min.css'],

  // plugins
  plugins: [],

  // build
  build: { transpile: ['vuetify'] },

  // modules
  modules: [
    '@nuxt/content',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) =>
        // @ts-ignore
        config.plugins.push(vuetify()),
      );
    },
  ],

  buildModules: ['@nuxtjs/google-fonts'],

  // auto import components
  components: true,

  // vite plugins
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@import "@/assets/sass/_variables.scss"',
        },
      },
    },
  },

  googleFonts: {
    families: {
      Roboto: true,
      'Jost': true,
    }
  },

  // app config
  app: {
    head: {
      title: 'Mauro Cunsolo',
      htmlAttrs: { lang: 'en' },
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
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Jost%3A0%2C100%3B0%2C200%3B0%2C300%3B0%2C400%3B0%2C500%3B0%2C600%3B0%2C700%3B0%2C800%3B0%2C900%3B1%2C100%3B1%2C200%3B1%2C300%3B1%2C400%3B1%2C500%3B1%2C600%3B1%2C700%3B1%2C800%3B1%2C900%7CCaveat%3A400%3B500%3B600%3B700%7CRoboto%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRoboto+Slab%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&display=swap',
        },
      ],
    },
  },

  // content
  content: {
    documentDriven: true,
    markdown: {
      mdc: true,
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css',
      },
    },
    highlight: { theme: 'github-dark' },
  },

  // target: 'static',
  // env: {
  //   hostname: process.env.HOSTNAME || 'https://www.maurocunsolo.com',
  // },
  // build: {
  //   publicPath: '/assets/',
  // },
  // generate: {
  //   routes: ['404'],
  //   fallback: '404.html',
  // },
  // /*
  //  ** Global CSS
  //  */
  // scss: {
  //   indentedSyntax: true,
  // },
  // /*
  //  ** Nuxt.js modules
  //  */
  // modules: [
  //   'nuxt-i18n',
  //   // '@nuxtjs/pwa',
  //   '@nuxt/content',
  //   'vue-social-sharing/nuxt',
  // ],
  // /*
  //  ** Nuxt.js dev-modules
  //  */
  // buildModules: ['@nuxtjs/color-mode', '@nuxtjs/eslint-module', '@nuxtjs/vuetify'],
  // content: {
  //   markdown: {
  //     prism: {
  //       theme: 'prism-themes/themes/prism-material-oceanic.css',
  //     },
  //   },
  // },
  // i18n: {
  //   locales: ['en'],
  //   // locales: ['en', 'it'],
  //   defaultLocale: 'en',
  //   vueI18n: {
  //     fallbackLocale: 'en',
  //     detectBrowserLanguage: {
  //       useCookie: true,
  //       cookieKey: 'i18n_redirected',
  //       onlyOnRoot: true, // recommended
  //     },
  //     messages: {
  //       en: {
  //         'about-title': 'Hey! It’s-a me,',
  //         'about-description':
  //           "Experienced Node.js back-end developer but deeply passionate about all the latest back-end, front-end and mobile technologies.<br />I'm curious, love challenges but I hate monotony.",
  //         'contact-description':
  //           'Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities.',
  //         'contact-priority': 'Priority',
  //         'contact-name': "What's your name?",
  //         'contact-email': 'Where can I contact you?',
  //         'contact-message': 'What is your message?',
  //         'contact-send': 'Send message',
  //         'no-notes': 'No notes found :(',
  //       },
  //       it: {
  //         'about-title': 'Hey! It’s-a me,',
  //         'about-description':
  //           'Sviluppatore back-end Node.js ma profondamente appassionato di tutte le ultime tecnologie back-end, front-end e mobile.<br />Sono curioso, amo le sfide ma odio la monotonia.',
  //         'About me': 'Chi sono',
  //         Contact: 'Contatti',
  //         'contact-description':
  //           'Sentiti libero di metterti in contatto con me. Sono sempre disponibile a discutere di nuovi progetti, idee creative o opportunità.',
  //         'contact-priority': 'Prioritaria',
  //         'contact-email': 'Dove ti posso ricontattare?',
  //         'contact-name': 'Come ti chiami?',
  //         'contact-message': "Qual'è il tuo messaggio?",
  //         'Contact me': 'Teniamoci in contatto',
  //         'contact-send': 'Invia messaggio',
  //         Experiences: 'Esperienze',
  //         Education: 'Educazione',
  //         'Go to notes': 'Vai agli appunti',
  //         'Latest notes': 'Appunti recenti',
  //         'Last update': 'Ultimo aggiornamento',
  //         'My notes': 'I miei appunti',
  //         'My skills': 'Le mie competenze',
  //         'My works': 'I miei lavori',
  //         Next: 'Successivo',
  //         'no-notes': 'Non ci sono appunti qui :(',
  //         Previous: 'Precedente',
  //         'Recent notes': 'Appunti recenti',
  //         Resume: 'CV',
  //         'Search notes': 'Cerca tra gli appunti',
  //         Works: 'Lavori',
  //       },
  //     },
  //   },
  // },
  // vuetify: {
  //   customVariables: ['~/assets/variables.scss'],
  // },
});
