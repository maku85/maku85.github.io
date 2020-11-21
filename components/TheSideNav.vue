<template>
  <div class="sidenav-container">
    <div v-if="isSidebar" class="backdrop" @click="hideSidebar"></div>

    <transition name="slide-side">
      <div v-if="isSidebar" class="sidenav">
        <div class="close-menu" @click="hideSidebar">
          <i class="fa fa-close"></i>
        </div>

        <div class="menu-logo">
          <a href="index.html">Mauro</a>
        </div>
        <nav class="mt-5">
          <app-links></app-links>
        </nav>
      </div>
    </transition>
  </div>
</template>

<script>
import AppLinks from "~/components/AppLinks";

export default {
  components: { AppLinks },
  computed: {
    isSidebar() {
      return this.$store.getters["nav/toggleSidebar"];
    },
  },
  methods: {
    hideSidebar() {
      this.$store.dispatch("nav/toggleSidebar");
    },
  },
};
</script>

<style scoped>
.sidenav-container {
  height: 100%;
  width: 100%;
}
.sidenav {
  height: 100%;
  width: 300px;
  z-index: 10000;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
  background-color: #fff;
  padding: 30px 0;
  position: fixed;
  text-align: center;
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
}
.sidenav span {
  position: absolute;
  right: 20px;
  top: 20px;
}
.backdrop {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
}
.slide-side-enter-active,
.slide-side-leave-active {
  transition: all 0.3s ease-out;
}
.slide-side-enter,
.slide-side-leave-to {
  transform: translateX(-100%);
}
</style>
