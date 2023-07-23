<script lang="ts" setup>
const { data } = await useAsyncData('/', () => queryContent('/').findOne());

const socials = computed(() => data?.value?.socials || []);
</script>

<template>
  <div class="social">
    <v-btn
      v-for="(social, index) of socials"
      :key="index"
      icon
      small
      flat
      color="transparent"
      :href="social.link"
      rel="noreferrer"
      class="social__btn"
      target="_blank"
    >
      <v-icon :class="{ social__icon: true, ['social__icon--' + social.type]: true }"
        >mdi-{{ social.type }}</v-icon
      >
    </v-btn>
  </div>
</template>
