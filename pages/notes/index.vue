<template>
  <v-container class="notes-page">
    <v-row class="mt-4 mb-4">
      <v-col>
        <blog-search @searchResults="refreshData" />
      </v-col>
    </v-row>

    <v-row v-if="filter" class="mt-2 mb-10">
      <v-col>
        <span class="filter">
          <v-chip label close @click:close="reset">{{ filter }}</v-chip>
        </span>
      </v-col>
    </v-row>

    <v-row v-if="!articles || articles.length === 0" class="text-center">
      <v-col>{{ $t('no-notes') }}</v-col>
    </v-row>

    <v-row v-if="articles && articles.length > 0" class="mt-8">
      <v-col v-for="article of articles" :key="article.id" cols="12" xs="12" sm="6" md="4">
        <BlogVPostPreview :post="article" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'NotesPage',
  data() {
    return { filter: '', articles: [] };
  },
  fetch() {
    const filters = {};
    const query = this.$route.query;
    if (query.category) {
      Object.assign(filters, { tags: { $containsAny: [query.category] } });
      this.filter = query.category;
    }
    this.retrieveData(filters);
  },

  head() {
    return {
      title: 'Mauro Cunsolo | Notes',
    };
  },
  methods: {
    async retrieveData(filters) {
      Object.assign(filters, { published: true });
      this.articles = await this.$content(`${this.$i18n.locale}/articles`)
        .only(['date', 'title', 'description', 'img', 'tags', 'slug'])
        .where(filters)
        .sortBy('createdAt', 'desc')
        .fetch();
    },
    refreshData(data) {
      this.articles = data;
    },
    async reset() {
      this.$router.push(this.localePath({ name: 'notes' }));
      this.filter = '';
      await this.retrieveData();
    },
  },
};
</script>

<style lang="scss">
.notes-page {
  margin-top: 40px;

  .filter {
    .close-btn {
      margin-right: 2px;
      cursor: pointer;
    }
  }
}
</style>
