<template>
  <NuxtLink :to="localePath('/notes/' + post.slug)" class="card blog-post">
    <div class="d-flex blog-post-inner">
      <div class="post-thumbnail d-none d-md-block">
        <v-img
          height="170"
          width="170"
          :lazy-src="post.img || 'https://source.unsplash.com/random'"
          :src="post.img || 'https://source.unsplash.com/random'"
        ></v-img>
      </div>
      <div class="post-content">
        <div class="post-tags">
          <NuxtLink
            v-for="tag of (post.tags || '').split(',')"
            :key="tag"
            :to="localePath(`/notes?category=${tag.trim()}`)"
          >
            #{{ tag.trim() }}
          </NuxtLink>
        </div>
        <div class="post-content-inner">
          <h2>{{ post.title }}</h2>
          <p>{{ post.description }}</p>
        </div>
      </div>
    </div>
  </NuxtLink>
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
    .post-tags {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      margin-bottom: 15px;

      a {
        display: block;
        margin-right: 10px;
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 400;
        color: var(--primary-color);
      }
    }

    .post-content-inner {
      h2 {
        font-size: 19px;
        margin-top: 0;
        margin-bottom: 12px;
        color: var(--title-color);
        font-weight: 700;
        line-height: 1.53;
      }

      p {
        color: $font-color;
        margin: 15px 0 5px;
      }
    }
  }
}
</style>
