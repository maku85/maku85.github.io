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
        <NuxtLink
          v-for="tag in article.tags"
          :key="tag"
          class="uppercase mr-2 text-emerald-600 font-light"
          :to="'/notes/categories/' + tag"
        >
          #{{ tag }}
        </NuxtLink>
      </div>
      <h1 class="text-2xl">{{ article.title }}</h1>
      <p>{{ article.description }}</p>
    </div>
  </NuxtLink>
</template>
