<script lang="ts" setup>
const route = useRoute();
const { lang, slug } = route.params;
const { data } = await useAsyncData(`article-${slug}`, async () => {
  const article = queryContent(lang as string, 'articles')
    .where({ _path: `/${lang}/articles/${slug}` })
    .findOne();

  const surround = queryContent()
    .only(['_path', 'title', 'description'])
    .sort({ date: 1 })
    .findSurround(`/${lang}/articles/${slug}`);
  return {
    article: await article,
    surround: await surround,
  };
});
const article = data?.value?.article;
const [prev, next] = data?.value?.surround || [];

useSeoMeta({
  title: article?.title,
  ogTitle: article?.title,
  description: article?.description,
  ogDescription: article?.description,
  ogImage: `https://site.com/${article?.img}`,
});
</script>

<template>
  <v-container id="article" fluid>
    <ContentRenderer :value="article">
      <template #empty>
        <p>No content found.</p>
      </template>

      <div class="article__header">
        <div class="article__titles">
          <div v-if="article?.tags.length" class="article__categories_container">
            <NuxtLink
              v-for="(tag, index) of article.tags"
              :key="tag"
              class="article__category"
              :to="'/notes/categories/' + tag"
            >
              #{{ tag.toUpperCase() }}{{ index < article.tags.length - 1 ? ',' : '' }}&nbsp
            </NuxtLink>
          </div>
          <h1 class="article__title">{{ article?.title }}</h1>

          <ContentRendererMarkdown class="article__description" :value="article?.excerpt" />
        </div>
      </div>

      <div class="article__image_container">
        <v-responsive class="article__image_wrapper">
          <v-parallax
            class="article__image"
            height="740"
            :lazy-src="article?.img || 'https://source.unsplash.com/random'"
            :src="article?.img || 'https://source.unsplash.com/random'"
          ></v-parallax>
        </v-responsive>

        <div v-if="article?.credits" class="article__image__credits" v-html="article.credits"></div>
      </div>

      <v-row class="article__container">
        <v-col cols="12" sm="12">
          <v-row>
            <v-col
              v-if="article?.body?.toc?.links.length"
              cols="12"
              sm="3"
              class="order-first order-md-last"
            >
              <note-article-toc class="toc pl-4 pb-4" :links="article?.body?.toc?.links" />
            </v-col>

            <v-col cols="12" sm="9" class="order-last order-md-first">
              <ContentRendererMarkdown class="article__content" :value="article || {}" />

              <div
                v-if="article?.tags.length"
                class="article__categories_container d-flex flex-wrap"
              >
                <span class="article__categories_label">Tags:</span>
                <NuxtLink
                  v-for="tag of article.tags"
                  :key="tag"
                  class="article__category"
                  :to="'/notes/categories/' + tag"
                >
                  {{ tag }}
                </NuxtLink>
              </div>

              <div class="line-left line-top">
                <div class="line-block">
                  <span></span>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <div class="articles__navigation">
        <v-container>
          <note-prev-next :prev="prev" :next="next" />
        </v-container>
      </div>
    </ContentRenderer>
  </v-container>
</template>
