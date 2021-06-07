import Vue from 'vue'
import vueAnalytics from 'vue-analytics'

export default (ctx) => {
  Vue.use(vueAnalytics, {
    id: 'UA-198866487-1',
    disabled: () => {
      const getGDPR = window.localStorage.getItem('GDPR:accepted')
      if (typeof getGDPR !== null && getGDPR === 'no') return true
      if (typeof getGDPR !== null && getGDPR === 'yes') return false

      return true
    },
    router: ctx.app.router,
    debug: {
      enabled: false,
      sendHitTask: false,
    },
  })
}
