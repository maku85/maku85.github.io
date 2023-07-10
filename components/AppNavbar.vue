<script setup>
import { onMounted } from 'vue';

const bg = ref('transparent');

// state
const showDrawer = useState('navbar.showDrawer', () => false);

// methods
const toggleDrawer = () => (showDrawer.value = !showDrawer.value);
const changeColor = () => {
  bg.value = document.documentElement.scrollTop > 200 ? '#ffffff95' : 'transparent';
};

onMounted(() => {
  window.onscroll = () => {
    changeColor();
  };
});
</script>

<template>
  <div id="navbar">
    <v-app-bar flat fixed class="navbar" :color="bg">
      <v-app-bar-nav-icon class="d-sm-none" @click="toggleDrawer()" />

      <v-app-bar-title class="navbar-title" tag="span">
        <v-btn plain to="/" variant="plain">Mauro Cunsolo</v-btn>
      </v-app-bar-title>

      <v-spacer></v-spacer>

      <template #append>
        <div class="d-none d-sm-flex">
          <v-btn
            v-for="item in menuItems"
            :key="item.title"
            :to="item.path"
            class="nav-item"
            variant="plain"
          >
            {{ item.title }}
          </v-btn>
        </div>
      </template>
    </v-app-bar>

    <app-sidebar />
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { title: 'About', path: '/about' },
        { title: 'Projects', path: '/projects' },
        { title: 'Notes', path: '/notes' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/sass/variables';

#navbar {
  .navbar-title {
    a {
      font-weight: 800;

      &:hover {
        color: $primary-color;
      }
    }
  }

  .nav-item {
    &:hover,
    &.nav-item.v-btn--active {
      color: $primary-color;
    }
  }
}
</style>
