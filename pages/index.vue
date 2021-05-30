<template>
  <div class="profile-page sidebar-collapse">
    <TheAboutSection :socials="socials" />

    <TheBlogSection :articles="articles" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, i18n }) {
    const { socials } = await $content("index").fetch();
    const articles = await $content("articles", params.slug)
      .only(["title", "description", "img", "tags", "slug"])
      .where({ published: true, language: i18n.locale })
      .limit(6)
      .sortBy("date", "desc")
      .fetch();
    return { socials, articles };
  },
};
</script>
