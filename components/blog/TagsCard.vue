<template>
  <div class="card mb-3">
    <h5>Tags</h5>
    <div class="tags mt-3">
      <NuxtLink
        v-for="tag of tags.split(',')"
        :key="tag"
        :to="localePath(`/blog?category=${tag.trim()}`)"
        class="tag"
        >#{{ tag.trim() }}</NuxtLink
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tags: {
      type: [],
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.tags {
  display: flex;
  flex-wrap: wrap;

  h5 {
    font-weight: 700;
    line-height: 1.618;
    color: #35404e;
    margin: 0;
  }

  a {
    background-color: #eee;
    color: #515c6a;
    padding: 5px 10px;
    margin-bottom: 5px;
    margin-right: 5px;
    border-radius: 5px;
    text-transform: uppercase;
    font-size: 14px;
    transition: all 1s;

    &:hover {
      background-color: $primary-color;
      color: #fff;
    }
  }
}
</style>
