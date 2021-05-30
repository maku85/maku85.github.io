<template>
  <a id="back-top" href="#top" class="d-none" @click="scrollToTop()">
    <v-icon>mdi-chevron-up</v-icon>
  </a>
</template>

<script>
export default {
  name: "App",
  mounted() {
    this.$nextTick(function () {
      window.addEventListener("scroll", function () {
        const backTop = document.getElementById("back-top");
        const backTopClasses = backTop.classList;
        if (document.documentElement.scrollTop >= 400) {
          if (backTopClasses.contains("d-none")) {
            backTopClasses.remove("d-none");
          }
        } else if (!backTopClasses.contains("d-none")) {
          backTopClasses.add("d-none");
        }
      });
    });
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style lang="scss" scoped>
#back-top {
  position: fixed;
  bottom: 15px;
  right: 15px;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  background-color: var(--primary-color);
  box-shadow: $shadow;
  transition: 1s;

  .v-icon {
    color: #fff;
  }
}
</style>