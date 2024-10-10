<script lang="ts" setup>
const { data } = await useAsyncData('/', () => queryContent('/').findOne());
const categories = computed(() => data?.value?.notes?.categories || []);
</script>

<template>
  <section class="py-5">
    <h2 class="text-lg font-bold uppercase text-emerald-600 mb-4">
      Categories
    </h2>
    <ul>
      <li
        v-for="category of categories"
        :key="category.path"
        class="uppercase mb-1 hover:text-emerald-600"
      >
        <NuxtLink :to="'/notes/categories/' + category.path">
          #{{ category.title }}
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>
