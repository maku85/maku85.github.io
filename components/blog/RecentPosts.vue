<template>
  <div class="card">
    <h5>{{ $t("Recent posts") }}</h5>
    <div class="recent-posts mt-3">
      <NuxtLink
        class="d-flex flex-row mb-3"
        v-for="article of articles"
        :key="article.id"
        :to="localePath(`/blog/${article.slug}`)"
      >
        <div>
          <v-img
            height="60"
            width="60"
            class="article-image-preview"
            :src="article.img || 'https://source.unsplash.com/random'"
          ></v-img>
        </div>
        <div class="ml-2">
          <h6>{{ article.title }}</h6>
          <p>{{ formatDate(article.date) }}</p>
        </div>
      </NuxtLink>
    </div>
  </div>
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
      const options = { year: "numeric", month: "long", day: "numeric" };
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
    color: $title-color;
  }
  p {
    margin-top: 5px;
    font-size: 14px;
    color: $font-color;
    opacity: 0.8;
  }
  .article-image-preview {
    border-radius: 5px;
  }
}
</style>
