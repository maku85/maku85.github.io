<template>
  <v-fab-transition>
    <v-btn
      id="back-top"
      href="#top"
      class="d-none"
      @click="scrollToTop()"
      fab
      small
      dark
      bottom
      right
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </v-fab-transition>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    this.$nextTick(function () {
      window.addEventListener('scroll', function () {
        const backTop = document.getElementById('back-top');
        const backTopClasses = backTop.classList;
        if (document.documentElement.scrollTop >= 400) {
          if (backTopClasses.contains('d-none')) {
            backTopClasses.remove('d-none');
          }
        } else if (!backTopClasses.contains('d-none')) {
          backTopClasses.add('d-none');
        }
      });
    });
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
  },
};
</script>

<style lang="scss" scoped>
#back-top {
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 16px;
  cursor: pointer;
  background-color: var(--primary-color);
  box-shadow: $shadow;
  transition: 1s;
}
</style>
