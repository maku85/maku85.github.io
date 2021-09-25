import Vue from 'vue';
import vueAnalytics from 'vue-analytics';

export default (ctx) => {
  Vue.use(vueAnalytics, {
    id: 'UA-198866487-1',
    disabled: () => {
      const getGDPR = window.localStorage.getItem('GDPR:accepted');
      return getGDPR !== 'yes';
    },
    router: ctx.app.router,
    debug: {
      enabled: false,
      trace: false,
      sendHitTask: true,
    },
  });
};
