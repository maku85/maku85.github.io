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
    <div class="card note">
      <div class="wrapper">
        <v-img
          class="image"
          :aspect-ratio="1"
          height="480px"
          :lazy-src="post.img || 'https://source.unsplash.com/random'"
          :src="post.img || 'https://source.unsplash.com/random'"
          cover
        />

        <div class="content">
          <div class="categories">
            <span v-for="tag in post.tags" :key="tag" class="category pr-3">{{ tag }}</span>
          </div>
          <h5 class="title">{{ post.title }}</h5>
          <div class="text">
            <p>{{ post.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<style lang="scss" scoped>
@import '../assets/sass/variables';

.note {
  height: 100%;
  padding: 0 20px;
  transition: all 2s ease;

  .wrapper {
    padding: 20px;
    height: 100%;

    .image {
      border-radius: $border-radius;
      filter: grayscale(90%);
    }

    .content {
      padding-top: 30px;

      .categories {
        margin-bottom: 15px;
        text-transform: uppercase;
        font-size: 13px;
        font-weight: 700;
        letter-spacing: 0.05em;
        color: $primary;
      }

      .title {
        font-size: 24px;
        margin-bottom: 15px;
      }

      .text {
        opacity: 0.8;
        margin-bottom: 15px;
      }
    }
  }

  &:hover {
    .image {
      filter: saturate(120%);
    }
  }
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .note {
    padding: 0px;
  }
}
</style>
