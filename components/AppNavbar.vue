<template>
  <div id="navbar">
    <v-app-bar flat fixed class="navbar">
      <span class="d-md-none">
        <v-app-bar-nav-icon
          :aria-label="Menu"
          @click="$store.dispatch('nav/toggleSidebar')"
        ></v-app-bar-nav-icon>
      </span>

      <router-link :to="localePath('/')" tag="span" style="cursor: pointer">
        <v-toolbar-title class="navbar-title">
          <strong><span>Mauro</span> Cunsolo</strong>
        </v-toolbar-title>
      </router-link>

      <!-- <theme-switch /> -->

      <v-spacer></v-spacer>

      <v-toolbar-items class="d-none d-md-flex">
        <v-btn
          v-for="item in menuItems"
          :key="item.title"
          plain
          :to="localePath(item.path)"
          class="nav-item"
          :aria-label="item.title"
        >
          {{ item.title }}
        </v-btn>
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
  mounted() {
    this.$nextTick(function () {
      window.addEventListener('scroll', function () {
        const navbar = document.getElementById('nav');
        const navClasses = navbar.classList;
        if (document.documentElement.scrollTop >= 100) {
          if (!navClasses.contains('navbar-w-shadow')) {
            navClasses.add('navbar-w-shadow');
          }
        } else if (navClasses.contains('navbar-w-shadow')) {
          navClasses.remove('navbar-w-shadow');
        }
      });
    });
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  transition: all 0.4s;
  background-color: var(--bg) !important;

  &.navbar-w-shadow {
    opacity: 0.8;
    box-shadow: $shadow !important;
  }

  .navbar-title {
    font-weight: 600;
    color: var(--primary-color);

    span {
      color: $font-color;
    }
  }

  .nav-item {
    &.nav-item.v-btn--active {
      color: var(--primary-color);
      font-weight: 600;
    }
  }
}
</style>
