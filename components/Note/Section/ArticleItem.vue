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
          <h1 class="note__title">{{ article.title }}</h1>
          <p class="note__text">{{ article.description }}</p>
        </div>

        <v-responsive class="note__image_wrapper" max-height="200px">
          <nuxt-img
            class="note__image"
            height="auto"
            width="100%"
            sizes="xs:300px"
            :alt="article.title"
            :src="'/articles' + article.img"
            preload
          />
        </v-responsive>
      </div>
    </div>
  </NuxtLink>
</template>
