<template>
  <v-container id="blog" class="section section-blog">
    <div class="section-blog__title">{{ $t('Latest notes') }}</div>

    <div v-if="articles.length === 0" class="mt-4">
      <div class="text-center font-weight-light">{{ $t('no-notes') }}</div>
    </div>

    <div v-if="articles.length > 0" class="mt-4">
      <div v-for="article of articles" :key="article.id">
        <BlogHPostPreview :post="article" />
      </div>

      <div class="text-center">
        <v-btn class="blog-btn" :to="localePath('/notes')" aria-label="Notes">
          {{ $t('Go to notes') }}
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  props: { articles: { type: Array, default: () => [] } },
};
</script>

<style lang="scss">
.section-blog__title {
  color: var(--title-color);

  &:after {
    content: '';
    width: 120px;
    height: 1px;
    background: var(--primary-color);
    display: block;
    margin-top: 8px;
  }
}

.post-content {
  width: 100%;
}

.blog-btn {
  background-color: var(--primary-color) !important;
  color: #fff !important;
}
</style>
