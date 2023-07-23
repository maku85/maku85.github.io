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
    <div class="card note d-flex flex-column">
      <div class="note__container">
        <div class="note__content">
          <div class="note__categories-container">
            <NuxtLink
              v-for="tag in article.tags"
              :key="tag"
              class="note__category"
              :to="'/notes/categories/' + tag"
            >
              #{{ tag }}
            </NuxtLink>
          </div>
          <h5 class="note__title">{{ article.title }}</h5>
          <p class="note__text">{{ article.description }}</p>
        </div>

        <v-img
          class="note__image"
          :aspect-ratio="1"
          height="180px"
          :lazy-src="article.img || 'https://source.unsplash.com/random'"
          :src="article.img || 'https://source.unsplash.com/random'"
          cover
        />
      </div>
    </div>
  </NuxtLink>
</template>
