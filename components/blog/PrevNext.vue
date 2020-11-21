<template>
  <div class="blog-detail-sib">
    <div class="row">
      <div class="col-md-6">
        <NuxtLink
          v-if="prev"
          :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
          class="blog-nav"
        >
          <span>Previous</span>
          <p>{{ prev.title }}</p>
        </NuxtLink>
      </div>
      <div class="col-md-6">
        <NuxtLink
          v-if="next"
          :to="{ name: 'blog-slug', params: { slug: next.slug } }"
          class="blog-nav"
        >
          <span>Next</span>
          <p>{{ next.title }}</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null,
    },
    next: {
      type: Object,
      default: () => null,
    },
  },
};
</script>

<style lang="scss">
.blog-detail-sib {
  padding: 40px 0 20px;
}
.blog-nav {
  padding: 10px;
  background: #f7f7f7;
  transition: all 0.125s ease-in-out 0s;
  display: block;
  border-radius: 3px;
}
.blog-detail-sib .blog-nav span {
  display: block;
  color: #333;
  font-size: 14px;
}
blog-detail-sib .blog-nav p {
  font-size: 16px;
  color: #333;
  margin: 0;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 700;
}
</style>
