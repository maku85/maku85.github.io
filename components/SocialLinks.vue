<template>
  <div>
    <v-btn
      v-for="(social, index) of links"
      :key="index"
      icon
      fab
      small
      :href="social.link"
      rel="noreferrer"
      class="mr-1 social-btn"
      target="_blank"
      :aria-label="social.type"
    >
      <v-icon class="social-icon" :class="{ ['social-' + social.type]: true }"
        >mdi-{{ social.type }}</v-icon
      >
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    links: { type: Array, default: () => [] },
  },
};
</script>

<style lang="scss" scoped>
.social-btn {
  &:hover::before {
    background: none !important;
  }

  .social-icon {
    transition: all 0.5s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: $hover-shadow;
    }
  }
}
</style>
