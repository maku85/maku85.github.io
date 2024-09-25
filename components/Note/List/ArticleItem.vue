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
    <div class="card px-7 py-5">
      <div class="mb-2">
        <span
          v-for="tag in article.tags"
          :key="tag"
          class="uppercase mr-2 text-emerald-600 font-light"
          >#{{ tag }}</span
        >
      </div>
      <h2 class="text-xl">{{ article.title }}</h2>
      <p>{{ article.description }}</p>
    </div>
  </NuxtLink>
</template>
