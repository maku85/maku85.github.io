<template>
  <div class="social-links">
    <div>Share:</div>
    <ShareNetwork
      network="facebook"
      :url="getArticleUrl"
      :title="article.title"
      :description="article.description"
      :hashtags="article.tags"
    >
      <v-icon>mdi-facebook</v-icon>
    </ShareNetwork>
    <ShareNetwork
      network="twitter"
      :url="getArticleUrl"
      :title="article.title"
      :hashtags="article.tags"
    >
      <v-icon>mdi-twitter</v-icon>
    </ShareNetwork>
    <ShareNetwork network="linkedin" :url="getArticleUrl">
      <v-icon>mdi-linkedin</v-icon>
    </ShareNetwork>
    <ShareNetwork
      network="telegram"
      :url="getArticleUrl"
      :title="article.title"
      :description="article.description"
    >
      <v-icon>mdi-telegram</v-icon>
    </ShareNetwork>
    <ShareNetwork
      network="whatsapp"
      :url="getArticleUrl"
      :title="article.title"
      :description="article.description"
    >
      <v-icon>mdi-whatsapp</v-icon>
    </ShareNetwork>
  </div>
</template>

<script>
export default {
  props: {
    article: { type: Object, default: () => {} },
  },
  computed: {
    getArticleUrl() {
      return `${process.env.hostname}${this.$route.fullPath}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.social-links {
  ul {
    padding-left: 0;
    list-style: none;
  }
  li {
    display: inline-block;
    margin-right: 5px;
  }
}
.mdi-facebook {
  color: $social-facebook;
}
.mdi-twitter {
  color: $social-twitter;
}
.mdi-linkedin {
  color: $social-linkedin;
}
.mdi-telegram {
  color: $social-telegram;
}
.mdi-whatsapp {
  color: $social-whatsapp;
}
</style>
