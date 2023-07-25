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
        <v-responsive class="note__image_wrapper">
          <nuxt-img
            height="auto"
            width="100%"
            class="note__image"
            sizes="xs:230px sm:640px md:768px lg:800px xl:800px xxl:800px"
            :alt="article.title"
            :src="'/articles' + article?.img"
            preload
          />
        </v-responsive>

        <div class="note__content">
          <div class="note__categories-container">
            <span v-for="tag in article.tags" :key="tag" class="note__category">{{ tag }}</span>
          </div>
          <h1 class="note__title">{{ article.title }}</h1>
          <p class="note__text">{{ article.description }}</p>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
