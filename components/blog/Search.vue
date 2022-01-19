<template>
  <div>
    <input
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      :placeholder="$t('Search notes')"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
    };
  },
  watch: {
    async searchQuery(searchQuery) {
      const articles = await this.$content(`${this.$i18n.locale}/articles`)
        .limit(10)
        .where({ published: true })
        .search(searchQuery)
        .sortBy('createdAt', 'desc')
        .fetch();
      this.$emit('searchResults', articles);
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
input[type='search'] {
  outline: 0;
  width: 100%;
  height: 50px;
  border-color: var(--bg);
  background-color: var(--light-bg-color);
  padding: 0 1.6rem;
  border-radius: 0.2rem;
  appearance: none;
  transition: all 0.3s cubic-bezier(0, 0, 0.43, 1.49);
  transition-property: width, border-radius;
  z-index: 1;
  position: relative;
}
</style>
