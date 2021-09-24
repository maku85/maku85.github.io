<template>
  <section id="blog" class="section section-blog">
    <div class="container">
      <div class="section-blog__title">{{ $t("Latest notes") }}</div>

      <div v-if="articles.length === 0" class="mt-4">
        <div class="text-center font-weight-light">{{ $t("no-notes") }}</div>
      </div>

      <div v-if="articles.length > 0" class="mt-4">
        <div v-for="article of articles" :key="article.id">
          <BlogHPostPreview :post="article" />
        </div>

        <div class="text-center">
          <NuxtLink class="btn" :to="localePath('/notes')">
            go to notes <fa icon="chevron-right"></fa
          ></NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: { articles: { type: Array, default: () => [] } },
};
</script>

<style lang="scss">
.section-blog__title {
  color: var(--title-color);
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.17em;
  position: relative;
  margin-bottom: 30px;

  &:after {
    content: "";
    width: 68px;
    height: 1px;
    background: var(--primary-color);
    display: block;
    margin-top: 8px;
  }
}
</style>
