<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/types';

const route = useRoute();
const categoryParam = route.query.category;

let page = 0;
const limit = 5;
const query = { published: true };
if (categoryParam) Object.assign(query, { tags: categoryParam });
const total = (await queryContent('en/articles').only([]).where(query).find()).length;
const { data: articles, refresh } = await useAsyncData('posts', () =>
  queryContent('en/articles').where(query).sort({ date: -1 }).skip(page).limit(limit).find(),
);

const recentPosts: QueryBuilderParams = {
  path: '/en/articles',
  where: [query],
  limit: 15,
  sort: [{ date: -1 }],
};

const { data } = await useAsyncData('/', () => queryContent('/').findOne());
const categories = computed(() => data?.value?.notes.categories || []);

function refetch(pageNumber: number) {
  page += pageNumber;
  refresh();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
</script>

<template>
  <PageSection>
    <PageTitle text="Notes" subtitle=" Articles and Advice" />

    <div class="container flex flex-col md:flex-row px-4 gap-8">
      <div>
        <div class="flex flex-col gap-4">
          <note-list-article-item
            v-for="article in articles"
            :key="article.id"
            :article="article"
          />
        </div>

        <div class="text-center mt-8">
          <button
            v-if="page > 0"
            class="bg-white py-2 px-4 rounded"
            @click="refetch(-5)"
          >
            prev
          </button>
          <span class="ml-5"></span>
          <button
            v-if="page + limit < total"
            class="bg-white py-2 px-4 rounded"
            variant="flat"
            @click="refetch(5)"
          >
            next
          </button>
        </div>
      </div>

      <div class="min-w-[300px]">
        <aside class="border-l-2 border-[rgba(0,0,0,.1)] pl-4">
          <section class="pb-10">
            <h2 class="uppercase text-emerald-600 mb-4">Recent Posts</h2>
            <ContentList :query="recentPosts">
              <template #not-found>
                <p>No articles found.</p>
              </template>

              <template #default="{ list }">
                <ul>
                  <li v-for="article of list" :key="article._path">
                    <NuxtLink :to="'/notes' + article._path">
                      {{ article.title }}
                    </NuxtLink>
                  </li>
                </ul>
              </template>
            </ContentList>
          </section>

          <section class="pb-10">
            <h2 class="uppercase text-emerald-600">Categories</h2>
            <ContentList :query="recentPosts">
              <template #not-found>
                <p>No categories found.</p>
              </template>

              <template #default>
                <ul class="mt-4">
                  <li
                    v-for="category of categories"
                    :key="category.path"
                    class="uppercase"
                  >
                    <NuxtLink :to="'/notes/categories/' + category.path">
                      {{ category.title }}
                    </NuxtLink>
                  </li>
                </ul>
              </template>
            </ContentList>
          </section>
        </aside>
      </div>
    </div>
  </PageSection>
</template>
