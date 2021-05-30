<template>
  <div class="row">
    <div class="col-md-6">
      <NuxtLink
        v-if="prev"
        :to="localePath({ name: 'blog-slug', params: { slug: prev.slug } })"
        class="blog-nav"
      >
        <span>{{ $t("Previous") }}</span>
        <p>{{ prev.title }}</p>
      </NuxtLink>
    </div>
    <div class="col-md-6">
      <NuxtLink
        v-if="next"
        :to="localePath({ name: 'blog-slug', params: { slug: next.slug } })"
        class="blog-nav text-right"
      >
        <span>{{ $t("Next") }}</span>
        <p>{{ next.title }}</p>
      </NuxtLink>
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
.blog-nav {
  padding: 10px;
  transition: all 0.125s ease-in-out 0s;
  display: block;
  border-radius: 3px;

  span {
    display: block;
    color: $font-color;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 0.17em;
  }

  p {
    font-size: 16px;
    color: $title-color;
    margin: 0;
    font-family: "Josefin Sans", sans-serif;
    font-weight: 600;
  }
}
</style>
