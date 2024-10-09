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
  <div class="masonry-item">
    <NuxtLink :to="'/notes' + article._path">
      <div
        class="px-8 py-12 relative after:bg-white after:absolute after:bottom-0 after:left-0 after:w-full after:top-0 after:border-2 after:border-gray-200 after:rounded-sm after:z-[-99] after:opacity-35 shadow-[5px_5px_rgb(0_0_0/20%)]"
      >
        <h2 class="font-mono text-2xl font-bold mb-8">{{ article.title }}</h2>
        <p class="font-mono text-gray-600">{{ article.description }}</p>
      </div>
    </NuxtLink>
  </div>
</template>
