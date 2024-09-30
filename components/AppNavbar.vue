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
  <nav>
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <i class="d-sm-none" @click="toggleDrawer()" />
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        @click="toggleDrawer()"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div class="hidden md:block w-full" id="navbar-default">
        <ul class="flex justify-end mt-4">
          <li v-for="item in menuItems" :key="item.title">
            <NuxtLink class="py-2 px-4" :to="item.path">{{
              item.title
            }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <transition
    enter-class="opacity-0"
    enter-active-class="ease-out transition-medium"
    enter-to-class="opacity-100"
    leave-class="opacity-100"
    leave-active-class="ease-out transition-medium"
    leave-to-class="opacity-0"
  >
    <div
      @keydown.esc="showDrawer = false"
      v-show="showDrawer"
      class="z-10 fixed inset-0 transition-opacity"
    >
      <div
        @click="showDrawer = false"
        class="absolute inset-0 bg-black opacity-50"
        tabindex="0"
      ></div>
    </div>
  </transition>

  <div
    :class="showDrawer ? 'translate-y-0' : 'hidden'"
    class="py-5 px-5 transform bottom-0 left-0 right-0 h-45 bg-white fixed w-full overflow-y-auto ease-in-out transition-all duration-300 z-30 transform-none"
  >
    <div class="flex justify-end">
      <button @click="toggleDrawer()">
        <i class="text-3xl mdi mdi-close" />
      </button>
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
            @click.native="toggleDrawer()"
            class="uppercase font-bold text-bleck hover:text-gray-400"
          >
            {{ item.title }}
          </NuxtLink>
        </li>
      </ul>

      <div class="line-block"><span></span></div>
    </div>
  </div>
</template>
