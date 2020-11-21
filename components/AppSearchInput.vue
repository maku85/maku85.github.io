<template>
  <div>
    <input
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      placeholder="Search Articles"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchQuery: ''
    }
  },
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.articles = []
        return
      }
      const articles = await this.$content('articles')
        .limit(6)
        .search(searchQuery)
        .fetch()
      this.$emit('searchResults', articles)
    }
  }
}
</script>

<style lang="scss" scoped>
input {
  height: 5rem;
  border: 0;
  color: #2f2f2f;
  font-size: 1.8rem;
}
input[type='search'] {
  outline: 0; // <-- shold probably remove this for better accessibility, adding for demo aesthetics for now.
  width: 100%;
  background: #fff;
  padding: 0 1.6rem;
  border-radius: 0.7rem;
  appearance: none; //for iOS input[type="search"] roundedness issue. border-radius alone doesn't work
  transition: all 0.3s cubic-bezier(0, 0, 0.43, 1.49);
  transition-property: width, border-radius;
  z-index: 1;
  position: relative;
}
</style>
