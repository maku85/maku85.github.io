<template>
  <v-card :to="localePath('/notes/' + post.slug)" class="card blog-post">
    <v-card-text class="d-flex blog-post-inner">
      <div class="post-thumbnail d-none d-md-block">
        <v-img
          height="170"
          width="170"
          :lazy-src="post.img || 'https://source.unsplash.com/random'"
          :src="post.img || 'https://source.unsplash.com/random'"
        ></v-img>
      </div>

      <div class="post-content">
        <div class="post-content-inner d-flex flex-column py-6">
          <h2 class="mb-4">{{ post.title }}</h2>
          <p class="flex-grow-1">{{ post.description }}</p>

          <div class="post-tags text-right">
            <v-chip
              v-for="tag of post.tags"
              :key="tag"
              class="tag"
              :to="localePath(`/notes?category=${tag.trim()}`)"
              label
            >
              #{{ tag.trim() }}
            </v-chip>
          </div>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      description: 'Post data',
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.blog-post {
  margin-bottom: 30px;
  position: relative;
  background: var(--light-bg-color);
  color: var(--font-color);

  .post-thumbnail {
    position: relative;
    left: -55px;

    .v-image {
      border: 1px solid rgba(0, 0, 0, 0.125);
      border-radius: $border-radius;
      box-shadow: $shadow;
    }
  }

  .post-content {
    .tag {
      margin-right: 10px;
      text-transform: uppercase;
    }

    .post-content-inner {
      height: 100%;

      h2 {
        font-size: 19px;
        color: var(--title-color);
        font-weight: 700;
      }

      p {
        color: $font-color;
      }
    }
  }
}
</style>
