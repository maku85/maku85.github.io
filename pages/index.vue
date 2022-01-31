<template>
  <v-container>
    <about-section :socials="socials" />

    <blog-section :articles="articles" />
  </v-container>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData({ $content, params, i18n }) {
    const { socials } = await $content('index').fetch();
    const articles = await $content(`${i18n.locale}/articles`, params.slug)
      .only(['title', 'description', 'img', 'tags', 'slug'])
      .where({ published: true })
      .sortBy('createdAt', 'desc')
      .limit(5)
      .fetch();
    return { socials, articles };
  },
};
</script>
