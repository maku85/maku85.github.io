<template>
  <v-card>
    <v-card-title>Contents</v-card-title>
    <v-card-text>
      <v-list class="toc-list">
        <v-list-item
          v-for="link of links"
          :key="link.id"
          :to="`#${link.id}`"
          :class="{
            'mt-2': link.depth !== 3,
          }"
        >
          <v-list-item-content>
            <v-list-item-title
              :class="{
                'pl-4': link.depth === 3,
                'font-weight-bold': link.depth !== 3,
              }"
            >
              {{ link.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'TocComponent',
  props: {
    links: {
      type: [Object],
      default: () => {},
    },
  },
  data() {
    return {
      currentlyActiveToc: '',
      observer: null,
      observerOptions: {
        root: this.$refs.nuxtContent,
        threshold: 0,
      },
    };
  },
  mounted() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id');
        if (entry.isIntersecting) {
          this.currentlyActiveToc = id;
        }
      });
    }, this.observerOptions);

    // Track all sections that have an `id` applied
    document.querySelectorAll('.nuxt-content h2[id], .nuxt-content h3[id]').forEach((section) => {
      this.observer.observe(section);
    });
  },
  beforeDestroy() {
    this.observer.disconnect();
  },
  methods: {
    tableOfContentsHeadingClick(link) {
      this.currentlyActiveToc = link.id;
    },
  },
};
</script>

<style lang="scss">
.v-card__title {
  padding-bottom: 0;
}
.toc-list {
  .v-list-item--active {
    color: $primary-color;
    font-style: italic;
  }

  .v-list-item {
    min-height: 16px;

    .v-list-item__content {
      padding: 5px 0 !important;
    }
  }
}
</style>
