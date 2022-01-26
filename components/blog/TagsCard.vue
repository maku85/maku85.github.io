<template>
  <v-card class="mb-8">
    <v-card-title> Tags </v-card-title>

    <v-card-text class="tags">
      <v-btn
        text
        v-for="tag of tags.split(',')"
        :key="tag"
        :to="localePath(`/notes?category=${tag.trim()}`)"
        class="tag"
        >#{{ tag.trim() }}</v-btn
      >
    </v-card-text>
  </v-card>
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
    transition: all 1s;

    &:hover {
      background-color: $primary-color;
      color: #fff;
    }
  }
}
</style>
