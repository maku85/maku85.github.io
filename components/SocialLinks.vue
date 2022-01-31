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
      class="mr-1"
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
