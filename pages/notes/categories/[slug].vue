<script setup lang="ts">
import { QueryBuilderParams } from '@nuxt/content/dist/runtime/types';

const route = useRoute();
const category = route.params.slug;

let page = 0;
const limit = 5;
const query = { published: true };
if (category) Object.assign(query, { tags: { $contains: category } });
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

const { data: settings } = await useAsyncData('settings', () => queryContent('/').findOne());

// methods
function refetch(pageNumber: number) {
  page += pageNumber;
  refresh();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
</script>

<template>
  <PageSection id="articles">
    <PageTitle :text="category + ' Notes'" subtitle=" Articles and Advice" />

    <v-container>
      <v-row>
        <v-col cols="12" md="12" lg="8">
          <v-row v-for="article in articles" :key="article.id" class="articles__list mt-4 mb-8">
            <v-col>
              <blog-list-post-item :post="article" />
            </v-col>
          </v-row>

          <div class="articles__pager">
            <v-btn v-if="page > 0" class="articles__button" variant="flat" @click="refetch(-5)"
              >prev</v-btn
            >
            <span class="ml-5"></span>
            <v-btn
              v-if="page + limit < total"
              class="articles__button"
              variant="flat"
              @click="refetch(5)"
              >next</v-btn
            >
          </div>
        </v-col>

        <v-col md="12" lg="4">
          <div class="articles__sidebar">
            <aside>
              <section class="articles__section">
                <h2 class="articles__heading">Recent Posts</h2>
                <ContentList :query="recentPosts">
                  <template #not-found>
                    <p>No articles found.</p>
                  </template>

                  <template #default="{ list }">
                    <ul class="articles__items">
                      <li
                        v-for="article of list"
                        :key="article._path"
                        class="articles__item__wrapper"
                      >
                        <NuxtLink class="articles__item" :to="'/notes' + article._path">
                          {{ article.title }}
                        </NuxtLink>
                      </li>
                    </ul>
                  </template>
                </ContentList>
              </section>

              <section class="articles__section">
                <h2 class="articles__heading">Categories</h2>
                <ContentList :query="recentPosts">
                  <template #not-found>
                    <p>No categories found.</p>
                  </template>

                  <template #default="{ list }">
                    <ul class="articles__items">
                      <li
                        v-for="category of settings?.notes.categories"
                        :key="category.path"
                        class="articles__item__wrapper"
                      >
                        <NuxtLink class="articles__item" :to="'/notes/categories/' + category.path">
                          {{ category.title }}
                        </NuxtLink>
                      </li>
                    </ul>
                  </template>
                </ContentList>
              </section>
            </aside>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </PageSection>
</template>
