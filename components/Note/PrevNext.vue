<script setup>
defineProps({
  prev: {
    type: Object,
    required: false,
    default: () => {},
  },
  next: {
    type: Object,
    required: false,
    default: () => {},
  },
});
</script>

<template>
  <v-row>
    <v-col v-if="prev?.title" cols="12" xs="12" class="item item--prev">
      <NuxtLink :to="'/notes' + prev?._path">
        <div class="item__label"><v-icon>mdi-arrow-left</v-icon> Previous article</div>
        <div class="item__title">{{ prev?.title }}</div>
      </NuxtLink>
    </v-col>
    <v-col v-if="next?.title" cols="12" xs="12" class="item item--next">
      <NuxtLink :to="'/notes' + next._path">
        <div class="item__label">Next article <v-icon>mdi-arrow-right</v-icon></div>
        <div class="item__title">{{ next.title }}</div>
      </NuxtLink>
    </v-col>
  </v-row>
</template>
