<template>
  <NuxtLink :to="localePath('/blog/' + post.slug)" class="card blog-post">
    <div class="blog-post-inner">
      <div class="post-thumbnail">
        <v-img
          height="200"
          :src="post.img || 'https://source.unsplash.com/random'"
        ></v-img>
      </div>
      <div class="post-content text-center">
        <div class="post-tags">
          <NuxtLink
            v-for="tag of (post.tags || '').split(',')"
            :key="tag"
            :to="localePath(`/blog?category=${tag.trim()}`)"
            >#{{ tag.trim() }}</NuxtLink
          >
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
      description: "Post data",
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.blog-post {
  margin-bottom: 30px;
  position: relative;
  transition: all 0.5s ease;
  background: var(--light-bg-color);
  color: var(--font-color);

  &:hover {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
  }

  .post-thumbnail {
    position: relative;
    top: -55px;

    .v-image {
      border-radius: 20px;
      box-shadow: 0px 5px 20px 0px rgb(69 67 96 / 10%);
    }
  }

  .post-content {
    margin-top: -30px;

    .post-tags {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      margin-bottom: 10px;
      place-content: center;

      a {
        display: block;
        margin-right: 20px;
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
