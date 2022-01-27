<template>
  <v-card>
    <v-card-text>
      <v-row>
        <v-col cols="12" sm="6">
          <v-list-item
            v-if="prev"
            :to="localePath({ name: 'notes-slug', params: { slug: prev.slug } })"
            class="blog-nav"
          >
            <span>{{ $t('Previous') }}</span>
            <p>{{ prev.title }}</p>
          </v-list-item>
        </v-col>

        <v-col cols="12" sm="6">
          <v-list-item
            v-if="next"
            :to="localePath({ name: 'notes-slug', params: { slug: next.slug } })"
            class="blog-nav text-right"
          >
            <span>{{ $t('Next') }}</span>
            <p>{{ next.title }}</p>
          </v-list-item>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null,
    },
    next: {
      type: Object,
      default: () => null,
    },
  },
};
</script>

<style lang="scss">
.blog-nav {
  padding: 10px;
  transition: all 0.125s ease-in-out 0s;
  display: block;

  span {
    display: block;
    color: $font-color;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 0.17em;
  }

  p {
    font-size: 16px;
    color: $title-color;
    margin: 0;
    font-weight: 600;
  }
}
</style>
