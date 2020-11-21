<template>
  <card class="blog-post">
    <div class="row blog-post-inner">
      <div class="col-sm-6 col-md-12 post-thumbnail">
        <NuxtLink :to="'blog/' + post.slug">
          <img
            class="img-responsive"
            :src="post.img || 'https://source.unsplash.com/random'"
            alt=""
          />
        </NuxtLink>
      </div>
      <div class="col-sm-6 col-md-12 post-content">
        <div class="post-content-inner text-center">
          <h3>
            <NuxtLink :to="'blog/' + post.slug">
              {{ post.title }}
            </NuxtLink>
          </h3>
          <p>{{ post.description }}</p>
        </div>
      </div>
    </div>
  </card>
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
