<template>
  <v-card v-if="isOpen" single-line class="cookie ma-4" transition="slide-y-transition">
    <v-card-text class="banner-text">
      {{ message }}
      (<nuxt-link to="/cookie-policy">policy page</nuxt-link>)
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn text color="primary" aria-label="Accept" @click="accept">
        {{ buttonTextAccept }}
      </v-btn>
      <v-btn text color="primary" aria-label="Deny" @click="deny">
        {{ buttonTextDeny }}
      </v-btn>
    </v-card-actions>
  </v-card>
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
        'This site use cookies to offer a better browsing experience and analyze site traffic.',
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
  max-width: 300px;
  position: fixed !important;
  bottom: 0;
  z-index: 9;

  .banner-text {
    white-space: initial;

    a {
      text-decoration: none;
    }
  }
}
</style>
