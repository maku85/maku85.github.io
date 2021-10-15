<template>
  <v-card class="card">
    <h5>{{ $t('Recent notes') }}</h5>
    <div class="recent-posts mt-3">
      <NuxtLink
        v-for="article of articles"
        :key="article.id"
        class="d-flex flex-row mb-3"
        :to="localePath(`/notes/${article.slug}`)"
      >
        <div>
          <h6>{{ article.title }}</h6>
          <p>
            <v-icon>mdi-calendar</v-icon> {{ formatDate(article.updatedAt) }}
          </p>
        </div>
      </NuxtLink>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    articles: {
      type: [],
      default: () => [],
    },
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
.recent-posts {
  h6 {
    font-size: 16px;
    font-weight: 700;
    color: var(--font-color);
  }
  p {
    margin-top: 5px;
    color: $font-color;
    opacity: 0.8;
  }
  .article-image-preview {
    border-radius: 5px;
  }
}
</style>
