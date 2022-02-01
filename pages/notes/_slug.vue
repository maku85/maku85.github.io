<!-- eslint-disable vue/no-v-html -->
<template>
  <v-container class="section">
    <v-row>
      <v-col cols="12" sm="12" md="8">
        <v-card class="mb-4">
          <v-img
            class="article-image-container"
            :lazy-src="article.img || 'https://source.unsplash.com/random'"
            :src="article.img || 'https://source.unsplash.com/random'"
          >
            <div class="image-overlay">
              <div class="d-flex flex-column article-image-caption white--text px-6 py-4">
                <v-spacer></v-spacer>
                <div class="article-title display-1 pb-4">{{ article.title }}</div>
                <p class="article-preview">{{ article.description }}</p>
              </div>
            </div>
          </v-img>
          <div
            v-if="article.credits"
            class="text-center caption pt-2 text--secondary"
            v-html="article.credits"
          ></div>

          <v-card-text class="article-content">
            <nuxt-content :document="article" />

            <div class="article-footer text-center">
              <strong>{{ $t('Last update') }}:</strong>
              {{ formatDate(article.updatedAt) }}
            </div>
          </v-card-text>
        </v-card>

        <v-card v-if="prev || next" class="card blog-post-footer">
          <BlogPrevNext :prev="prev" :next="next" class="mt-4" />
        </v-card>
      </v-col>

      <v-col cols="12" sm="12" md="4">
        <aside>
          <BlogToc v-if="article.toc.length" class="mb-4" :links="article.toc" />
          <BlogTagsCard v-if="article.tags.length" class="mb-4" :tags="article.tags" />
          <BlogRecentPosts v-if="recentArticles.length" :articles="recentArticles" />
        </aside>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  async asyncData({ $content, params, i18n }) {
    const article = await $content(`${i18n.locale}/articles`, params.slug).fetch();
    const [prev, next] = await $content(`${i18n.locale}/articles`)
      .only(['title', 'slug'])
      .where({ published: true })
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch();
    const articles = await $content(`${i18n.locale}/articles`)
      .only(['title', 'description', 'updatedAt', 'img', 'slug'])
      .where({ published: true })
      .sortBy('updatedAt', 'desc')
      .fetch();
    const recentArticles = articles.filter((item) => item.title !== article.title);
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
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: article.title },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://www.maurocunsolo.com' + article.img,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: article.description,
        },
        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: article.title,
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content: 'https://www.maurocunsolo.com' + article.img,
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

<style lang="scss">
.article-image-container {
  position: relative;

  .image-overlay {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 29%,
      rgba(0, 0, 0, 0.55) 100%
    );

    .article-image-caption {
      height: 100%;
    }
  }
}

.article-content {
  color: $font-color;
}

.nuxt-content-container {
  overflow: hidden;

  .nuxt-content {
    h1 {
      margin-top: -1.5rem;
      margin-bottom: 1rem;
    }

    h2 {
      padding-bottom: 0.3rem;
      margin-top: -3.5rem;
      padding-top: 5rem;
    }

    h3 {
      margin-top: -3.5rem;
      padding-top: 5rem;
      margin-bottom: 0;
    }

    h4 {
      margin-top: -3.5rem;
      padding-top: 5rem;
      margin-bottom: 0;
    }

    h5 {
      margin-top: -3.5rem;
      padding-top: 5rem;
      margin-bottom: 0;
    }

    p {
      margin-top: 1em;
      margin-bottom: 1em;
      font-size: $font-size;
    }

    ul {
      list-style: disc !important;
    }

    img {
      border-radius: 5px;
      margin-bottom: 20px;
    }

    strong {
      font-weight: bold;
    }

    blockquote {
      background: #f9f9f9;
      border-left: 10px solid #ccc;
      margin: 1.5em 10px;
      padding: 1em 10px;
      quotes: '\201C''\201D''\2018''\2019';

      p {
        margin: 0;
      }
    }

    .nuxt-content-highlight {
      margin-bottom: 2em;
      margin-top: 2em;
    }
  }
}

.article-footer {
  opacity: 0.8;
}
</style>
