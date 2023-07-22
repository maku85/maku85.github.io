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
    <div class="card blog-post d-flex flex-column">
      <div class="content d-flex flex-column flex-grow-1">
        <div class="categories flex-grow-1">
          <NuxtLink v-for="tag in post.tags" :key="tag" :to="'/notes/categories/' + tag">
            <span class="category mr-2">#{{ tag }}</span>
          </NuxtLink>
        </div>
        <h5 class="title flex-grow-1">{{ post.title }}</h5>
        <div class="text flex-grow-0">
          <p>{{ post.description }}</p>
        </div>
      </div>

      <v-img
        class="image flex-grow-0"
        :aspect-ratio="1"
        height="180px"
        :lazy-src="post.img || 'https://source.unsplash.com/random'"
        :src="post.img || 'https://source.unsplash.com/random'"
        cover
      />
    </div>
  </NuxtLink>
</template>

<style lang="scss" scoped>
@import '../assets/sass/variables';

.blog-post {
  height: 100%;
  padding: 30px;

  .content {
    .categories {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 15px;

      .category {
        text-transform: uppercase;
        font-size: 13px;
        font-weight: 500;
        letter-spacing: 0.05em;
        color: $primary;
      }
    }

    .title {
      font-size: 24px;
    }

    .text {
      opacity: 0.8;
    }
  }

  .image {
    margin: 30px 0 0;
    border-radius: $border-radius;
    filter: grayscale(90%);
    transition: all 0.5s ease;
  }

  &:hover {
    .image {
      filter: saturate(120%);
    }
  }
}
</style>
