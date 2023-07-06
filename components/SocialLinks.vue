<script lang="ts" setup>
const { data: settings } = await useAsyncData('/', () => queryContent('/').findOne());
</script>

<template>
  <div>
    <v-btn
      v-for="(social, index) of settings.socials"
      :key="index"
      icon
      small
      flat
      color="transparent"
      :href="social.link"
      rel="noreferrer"
      class="social-btn"
      target="_blank"
    >
      <v-icon class="social-icon" :class="{ ['social-' + social.type]: true }"
        >mdi-{{ social.type }}</v-icon
      >
    </v-btn>
  </div>
</template>
