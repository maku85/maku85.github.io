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
    <div class="card note">
      <div class="note__content">
        <div class="note__categories-container">
          <span v-for="tag in article.tags" :key="tag" class="note__category">#{{ tag }}</span>
        </div>
        <h2 class="note__title">{{ article.title }}</h2>
        <p class="note__text">{{ article.description }}</p>
      </div>
    </div>
  </NuxtLink>
</template>
