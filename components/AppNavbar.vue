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
      class="max-w-screen-xl flex items-center justify-end mx-auto px-4 py-6"
    >
      <div class="hidden md:block w-full" id="navbar-default">
        <ul class="flex justify-end mt-4">
          <li v-for="item in menuItems" :key="item.title">
            <NuxtLink class="py-2 px-4" :to="item.path">{{
              item.title
            }}</NuxtLink>
          </li>
        </ul>
      </div>

      <button
        class="md:hidden w-10 h-10 text-gray-500 flex items-center justify-center"
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
    </div>
  </nav>

  <div v-show="showDrawer" class="z-10 fixed inset-0">
    <div
      @click="showDrawer = false"
      class="absolute inset-0 bg-black opacity-50"
    ></div>
  </div>

  <div
    :class="showDrawer ? 'translate-y-0' : 'hidden'"
    class="py-6 px-8 bottom-0 left-0 right-0 h-45 bg-white fixed w-full overflow-y-auto z-30"
  >
    <div class="flex justify-end">
      <button @click="toggleDrawer()">
        <i class="text-2xl mdi mdi-close" />
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

      <div
        class="bg-black w-[2px] absolute bottom-[10px] left-[15px] top-[10px] before:bg-white before:border-2 before:border-black before:rounded-full before:w-[30px] before:h-[30px] before:absolute before:top-0 before:left-[-15px] before:shadow-[5px_5px_rgb(0_0_0/20%)] after:bg-white after:border-2 after:border-black after:rounded-full after:w-[30px] after:h-[30px] after:absolute after:bottom-0 after:left-[-15px] after:shadow-[5px_5px_rgb(0_0_0/20%)]"
      ></div>
    </div>
  </div>
</template>
