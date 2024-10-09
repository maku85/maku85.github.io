<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types';

const query: QueryBuilderParams = {
  path: '/en/articles',
  where: [{ published: true }],
  limit: 9,
  sort: [{ title: 1 }],
};
</script>

<template>
  <PageSection>
    <PageTitle text="Latest notes" subtitle=" Articles and Advice" />

    <ContentList v-slot="{ list }" :query="query">
      <div class="masonry">
        <div
          v-for="article in list"
          :key="article._path"
          class="masonry-item relative after:bg-white after:absolute after:bottom-0 after:left-0 after:w-full after:top-0 after:border-2 after:border-gray-200 after:rounded-sm after:z-[-99] after:opacity-35 shadow-[5px_5px_rgb(0_0_0/20%)]"
        >
          <NuxtLink :to="'/notes' + article._path">
            <div class="px-8 py-12">
              <h2 class="font-mono text-2xl font-bold mb-6">
                {{ article.title }}
              </h2>
              <p class="font-mono text-gray-600">{{ article.description }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>

      <div class="text-center mt-8">
        <NuxtLink to="/notes">
          <button
            class="rounded py-2 px-4 text-emerald-600 border-solid border-2 border-emerald-600 hover:bg-emerald-600 hover:text-white"
          >
            <span>View all notes</span>
          </button>
        </NuxtLink>
      </div>
    </ContentList>
  </PageSection>
</template>

<style lang="scss">
.masonry {
  column-count: 3;
  column-gap: 16px;
}

@media (max-width: 1024px) {
  .masonry {
    column-count: 2;
  }
}

@media (max-width: 768px) {
  .masonry {
    column-count: 1;
  }
}

.masonry-item {
  break-inside: avoid;
  margin-bottom: 16px;
}
</style>
