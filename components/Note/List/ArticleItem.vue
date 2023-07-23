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
      <div class="note__container">
        <v-img
          class="note__image"
          :aspect-ratio="1"
          height="480px"
          :lazy-src="article.img || 'https://source.unsplash.com/random'"
          :src="article.img || 'https://source.unsplash.com/random'"
          cover
        />

        <div class="note__content">
          <div class="note__categories-container">
            <span v-for="tag in article.tags" :key="tag" class="note__categoty">{{ tag }}</span>
          </div>
          <h5 class="note__title">{{ article.title }}</h5>
          <p class="note__text">{{ article.description }}</p>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
