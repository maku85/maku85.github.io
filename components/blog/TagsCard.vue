<template>
  <v-card>
    <v-card-title> Tags </v-card-title>
    <v-card-text class="tags mt-2">
      <v-btn
        v-for="tag of tags"
        :key="tag"
        text
        :to="localePath(`/notes?category=${tag.trim()}`)"
        class="tag mr-2 mb-2"
        small
        :aria-label="tag"
        >#{{ tag.trim() }}</v-btn
      >
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.tags {
  a {
    background-color: #eee;
    color: #515c6a;
    text-transform: uppercase;
    transition: all 0.5s;

    &:hover {
      background-color: $primary-color;
      color: #fff;
    }
  }
}
</style>
