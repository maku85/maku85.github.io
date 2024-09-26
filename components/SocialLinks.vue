<script lang="ts" setup>
const { data } = await useAsyncData('/', () => queryContent('/').findOne());

const socials = computed(() => data?.value?.socials || []);
</script>

<template>
  <NuxtLink
    v-for="(social, index) of socials"
    :key="index"
    :to="social.link"
    rel="noreferrer"
    target="_blank"
    class="text-2xl"
  >
    <v-icon
      v-if="social.type === 'linkedin'"
      class="text-blue-700 hover:text-blue-900"
      :icon="'mdi-' + social.type"
    />
    <v-icon
      v-if="social.type === 'github'"
      class="text-gray-800 hover:text-gray-900"
      :icon="'mdi-' + social.type"
    />
    <v-icon
      v-if="social.type === 'codepen'"
      class="text-gray-800 hover:text-gray-900"
      :icon="'mdi-' + social.type"
    />
  </NuxtLink>
</template>
