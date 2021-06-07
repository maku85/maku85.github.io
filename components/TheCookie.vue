<template>
  <v-banner single-line app v-if="isOpen" class="cookie">
    <span class="pl-3">{{ message }}</span>
    (<nuxt-link to="/cookie-policy">policy page</nuxt-link>)

    <template v-slot:actions>
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
      default: "Accept",
    },
    buttonTextDeny: {
      type: String,
      default: "Deny",
    },
    message: {
      type: String,
      default:
        "This site use 🍪 (cookies) to offer a better browsing experience and analyze site traffic.",
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
        return localStorage.getItem("GDPR:accepted");
      }
    },
    accept() {
      if (process.browser) {
        this.isOpen = false;
        localStorage.setItem("GDPR:accepted", "yes");
        this.$ga.enable();
        this.$ga.page(this.$route.fullPath);
      }
    },
    deny() {
      if (process.browser) {
        this.isOpen = false;
        localStorage.setItem("GDPR:accepted", "no");
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
  position: fixed;
  background-color: #fff !important;
  bottom: 0;
}
</style>