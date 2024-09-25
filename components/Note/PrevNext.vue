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
  <v-container>
    <v-row>
      <v-col v-if="prev?.title" cols="12" xs="12">
        <NuxtLink :to="'/notes' + prev?._path">
          <div class="uppercase text-emerald-600 flex items-center">
            <v-icon>mdi-arrow-left</v-icon>
            <span>Previous article</span>
          </div>
          <div class="font-semibold text-3xl">{{ prev?.title }}</div>
        </NuxtLink>
      </v-col>
      <v-col v-if="next?.title" cols="12" xs="12">
        <NuxtLink :to="'/notes' + next._path">
          <div class="uppercase text-emerald-600 flex items-center justify-end">
            Next article <v-icon icon="mdi-arrow-right" />
          </div>
          <div class="font-semibold text-3xl text-end">{{ next.title }}</div>
        </NuxtLink>
      </v-col>
    </v-row>
  </v-container>
</template>
