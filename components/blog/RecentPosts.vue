<template>
  <v-card>
    <v-card-title>{{ $t('Recent notes') }} </v-card-title>

    <v-card-text>
      <v-list-item
        v-for="article of articles"
        :key="article.id"
        :to="localePath(`/notes/${article.slug}`)"
        three-line
      >
        <v-list-item-content>
          <v-list-item-title>
            {{ article.title }}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ article.description }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    articles: {
      type: Array,
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
