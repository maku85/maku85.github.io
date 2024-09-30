<script setup>
defineProps({
  error: {
    type: Object,
    required: false,
    default: () => {},
  },
});

const pageNotFound = 'Looks like you are lost in space';
const otherError = 'Houston, we have a problem';
</script>

<template>
  <div
    class="flex h-[100vh] overflow-hidden bg-gradient-to-t from-blue-950 to-sky-950"
  >
    <div class="space__stars absolute"></div>
    <div class="bg-white opacity-60 rounded-md m-auto text-center px-8 py-8">
      <h1 class="font-bold text-8xl">{{ error.statusCode }}</h1>
      <h3 class="text-xl uppercase">
        {{ error.statusCode === 404 ? pageNotFound : otherError }}
      </h3>
      <div v-if="error.statusCode !== 404" class="px-1 py-2">
        <span class="bg-red-100 px-4 py-2">{{ error.message }}</span>
      </div>
      <div class="mt-8">
        <NuxtLink
          class="hover:bg-emerald-600 hover:text-white border-2 px-4 py-2"
          to="/"
          >Go back home</NuxtLink
        >
      </div>
    </div>

    <div class="space__objects">
      <img class="space__rocket top-[75%]" src="/img/rocket.svg" width="40px" />
      <img class="space__earth" src="/img/earth.svg" width="100px" />
      <img class="space__moon" src="/img/moon.svg" width="80px" />
      <div class="space__astronaut-box absolute right-[20%] top-[60%]">
        <img class="space__astronaut" src="/img/astronaut.svg" width="140px" />
      </div>

      <div class="space__glowing-stars">
        <div class="space__star"></div>
        <div class="space__star"></div>
        <div class="space__star"></div>
        <div class="space__star"></div>
        <div class="space__star"></div>
        <div class="space__star"></div>
        <div class="space__star"></div>
        <div class="space__star"></div>
        <div class="space__star"></div>
        <div class="space__star"></div>
      </div>
    </div>
  </div>
</template>
