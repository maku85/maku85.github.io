<script lang="ts" setup>
const route = useRoute();
const { lang, slug } = route.params;
const { data } = await useAsyncData(`article-${slug}`, async () => {
  const article = queryContent(lang as string, 'articles')
    .where({ _path: `/${lang}/articles/${slug}` })
    .findOne();

  const surround = queryContent().only(["_path", "title", "description"]).sort({ date: 1 }).findSurround(`/${lang}/articles/${slug}`);
  return {
    article: await article,
    surround: await surround,
  };
});
const article = data?.value?.article || {};
const [prev, next] = data?.value?.surround || [];

useHead({
  title: data?.value?.article.title,
  meta: [
    { name: "description", content: data?.value?.article.description },
    {
      hid: "og:image",
      property: "og:image",
      content: `https://site.com/${data?.value?.article.img}`,
    },
  ],
});
</script>


<template>
  <v-container id="article" fluid>
    <ContentRenderer :value="data?.article">
      <template #empty>
        <p>No content found.</p>
      </template>

      <div class="header">
        <div class="titles">
          <div class="categories animate">
            <NuxtLink class="category" v-for="(tag, index) of data?.article.tags" :key="tag" :to="'/notes/categories/' + tag">
              #{{ tag.toUpperCase() }}{{ index < data?.article.tags.length - 1 ? ',' : '' }}&nbsp
            </NuxtLink>
          </div>
          <h1 class="title">{{ data.article.title }}</h1>

          <p class="description">
            <ContentRendererMarkdown :value="data?.article.excerpt" />
          </p>
        </div>
      </div>

      <div class="image">
        <v-responsive>
          <v-parallax height="740" :lazy-src="article.img || 'https://source.unsplash.com/random'" :src="article.img || 'https://source.unsplash.com/random'"></v-parallax>
        </v-responsive>
        <div
            v-if="article.credits"
            class="text-center caption pt-2 text--secondary"
            v-html="article.credits"
          ></div>
      </div>

      <v-row class="content">
        <v-col cols="12" sm="12">
          <v-container>
            <v-row>
              <v-col v-if="data?.article?.body?.toc?.links.length" cols="12" sm="3" class="order-first order-md-last">
                <blog-toc class="toc pl-4 pb-4" :links="data?.article?.body?.toc?.links" />
              </v-col>

              <v-col cols="12" sm="9" class="article order-last order-md-first">
                <ContentRendererMarkdown :value="data?.article"/>

                <div class="categories d-flex flex-wrap" v-if="data?.article.tags.length">
                  <span>Tags:</span>
                  <NuxtLink v-for="tag of data?.article.tags" :key="tag" :to="'/notes/categories/' + tag">
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
          </v-container>
        </v-col>
      </v-row>

      <div class="page-navigation">
        <v-container>
          <blog-prev-next :prev="prev" :next="next"></blog-prev-next>
        </v-container>
      </div>
    </ContentRenderer>
  </v-container>
</template>

<style lang="scss" scoped>
@import '../assets/sass/variables';

@keyframes translate {
  from {
    opacity: 0;
    transform: translate(0,10px);
  }
  to {
    opacity: 1;
    transform: translate(0,0);
  }
}

