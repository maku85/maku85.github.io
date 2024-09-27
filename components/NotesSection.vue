<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types';

const query: QueryBuilderParams = {
  path: '/en/articles',
  where: [{ published: true }],
  limit: 6,
  sort: [{ date: -1 }],
};
</script>

<template>
  <PageSection>
    <PageTitle text="Latest notes" subtitle=" Articles and Advice" />

    <ContentList v-slot="{ list }" :query="query">
      <div class="columns-1 md:columns-3 xl:columns-4 gap-6 space-y-6">
        <div
          v-for="article in list"
          :key="article._path"
          class="shadow-[5px_5px_rgb(0_0_0/20%)]"
        >
          <NuxtLink :to="'/notes' + article._path">
            <div
              class="px-2 py-4 relative after:bg-white after:absolute after:bottom-0 after:left-0 after:w-full after:top-0 after:border-2 after:border-gray-100 after:z-[-99] after:opacity-35 rounded-md"
            >
              <div class="px-8 py-10">
                <h1 class="font-mono text-3xl font-bold pb-6">
                  {{ article.title }}
                </h1>
                <p class="font-mono text-gray-800">{{ article.description }}</p>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>

      <div class="text-center mt-4">
        <v-btn :to="'/notes'" variant="outlined" color="primary"
          ><span>View notes</span></v-btn
        >
      </div>
    </ContentList>
  </PageSection>
</template>
