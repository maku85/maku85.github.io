<template>
  <v-container class="blog-detail">
    <v-row>
      <v-col class="mb-4 text-center">
        <h2>{{ article.title }}</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="12" md="8">
        <div class="card mb-4">
          <v-img
            :src="article.img || 'https://source.unsplash.com/random'"
          ></v-img>

          <article class="post-content">
            <p>{{ article.description }}</p>
            <nuxt-content :document="article" />

            <div class="post-footer d-flex flex-wrap">
              <div class="date flex-grow-1 mt-2">
                <v-icon>mdi-calendar</v-icon>
                {{ formatDate(article.date || article.createdAt) }}
              </div>

              <BlogShareLinks class="mt-2" :article="article" />
            </div>
          </article>
        </div>

        <div v-if="prev || next" class="card blog-post-footer">
          <BlogPrevNext :prev="prev" :next="next" class="mt-8" />
        </div>
      </v-col>

      <v-col cols="12" sm="12" md="4">
        <BlogTagsCard v-if="article.tags.length" :tags="article.tags" />
        <BlogRecentPosts
          v-if="recentArticles.length"
          :articles="recentArticles"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  async asyncData({ $content, params, i18n }) {
    const article = await $content(
      `${i18n.locale}/articles`,
      params.slug
    ).fetch();
    const [prev, next] = await $content(`${i18n.locale}/articles`)
      .only(["title", "slug"])
      .where({ published: true })
      .sortBy("date", "asc")
      .surround(params.slug)
      .fetch();
    const articles = await $content(`${i18n.locale}/articles`)
      .only(["title", "date", "img", "slug"])
      .where({ published: true })
      .sortBy("date", "asc")
      .fetch();
    const recentArticles = articles.filter(
      (item) => item.title !== article.title
    );
    return {
      article,
      recentArticles,
      prev,
      next,
    };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString(this.$i18n.locale, options);
    },
  },
  head() {
    return {
      title: `Mauro Cunsolo | ${this.article.title}`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.article.description,
        },
        { hid: "og:title", property: "og:title", content: this.article.title },
        {
          hid: "og:description",
          property: "og:description",
          content: this.article.description,
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.article.title,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.article.description,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.blog-detail {
  margin-top: 50px;
  margin-bottom: 30px;
  position: relative;

  .card {
    background: var(--light-bg-color);

    .post-content {
      padding: 30px 10px;
      color: var(--font-color);
    }
  }
}

.post-footer {
  margin-top: 35px;
}
</style>