#article {

  .titles {
    text-align: center;
    padding-top: 3rem;
    padding-bottom: 1.5rem;
    max-width: 48rem;
    margin: auto;

    .categories {
      animation: translate;
      transition: transform .7s cubic-bezier(.3,0,.3,1),opacity .4s linear,color .3s linear,-webkit-transform .7s cubic-bezier(.3,0,.3,1);
      transition-delay: .15s;

      .category {
        color: #29a587;
        font-weight: 700;
        transition: all .7s cubic-bezier(.3,0,.3,1);
      }
    }

    .title {
      margin: 20px auto 0 auto;
      text-align: center;
      max-width: 900px;
      font-size: 2.25rem;
      line-height: 2.5rem;
    }

    .description {
      margin-top: 1rem;
      margin-bottom: 1rem;
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }

  .content {
    padding-bottom: 100px;
    max-width: 1320px;
    margin: auto;
    position: relative;

    .categories {
      padding-top: 30px;
      line-height: 32px;

      span {
        margin-top: 10px;
        margin-right: 10px;
      }

      a {
        margin: 10px 10px 0 0;
        padding: 8px 20px;
        font-size: 14px;
        line-height: 1;
        font-weight: 700;
        color: #000;
        border: 1px solid #29a587;
      }

      .category {
        color: #29a587;
        font-weight: 700;
      }
    }
  }

  :deep(.article) {
    padding-top: 50px;
    padding-bottom: 100px;

    h2 {
      font-size: 1.5rem;
      margin-bottom: .5em;
      margin-top: 1.25em;
      color: #000;
      line-height: 1.375;
      letter-spacing: -.025em;

      a {
        font-weight: 700;
      }
    }

    h3 {
      font-size: 1.25rem;
      margin-bottom: .5em;
      margin-top: 1.25em;
      line-height: 1.375;
      letter-spacing: -.025em;

      a {
        font-weight: 600;
      }
    }

    p {
      padding: 0px;
      margin: 0;
      font-size: 16px;
      color: #262626;
      line-height: 1.625;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }

    ul {
      list-style: disc;
      margin-top: 30px;
      margin-bottom: 30px;
      padding-left: 0;
      list-style-position: inside
    }

    ol {
      list-style: decimal;
      margin-top: 30px;
      margin-bottom: 30px;
      padding-left: 20px;
    }

    ol li {
      counter-increment: list-number;
      margin-bottom: 0;
      margin-top: 0;
      min-height: 28px;
      line-height: 1.7;
    }

    ul ul,ol ol,ul ol,ol ul {
      margin-top: 15px;
      margin-bottom: 15px;
      margin-left: 15px
    }

    pre {
      border-radius: .5rem;
      display: flex;
      line-height: 1.5;
      margin-top: 1rem;
      margin-bottom: 1rem;
      max-width: 100%;
      overflow: auto;
      white-space: pre;
      font-size: 14px
    }

    pre code {
      background-color: #0d1117;
      width: 100%;
      padding: 15px 25px;
      font-family: monospace;

      font-weight: 400;
      font-size: .875rem;
      line-height: 1.625rem;
    }

    code {
      background-color: #ddd;
      padding: 0 4px;
      font-family: 'italic';
      font-size: 14px;
      text-decoration: none;
      display: inline-block;
      vertical-align: middle;
      overflow: auto;
      max-width: 100%;
      white-space: nowrap
    }
  }

  .line-block {
    left: -80px;
    right: auto;
    position: absolute;
    top: 40px;
    bottom: 60px;
    width: 2px;
    background: #000;
    z-index: 3;
    pointer-events: none;

    &:before {
      content: '';
      position: absolute;
      left: -15px;
      top: -15px;
      width: 30px;
      height: 30px;
      background: #fff;
      border: 2px solid #000;
      border-radius: 30px;
      box-shadow: 5px 5px rgb(0 0 0/20%);
      z-index: 1;
    }

    &:after {
      content: '';
      position: absolute;
      left: -15px;
      bottom: -15px;
      width: 30px;
      height: 30px;
      background: #fff;
      border: 2px solid #000;
      border-radius: 30px;
      box-shadow: 5px 5px rgb(0 0 0/20%);
      z-index: 1;
    }

    span {
      bottom: auto;
      top: -188px;
    }
  }

  .page-navigation {
    border-top: 1px solid rgba(0,0,0,.1);
    padding: 120px 0;
  }
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  #article {
    .titles {
      padding-top: 30px;
      padding-bottom: 50px;

      .title {
        font-size: 26px;
      }
    }

    .v-parallax {
      height: 360px !important;
    }

    .content {
      padding-top: 20px;

      .categories {
        a {
          margin: 8px 8px 0 0;
          padding: 8px 12px;
        }
      }
    }

    :deep(.article) {
      h3 {
        font-size: 28px;
      }

      pre code {
        padding: 10px;
      }
    }

    .page-navigation {
      padding: 20px 0;
    }
  }
}
</style>
