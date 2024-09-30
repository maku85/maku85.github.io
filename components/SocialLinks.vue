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
    class="rounded-full text-4xl p-1 hover:shadow-[5px_5px_rgb(0_0_0/20%)]"
  >
    <i
      v-if="social.type === 'linkedin'"
      class="text-blue-700 hover:text-blue-900 mdi mdi-linkedin"
    />
    <i
      v-if="social.type === 'github'"
      class="text-gray-800 hover:text-gray-900 mdi mdi-github"
    />
    <i
      v-if="social.type === 'codepen'"
      class="text-gray-800 hover:text-gray-900 mdi mdi-codepen"
    />
  </NuxtLink>
</template>
