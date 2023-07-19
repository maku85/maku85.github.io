<script setup lang="ts">
import { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

const route = useRoute();
const category = route.query.category

let page = 0;
const limit = 5;
const query = { published: true };
if (category) Object.assign(query, { tags: category })
console.log({query})
const total = (await queryContent('en/articles').only([]).where(query).find()).length
const { data: articles, refresh } = await useAsyncData('posts', () =>
  queryContent('en/articles').where(query).sort({date: -1}).skip(page).limit(limit).find())

const recentPosts: QueryBuilderParams = { path: '/en/articles', where: [query], limit: 15, sort: [{ date: -1 }] }

const { data: settings } = await useAsyncData('/', () => queryContent('/').findOne());

// methods
function refetch(pageNumber: number) {
  page += pageNumber;
  refresh()
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
</script>

<template>
  <PageSection id="notes">
    <PageTitle text="Notes" subtitle=" Articles and Advice" />

    <v-container class="notes-container">
      <v-row>
        <v-col cols="12" md="12" lg="8" class="articles-list-wrapper mt-5">
          <div class="article-list mb-5">
            <div class="article-wrapper" v-for="article in articles" :key="article.id">
              <blog-list-post-item :post="article" />
            </div>
          </div>

          <div class="pager d-flex justify-center" align-center>
            <v-btn v-if="page > 0" color="#29a587" @click="refetch(-5)" variant="flat" theme="dark">prev</v-btn>
            <span class="ml-5"></span>
            <v-btn v-if="page + limit < total" color="#29a587" @click="refetch(5)" variant="flat" theme="dark">next</v-btn>
          </div>
        </v-col>

        <v-col>
          <div class="sidebar">
            <aside>
              <section>
                <h2 class="heading">Recent Posts</h2>
                <ul class="wp-block-latest-posts__list wp-block-latest-posts">
                  <ContentList :query="recentPosts" v-slot="{ list }">
                    <li v-for="article of list" :key="article._path">
                      <NuxtLink :to="'/notes' + article._path">
                        {{article.title}}
                      </NuxtLink>
                    </li>
                  </ContentList>
                </ul>
              </section>
              <section>
                <h2 class="heading">Categories</h2>
                <ul class="wp-block-latest-posts__list wp-block-latest-posts">
                  <li v-for="category of settings?.notes?.categories" :key="category.path">
                    <NuxtLink :to="'/notes/categories/' + category.path">
                      {{ category.title }}
                    </NuxtLink>
                  </li>
                </ul>
              </section>
            </aside>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </PageSection>
</template>

<style lang="scss" scoped>
@import '../assets/sass/variables';
  .notes-container{
    padding: 0;

    .article-wrapper {
      margin: 0 0 70px;
    }
  }

.sidebar {
  border-left: 1px solid #999;

  section {
    margin-bottom: 0;
    padding: 25px 0 25px 50px;

    h2 {
      margin-top: 0;
      margin-bottom: 50px;
      padding: 0;
      position: relative;
      font-size: 18px;
      text-transform: uppercase;

      &:before {
        content: '';
        position: absolute;
        left: 0;
        bottom: -20px;
        width: 30px;
        height: 4px;
        background: #29a587;
      }
    }

    ul {
      padding-left: 0;

      li {
        margin-bottom: 15px;
        color: #000;

        a {
          font-weight: 400;
        }
      }
    }
  }
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .notes-container{
    .article-wrapper {
      margin: 0 0 30px;
    }
  }
}
</style>
