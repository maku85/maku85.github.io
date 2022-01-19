<template>
  <v-banner v-if="isOpen" single-line class="cookie">
    <div class="banner-text">
      {{ message }}
      (<nuxt-link to="/cookie-policy">policy page</nuxt-link>)
    </div>

    <template #actions>
      <v-btn text color="primary" @click="accept">
        {{ buttonTextAccept }}
      </v-btn>
      <v-btn text color="primary" @click="deny">
        {{ buttonTextDeny }}
      </v-btn>
    </template>
  </v-banner>
</template>

<script>
export default {
  props: {
    buttonTextAccept: {
      type: String,
      default: 'Accept',
    },
    buttonTextDeny: {
      type: String,
      default: 'Deny',
    },
    message: {
      type: String,
      default:
        'This site use 🍪 (cookies) to offer a better browsing experience and analyze site traffic.',
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  created() {
    if (!this.getGDPR() === true) {
      this.isOpen = true;
    }
  },
  methods: {
    getGDPR() {
      if (process.browser) {
        return localStorage.getItem('GDPR:accepted');
      }
    },
    accept() {
      if (process.browser) {
        this.isOpen = false;
        localStorage.setItem('GDPR:accepted', 'yes');
        this.$ga.enable();
        this.$ga.page(this.$route.fullPath);
      }
    },
    deny() {
      if (process.browser) {
        this.isOpen = false;
        localStorage.setItem('GDPR:accepted', 'no');
        this.$ga.disable();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.cookie {
  z-index: 1;
  width: 100%;
  position: fixed !important;
  background-color: #fff !important;
  bottom: 0;
  padding: 10px 20px 0 20px;
  box-shadow: 0px 0px 0px 0px rgb(0 0 0 / 20%), 0px 0px 0px 0px rgb(0 0 0 / 14%),
    0px 0px 0px 0px rgb(0 0 0 / 12%);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.125);

  .banner-text {
    padding-left: 1rem !important;
    white-space: initial;
  }
}
</style>
