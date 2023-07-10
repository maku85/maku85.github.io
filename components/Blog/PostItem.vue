<script setup>
defineProps({
  post: {
    type: Object,
    required: false,
    default: () => {},
  },
});
</script>

<template>
  <NuxtLink :to="'/notes/' + post.slug">
    <div class="card blog-post">
      <div class="wrapper d-flex flex-column">
        <v-img
          class="image flex-grow-0"
          :aspect-ratio="1"
          height="480px"
          :lazy-src="post.img || 'https://source.unsplash.com/random'"
          :src="post.img || 'https://source.unsplash.com/random'"
          cover
        />

        <div class="content d-flex flex-column flex-grow-1">
          <span class="category">{{ post.tags }}</span>
          <h5 class="title flex-grow-1">{{ post.title }}</h5>
          <div class="text flex-grow-1">
            <p>{{ post.description }}</p>
            <div class="readmore">
              <NuxtLink :to="'/notes/' + post.slug">Read more</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<style lang="scss" scoped>
@import '../assets/sass/variables';

.blog-post {
  margin-bottom: 30px;
  padding: 0 20px;
  height: 100%;
  text-decoration: none;

  .wrapper {
    padding: 20px;
    height: 100%;

    .content {
      padding-top: 20px;

      .category {
        margin-bottom: 15px;
        display: block;
        text-transform: uppercase;
        font-size: 13px;
        font-weight: 500;
        letter-spacing: 0.05em;
        color: $primary-color;
      }

      .title {
        font-size: 30px;
      }

      .text {
        opacity: 0.8;
      }

      .readmore {
        margin-top: 10px;

        a {
          height: 22px;
          line-height: 22px;
          position: relative;
          display: inline-block;
          vertical-align: top;
          font-size: 16px;
          color: $title-color;
          font-weight: 700;
          text-decoration: none;
        }
      }
    }

    .image {
      margin: 0 0 30px;
      border-radius: 20px;
    }
  }
}
</style>
