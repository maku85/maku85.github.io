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
});
</script>

<template>
  <div class="w-full">
    <ContentRenderer :value="article">
      <template #empty>
        <p>No content found.</p>
      </template>

      <div
        class="mx-auto relative flex flex-col md:flex-row gap-4 mx-4 md:mx-8"
      >
        <div class="order-1 md:order-last min-w-[200px] px-4 mt-12">
          <div v-if="article?.body?.toc?.links.length">
            <note-article-toc
              class="toc pl-4 pb-4"
              :links="article?.body?.toc?.links"
            />
          </div>
        </div>

        <div
          class="order-last md:order-1 px-8 py-12 relative after:bg-white after:absolute after:bottom-0 after:left-0 after:w-full after:top-0 after:border-2 after:border-gray-100 after:z-[-99] after:opacity-35 rounded-md shadow-[5px_5px_rgb(0_0_0/20%)]"
        >
          <div class="text-center mx-auto">
            <h1 class="text-4xl my-6">{{ article?.title }}</h1>

            <ContentRendererMarkdown :value="article?.excerpt" />
          </div>

          <ContentRendererMarkdown
            class="article__content"
            :value="article || {}"
          />

          <div
            v-if="article?.tags.length"
            class="pt-8 d-flex flex-wrap align-center"
          >
            <span class="mr-2">Tags:</span>
            <NuxtLink
              v-for="tag of article.tags"
              :key="tag"
              class="border-2 border-emerald-600 text-emerald-600 px-2 py-1 mr-2"
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

      <div class="border-t-2 border-gray-300 mt-8">
        <note-prev-next :prev="prev" :next="next" />
      </div>
    </ContentRenderer>
  </div>
</template>

<style lang="scss">
.article__content {
  h2 {
    font-size: 1.5rem;
    letter-spacing: -0.025em;
    line-height: 1.375;
    margin-bottom: 0.5em;
    margin-top: 1.25em;

    a {
      font-weight: 700;
    }
  }

  h3 {
    font-size: 1.25rem;
    letter-spacing: -0.025em;
    line-height: 1.375;
    margin-bottom: 0.5em;
    margin-top: 1.25em;

    a {
      font-weight: 600;
    }
  }

  p {
    font-size: 16px;
    line-height: 1.625;
    margin: 0;
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding: 0px;
  }

  ol {
    list-style: decimal;
    margin-top: 30px;
    margin-bottom: 30px;
    padding-left: 20px;
  }

  ul {
    list-style: disc;
    list-style-position: inside;
    margin-top: 30px;
    margin-bottom: 30px;
    padding-left: 0;
  }

  ol li {
    counter-increment: list-number;
    line-height: 1.7;
    margin-bottom: 0;
    margin-top: 0;
    min-height: 28px;
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
    border-radius: 0.5rem;
    display: flex;
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 1rem;
    margin-top: 1rem;
    max-width: 100%;
    overflow: auto;
    white-space: pre;
  }

  pre code {
    background-color: #0d1117;
    font-family: monospace;
    font-weight: 400;
    overflow: auto;
    padding: 15px 25px;
    width: 100%;
  }
}
</style>
