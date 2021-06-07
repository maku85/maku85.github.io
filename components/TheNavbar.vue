<template>
  <div>
    <v-app-bar flat fixed id="nav" class="navbar">
      <span class="d-md-none">
        <v-app-bar-nav-icon
          @click="$store.dispatch('nav/toggleSidebar')"
        ></v-app-bar-nav-icon>
      </span>

      <router-link :to="localePath('/')" tag="span" style="cursor: pointer">
        <v-toolbar-title class="navbar-title">
          <strong><span>Mauro</span> Cunsolo</strong>
        </v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>

      <v-toolbar-items class="d-none d-md-flex">
        <v-btn
          plain
          v-for="item in menuItems"
          :key="item.title"
          :to="localePath(item.path)"
          class="nav-item"
        >
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>

      <nuxt-link
        v-for="locale in oppositeLocales"
        :key="locale"
        :to="switchLocalePath(locale)"
        class="locale"
      >
        <v-btn plain>
          {{ locale }}
        </v-btn>
      </nuxt-link>
    </v-app-bar>

    <TheSideNav />
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { title: "About", path: "/about" },
        { title: "Works", path: "/works" },
        { title: "Blog", path: "/blog" },
        { title: "Contact", path: "/contact" },
      ],
    };
  },
  computed: {
    oppositeLocales() {
      return this.$i18n.locales.filter(
        (locale) => locale !== this.$i18n.locale
      );
    },
  },
  mounted() {
    this.$nextTick(function () {
      window.addEventListener("scroll", function () {
        const navbar = document.getElementById("nav");
        const navClasses = navbar.classList;
        if (document.documentElement.scrollTop >= 100) {
          if (!navClasses.contains("navbar-w-shadow")) {
            navClasses.add("navbar-w-shadow");
          }
        } else if (navClasses.contains("navbar-w-shadow")) {
          navClasses.remove("navbar-w-shadow");
        }
      });
    });
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  transition: all 0.4s;
  padding: 0;

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

  .nav-item.v-btn--active {
    color: var(--primary-color);
    font-weight: 600;
  }
}
</style>
