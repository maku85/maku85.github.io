<template>
  <div>
    <input
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      :placeholder="$t('Search posts')"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
    };
  },
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery || searchQuery.length < 3) return;

      const articles = await this.$content("articles")
        .limit(10)
        .where({ published: true, language: this.$i18n.locale })
        .search(searchQuery)
        .fetch();
      this.$emit("searchResults", articles);
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  height: 2rem;
  border: 0;
  border: 1px solid #eee;
}
input[type="search"] {
  outline: 0;
  width: 100%;
  background: #fff;
  padding: 0 1.6rem;
  border-radius: 0.7rem;
  appearance: none;
  transition: all 0.3s cubic-bezier(0, 0, 0.43, 1.49);
  transition-property: width, border-radius;
  z-index: 1;
  position: relative;
}
</style>
