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
  <div class="space">
    <div class="space__stars"></div>
    <div class="space__central-body">
      <h1>{{ error.statusCode }}</h1>
      <h3>{{ error.statusCode === 404 ? pageNotFound : otherError }}</h3>
      <div v-if="error.statusCode !== 404" class="space__message">aaa{{ error.message }}</div>
      <NuxtLink class="mt-4 btn" to="/">go back home</NuxtLink>
    </div>

    <div class="space__objects">
      <v-img class="space__rocket" src="/img/rocket.svg" width="40px" />
      <v-img class="space__earth" src="/img/earth.svg" width="100px" />
      <v-img class="space__moon" src="/img/moon.svg" width="80px" />
      <div class="space__astronaut-box">
        <v-img class="space__astronaut" src="/img/astronaut.svg" width="140px" />
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
