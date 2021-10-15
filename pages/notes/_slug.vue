<template>
  <v-container class="blog-detail">
    <v-row>
      <v-col class="mt-3 text-center">
        <h1>{{ article.title }}</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="12" md="8">
        <v-card class="card mb-4">
          <v-img
            :lazy-src="article.img || 'https://source.unsplash.com/random'"
            :src="article.img || 'https://source.unsplash.com/random'"
          ></v-img>

          <v-card-text class="post-content">
            <p>{{ article.description }}</p>
            <nuxt-content :document="article" />

            <div class="post-footer d-flex flex-wrap">
              <div class="date flex-grow-1 mt-2">
                <strong>{{ $t('Last update') }}:</strong>
                {{ formatDate(article.updatedAt) }}
              </div>

              <BlogShareLinks class="mt-2" :article="article" />
            </div>
          </v-card-text>
        </v-card>

        <v-card v-if="prev || next" class="card blog-post-footer">
          <BlogPrevNext :prev="prev" :next="next" class="mt-8" />
        </v-card>
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
      .only(['title', 'slug'])
      .where({ published: true })
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch();
    const articles = await $content(`${i18n.locale}/articles`)
      .only(['title', 'updatedAt', 'img', 'slug'])
      .where({ published: true })
      .sortBy('updatedAt', 'desc')
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
  head() {
    const article = this.article;

    return {
      title: `Mauro Cunsolo | ${article.title}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: article.description,
        },
        { hid: 'og:title', property: 'og:title', content: article.title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: article.description,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: article.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: article.description,
        },
      ],
    };
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString(this.$i18n.locale, options);
    },
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
