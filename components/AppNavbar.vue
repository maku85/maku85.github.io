<script setup>
import { onMounted } from 'vue';

const bg = ref('transparent');
const menuItems = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Projects', path: '/projects' },
  { title: 'Notes', path: '/notes' },
];

const showDrawer = useState('navbar.showDrawer', () => false);

const toggleDrawer = () => {
  showDrawer.value = !showDrawer.value;
};
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
  <v-toolbar flat :color="bg" app>
    <v-app-bar-nav-icon class="d-sm-none" @click="toggleDrawer()" />

    <template #append>
      <div class="d-none d-sm-flex">
        <v-btn
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
          variant="plain"
        >
          {{ item.title }}
        </v-btn>
      </div>
    </template>
  </v-toolbar>

  <v-navigation-drawer
    v-model="showDrawer"
    temporary
    location="bottom"
    class="py-5 px-5"
    color="white"
  >
    <div class="flex flex-col align-end" @click="toggleDrawer()">
      <v-icon icon="mdi-close" />
    </div>

    <div class="container mx-auto relative">
      <ul class="ml-10">
        <li
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
          class="py-3"
        >
          <NuxtLink
            :to="item.path"
            class="uppercase font-bold text-bleck hover:text-gray-400"
          >
            {{ item.title }}
          </NuxtLink>
        </li>
      </ul>

      <div class="line-block"><span></span></div>
    </div>
  </v-navigation-drawer>
</template>
