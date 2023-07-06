<script lang="ts" setup>
defineProps({
  post: {
    type: Object,
    required: false,
    default: () => {},
  },
});
</script>

<template>
  <NuxtLink :to="'/notes' + post._path">
    <div class="card blog-post">
      <div class="wrapper d-flex flex-column">
        <div class="content d-flex flex-column flex-grow-1">
          <span class="category">{{ post.tags }}</span>
          <h5 class="title flex-grow-1">{{ post.title }}</h5>
          <div class="text flex-grow-1">
            <p>{{ post.description }}</p>
          </div>
        </div>

        <v-img
          class="image flex-grow-0"
          :aspect-ratio="1"
          height="240px"
          :lazy-src="post.img || 'https://source.unsplash.com/random'"
          :src="post.img || 'https://source.unsplash.com/random'"
          cover
        />
      </div>
    </div>
  </NuxtLink>
</template>

<style lang="scss" scoped>
@import '../assets/sass/variables';

.blog-post {
  height: 100%;
  padding: 0 20px;

  .wrapper {
    padding: 20px;
    height: 100%;

    .content {
      padding-top: 30px;

      .category {
        margin-bottom: 5px;
        text-transform: uppercase;
        font-size: 13px;
        font-weight: 700;
        letter-spacing: 0.05em;
        color: $primary-color;
      }

      .title {
        font-size: 24px;
        padding-top: 10px;
      }

      .text {
        opacity: 0.8;
      }
    }

    .image {
      margin: 10px 0 0;
      border-radius: $border-radius;
      filter: grayscale(90%);
      transition: all 0.5s ease;
    }
  }

  &:hover {
    .image {
      filter: saturate(120%);
    }
  }
}
</style>
