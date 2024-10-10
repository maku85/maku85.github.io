<script lang="ts" setup>
const { data } = await useAsyncData('notes', () =>
  queryContent('en/articles').where({ published: true }).find(),
);
const randomNotes = computed(() =>
  (data?.value || []).sort(() => 0.5 - Math.random()).slice(0, 10),
);
</script>

<template>
  <section class="py-5">
    <h2 class="text-lg font-bold uppercase text-emerald-600 mb-4">
      Other Notes
    </h2>
    <ul>
      <li
        v-for="article of randomNotes"
        :key="article._path"
        class="mb-1 hover:text-emerald-600"
      >
        <NuxtLink :to="'/notes' + article._path">
          <h5>- {{ article.title }}</h5>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>
