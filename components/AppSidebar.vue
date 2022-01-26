<template>
  <v-navigation-drawer
    app
    enable-resize-watcher
    :value="$store.state.nav.toggleSidebar"
    class="sidenav"
    temporary
    @input="updateDrawerState"
  >
    <div class="pt-2 pr-2 text-right close-menu" @click="hideSidebar">
      <v-icon>mdi-close</v-icon>
    </div>

    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="nav-header">
          <strong><span>Mauro</span> Cunsolo</strong>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
    <v-list dense nav>
      <v-list-item link :to="localePath('/resume')">
        <v-list-item-content>
          <v-list-item-title class="nav-link">
            {{ $t('Resume') }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link :to="localePath('/works')">
        <v-list-item-content>
          <v-list-item-title class="nav-link">
            {{ $t('Works') }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link :to="localePath('/notes')">
        <v-list-item-content>
          <v-list-item-title class="nav-link">
            {{ $t('Notes') }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link :to="localePath('/contact')">
        <v-list-item-content>
          <v-list-item-title class="nav-link">
            {{ $t('Contact') }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  watch: {
    $route() {
      this.$store.dispatch('nav/closeSidebar');
    },
  },
  methods: {
    hideSidebar() {
      this.$store.dispatch('nav/closeSidebar');
    },
    updateDrawerState(event) {
      if (!event) this.hideSidebar();
    },
  },
};
</script>

<style lang="scss" scoped>
.nav-header {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--primary-color);

  span {
    color: $font-color;
  }
}
.nav-link {
  color: var(--primary-color);
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;

  &:hover,
  &:active {
    color: $font-color;
  }
}
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
</style>
