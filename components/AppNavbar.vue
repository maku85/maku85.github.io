<script setup>
import { onMounted } from 'vue';

const bg = ref('transparent');
const menuItems = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Projects', path: '/projects' },
  { title: 'Notes', path: '/notes' },
];

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
  <v-app-bar flat fixed class="navbar" :color="bg">
    <v-app-bar-nav-icon class="d-sm-none" @click="toggleDrawer()" />

    <template #append>
      <div class="d-none d-sm-flex">
        <v-btn
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
          class="navbar__item"
          variant="plain"
        >
          {{ item.title }}
        </v-btn>
      </div>
    </template>
  </v-app-bar>

  <app-sidebar />
</template>
