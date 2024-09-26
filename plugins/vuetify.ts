import { createVuetify } from 'vuetify';
import 'vuetify/styles';

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    theme: {
      themes: {
        light: {
          dark: false,
          colors: {
            primary: '#059669',
          },
        },
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
