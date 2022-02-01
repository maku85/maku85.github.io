<template>
  <div id="nav">
    <v-app-bar flat fixed class="navbar">
      <span class="d-md-none">
        <v-app-bar-nav-icon
          aria-label="Menu"
          @click="$store.dispatch('nav/toggleSidebar')"
        ></v-app-bar-nav-icon>
      </span>

      <v-toolbar-title class="navbar-title" tag="span">
        <router-link :to="localePath('/')" custom>
          <strong><span>Mauro</span> Cunsolo</strong>
        </router-link>
      </v-toolbar-title>

      <!-- <theme-switch /> -->

      <v-spacer></v-spacer>

      <v-toolbar-items class="d-none d-md-flex">
        <div class="d-flex align-center">
          <v-btn
            v-for="item in menuItems"
            :key="item.title"
            plain
            :to="localePath(item.path)"
            class="nav-item py-6"
            :aria-label="item.title"
            small
          >
            {{ item.title }}
          </v-btn>
        </div>
      </v-toolbar-items>

      <!--
      <v-btn
        v-for="locale in oppositeLocales"
        :key="locale"
        plain
        color="black"
        :to="switchLocalePath(locale)"
        :aria-label="locale"
        >{{ locale }}</v-btn
      >
      -->
    </v-app-bar>

    <app-sidebar />
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { title: 'Resume', path: '/resume' },
        { title: 'Works', path: '/works' },
        { title: 'Notes', path: '/notes' },
        { title: 'Contact', path: '/contact' },
      ],
    };
  },
  computed: {
    oppositeLocales() {
      return this.$i18n.locales.filter((locale) => locale !== this.$i18n.locale);
    },
  },
};
</script>

<style lang="scss" scoped>
#nav {
  transition: all 0.4s;
  background-color: var(--bg) !important;

  .v-app-bar--is-scrolled {
    box-shadow: $shadow !important;
  }

  .navbar-title {
    a {
      font-weight: 600;
      color: var(--primary-color);
      text-decoration: none;
    }

    span {
      color: $font-color;
    }
  }

  .nav-item {
    &:hover,
    &.nav-item.v-btn--active {
      color: var(--primary-color);
      font-weight: 600;
    }
  }
}
</style>
