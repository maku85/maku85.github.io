import { createVuetify } from 'vuetify';
import 'vuetify/styles';

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    theme: false,
  });

  nuxtApp.vueApp.use(vuetify);
});
