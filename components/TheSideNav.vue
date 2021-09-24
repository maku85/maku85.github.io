<template>
  <v-navigation-drawer
    app
    enable-resize-watcher
    :value="$store.state.nav.toggleSidebar"
    class="sidenav"
    temporary
    @input="updateDrawerState"
  >
    <div class="pt-3 pr-3 text-right close-menu" @click="hideSidebar">
      <v-icon>mdi-close</v-icon>
    </div>

    <ul class="nav-list">
      <li class="nav-item">
        <nuxt-link class="nav-link" :to="localePath('/about')">
          {{ $t("About") }}
        </nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link class="nav-link" :to="localePath('/works')">
          {{ $t("Works") }}
        </nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link class="nav-link" :to="localePath('/notes')">
          {{ $t("Notes") }}
        </nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link class="nav-link" :to="localePath('/contact')">
          {{ $t("Contact") }}
        </nuxt-link>
      </li>
    </ul>
  </v-navigation-drawer>
</template>

<script>
export default {
  watch: {
    $route() {
      this.$store.dispatch("nav/closeSidebar");
    },
  },
  methods: {
    hideSidebar() {
      this.$store.dispatch("nav/closeSidebar");
    },
    updateDrawerState(event) {
      if (!event) this.hideSidebar();
    },
  },
};
</script>

<style lang="scss" scoped>
.sidenav {
  z-index: 10000;
  background-color: var(--bg);
  text-align: center;
  transition: all 0.5s ease 0s;
}
.slide-side-enter-active,
.slide-side-leave-active {
  transition: all 0.3s ease-out;
}
.slide-side-enter,
.slide-side-leave-to {
  transform: translateX(-100%);
}
.close-menu {
  cursor: pointer;

  .v-icon {
    color: var(--font-color) !important;
  }
}
.nav-list {
  list-style: none;
  padding: 0;
  width: 100%;

  .nav-item {
    text-align: center;

    a {
      display: block;
      font-family: "Montserrat", sans-serif;
      font-size: 12px;
      font-weight: 500;
      padding: 13px 0;
      text-transform: uppercase;

      &:hover,
      &:active {
        color: $font-color;
      }
    }
  }
}
</style>
