<script lang="ts" setup>
const route = useRoute();
const { lang, slug } = route.params;
const { data } = await useAsyncData(`article-${slug}`, async () => {
  const article = queryContent(lang as string, 'articles')
    .where({ _path: `/${lang}/articles/${slug}` })
    .findOne();

  const surround = queryContent()
    .only(['_path', 'title', 'description'])
    .sort({ title: 1 })
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
});
</script>

<template>
  <Page>
    <div class="flex flex-col lg:flex-row gap-10">
      <div class="lg:w-2/3">
        <div class="text-center mx-auto px-4">
          <h1
            class="font-mono text-gray-800 text-3xl lg:text-4xl xl:text-4xl my-8 mb-12"
          >
            {{ article?.title }}
          </h1>
        </div>

        <div
          v-if="article?.body?.toc?.links.length"
          class="lg:hidden mb-12 px-4"
        >
          <note-article-toc :links="article?.body?.toc?.links" />
        </div>

        <div
          class="px-6 py-10 relative after:bg-white after:absolute after:bottom-0 after:left-0 after:w-full after:top-0 after:border-2 after:border-gray-100 after:z-[-99] after:opacity-35 rounded-md shadow-[5px_5px_rgb(0_0_0/20%)]"
        >
          <ContentRendererMarkdown
            class="article__content font-mono text-gray-600"
            :value="article.body || {}"
          />

          <div
            v-if="article?.tags.length"
            class="mt-12 flex flex-wrap align-center gap-1"
          >
            <NuxtLink
              v-for="tag of article.tags"
              :key="tag"
              class="border-2 border-emerald-600 text-emerald-600 px-2 py-1"
              :to="'/notes/categories/' + tag"
            >
              {{ tag }}
            </NuxtLink>
          </div>

          <div class="line-left line-top">
            <div class="line-block absolute left-[-40px]">
              <span></span>
            </div>
          </div>
        </div>
      </div>

      <aside class="relative hidden lg:block min-w-[200px]">
        <div v-if="article?.body?.toc?.links.length" class="fixed">
          <note-article-toc
            class="toc pl-4 pb-4"
            :links="article?.body?.toc?.links"
          />
        </div>
      </aside>
    </div>

    <div class="border-t-2 border-gray-300 mt-8">
      <note-prev-next :prev="prev" :next="next" />
    </div>
  </Page>
</template>

<style lang="scss">
.article__content {
  @apply font-mono text-gray-800;

  h2 {
    @apply text-2xl mt-12 mb-6;

    a {
      @apply font-bold;
    }
  }

  h3 {
    @apply text-xl mt-12 mb-6;

    a {
      @apply font-semibold;
    }
  }

  p {
    @apply mt-4 mb-4;
  }

  b,
  strong {
    @apply font-bold;
  }

  em,
  code,
  italic {
    @apply italic text-gray-600 bg-gray-200 p-1;
  }

  ol {
    list-style: decimal;
    margin-top: 30px;
    margin-bottom: 30px;
    padding-left: 20px;
  }

  ol li {
    counter-increment: list-number;
    line-height: 1.7;
    margin-bottom: 0;
    margin-top: 0;
    min-height: 28px;
  }

  ul {
    list-style: disc;
    list-style-position: inside;
    margin-top: 30px;
    margin-bottom: 30px;
    padding-left: 20px;
  }

  ul li {
    line-height: 1.7;
  }

  ul ul,
  ol ol,
  ul ol,
  ol ul {
    margin-bottom: 15px;
    margin-left: 15px;
    margin-top: 15px;
  }

  pre {
    @apply mt-4 mb-6 rounded-md;
    display: flex;
    max-width: 100%;
    overflow: auto;
    white-space: pre;
  }

  pre code {
    @apply px-8 py-6 w-full bg-gray-900 font-mono;
    overflow: auto;
  }
}
</style>
