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
  <div class="container mx-auto px-4 py-6 flex flex-col md:flex-row gap-8">
    <div v-if="prev?.title">
      <NuxtLink :to="'/notes' + prev?._path">
        <div class="uppercase text-emerald-600 flex items-center">
          <i class="mdi mdi-arrow-left"></i>
          <span>Previous article</span>
        </div>
        <div class="font-semibold text-3xl">{{ prev?.title }}</div>
      </NuxtLink>
    </div>
    <div v-if="next?.title" class="grow">
      <NuxtLink :to="'/notes' + next._path">
        <div class="uppercase text-emerald-600 flex items-center justify-end">
          Next article <i class="mdi mdi-arrow-right"></i>
        </div>
        <div class="font-semibold text-3xl text-end">{{ next.title }}</div>
      </NuxtLink>
    </div>
  </div>
</template>
