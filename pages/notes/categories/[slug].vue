<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/types';

const route = useRoute();
const categoryParam = route.params.slug;

let page = 0;
const limit = 5;
const query = { published: true };
if (categoryParam) Object.assign(query, { tags: { $contains: categoryParam } });
const total = (await queryContent('en/articles').only([]).where(query).find()).length;
const { data: articles, refresh } = await useAsyncData('posts', () =>
  queryContent('en/articles').where(query).sort({ title: 1 }).skip(page).limit(limit).find(),
);

function refetch(pageNumber: number) {
  page += pageNumber;
  refresh();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
</script>

<template>
  <PageSection id="articles">
    <PageTitle
      :text="`'${categoryParam}' Notes`"
      subtitle=" Articles and Advice"
    />

    <div class="flex flex-col md:flex-row gap-10">
      <div>
        <div class="flex flex-col">
          <note-list-article-item
            v-for="article in articles"
            :key="article.id"
            :article="article"
          />
        </div>

        <div class="text-center mt-8">
          <button
            v-if="page > 0"
            class="uppercase bg-white py-2 px-4 rounded"
            @click="refetch(-5)"
          >
            prev
          </button>
          <span class="ml-5"></span>
          <button
            v-if="page + limit < total"
            class="uppercase bg-white py-2 px-4 rounded"
            @click="refetch(5)"
          >
            next
          </button>
        </div>
      </div>

      <div class="min-w-[300px]">
        <aside class="border-l-2 border-[rgba(0,0,0,.1)] pl-6">
          <note-list-categories />
          <note-list-random-notes />
        </aside>
      </div>
    </div>
  </PageSection>
</template>

<style lang="scss">
section li .router-link-exact-active {
  @apply font-bold text-emerald-600;
}
</style>
