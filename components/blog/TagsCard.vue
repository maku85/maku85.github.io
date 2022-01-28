<template>
  <v-card>
    <v-card-title> Tags </v-card-title>

    <v-card-text class="tags">
      <v-btn
        v-for="tag of tags.split(',')"
        :key="tag"
        text
        :to="localePath(`/notes?category=${tag.trim()}`)"
        class="tag mr-2 mb-2"
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
      type: [String],
      default: () => '',
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
