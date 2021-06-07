<template>
  <section class="mt-5">
    <div class="mt-5 mb-4 text-center">
      <h2>{{ $t("My blog") }}</h2>
    </div>

    <div class="pb-4">
      <BlogSearch @searchResults="refreshData" />

      <div v-if="filter" class="mt-2">
        <span class="filter">
          <v-chip label close @click:close="reset">{{ filter }}</v-chip>
        </span>
      </div>
    </div>

    <div class="mt-5">
      <v-row v-if="!articles || articles.length === 0" class="text-center">
        <v-col>{{ $t("no-posts") }}</v-col>
      </v-row>

      <v-row v-i="articles && articles.length > 0">
        <v-col
          cols="12"
          xs="12"
          sm="6"
          md="4"
          v-for="article of articles"
          :key="article.id"
        >
          <BlogVPostPreview :post="article" />
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script>
export default {
  fetch() {
    const filters = {};
    const query = this.$route.query;
    if (query.category) {
      Object.assign(filters, { tags: { $containsAny: [query.category] } });
      this.filter = query.category;
    }
    this.retrieveData(filters);
  },
  data() {
    return { filter: "", articles: [] };
  },
  methods: {
    async retrieveData(filters) {
      Object.assign(filters, { published: true });
      this.articles = await this.$content(`${this.$i18n.locale}/articles`)
        .only(["date", "title", "description", "img", "tags", "slug"])
        .where(filters)
        .sortBy("date", "desc")
        .fetch();
    },
    refreshData(data) {
      this.articles = data;
    },
    async reset() {
      this.$router.push(this.localePath({ name: "blog" }));
      this.filter = "";
      await this.retrieveData();
    },
  },
  head() {
    return {
      title: "Mauro Cunsolo | Blog",
    };
  },
};
</script>

<style lang="scss">
.filter {
  background-color: #f2f2f2;
  padding: 12px 10px;
  border-radius: 4px;

  .close-btn {
    margin-right: 2px;
    cursor: pointer;
  }
}
</style>
