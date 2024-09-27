<script lang="ts" setup>
defineProps({
  article: {
    type: Object,
    required: true,
    default: () => {},
  },
});
</script>

<template>
  <NuxtLink :to="'/notes' + article._path">
    <div
      class="px-8 py-10 relative after:bg-white after:absolute after:bottom-0 after:left-0 after:w-full after:top-0 after:border-2 after:border-gray-100 after:z-[-99] after:opacity-35 rounded-md shadow-[5px_5px_rgb(0_0_0/20%)]"
    >
      <div class="mb-2">
        <span
          v-for="tag in article.tags"
          :key="tag"
          class="uppercase mr-2 text-emerald-600 font-light"
          >#{{ tag }}</span
        >
      </div>
      <h2 class="text-2xl font-semibold mb-4">{{ article.title }}</h2>
      <p>{{ article.description }}</p>
    </div>
  </NuxtLink>
</template>
