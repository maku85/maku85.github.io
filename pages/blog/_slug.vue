<template>
  <div class="blog-post">
    <div
      class="blog-post-header"
      :style="{
        ['background-image']: `url(${
          article.img || 'https://source.unsplash.com/random'
        })`
      }"
    >
      <div class="container blog-post-header-inner">
        <div class="categories">
          <NuxtLink
            v-for="tag of article.tags.split(',')"
            :key="tag"
            :to="`/blog?category=${tag.trim()}`"
            >#{{ tag.trim() }}</NuxtLink
          >
        </div>
        <h1>{{ article.title }}</h1>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <article>
          <div class="meta open-sans-font">
            <span class="date">
              <fa class="icon" icon="calendar"></fa>
              {{ formatDate(article.date || article.createdAt) }}
            </span>
          </div>

          <div class="blog-post-content">
            <nav class="blog-post-toc">
              <ul>
                <li
                  v-for="link of article.toc"
                  :key="link.id"
                  :class="{
                    'font-semibold': link.depth === 2
                  }"
                >
                  <nuxtLink
                    :to="`#${link.id}`"
                    class="hover:underline"
                    :class="{
                      'py-2': link.depth === 2,
                      'ml-2 pb-2': link.depth === 3
                    }"
                    >{{ link.text }}</nuxtLink
                  >
                </li>
              </ul>
            </nav>

            <nuxt-content :document="article" />
          </div>

          <div class="blog-post-footer">
            <PrevNext :prev="prev" :next="next" class="mt-8" />
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .where({ published: true })
      .sortBy('date', 'asc')
      .surround(params.slug)
      .fetch()
    return {
      article,
      prev,
      next
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  },
  head() {
    return {
      title: `My blog - ${this.article.title}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.description
        },
        { hid: 'og:title', property: 'og:title', content: this.article.title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.article.description
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.article.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.article.description
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.blog-post {
  .blog-post-header {
    position: relative;
    display: flex;
    height: 100vh;
    max-height: 400px;
    align-self: flex-start;
    background-size: cover;
    background-position: center;

    &::after {
      background: rgba(0, 0, 0, 0.3);
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
    }

    .blog-post-header-inner {
      margin-top: auto;
      transition: 0.5s;
      z-index: 2;
      color: #fff;

      .categories {
        text-transform: uppercase;
        font-size: 16px;

        a {
          color: #fff;
          padding: 6px 8px;

          &:hover {
            background-color: $primary-color;
          }
        }
      }

      h1 {
        font-size: 3.5rem;
        padding-bottom: 4rem;
        margin-top: 1.25rem;
      }
    }
  }

  article {
    .meta {
      color: #888;

      .icon {
        padding-right: 3px;
        color: $primary-color;
      }

      span {
        padding-right: 15px;
      }
    }

    .blog-post-toc {
      background: #f8f9fa;
      border-radius: 4px;
      padding: 1rem;
      margin: 2rem 0;

      ul {
        padding-left: 1rem;
      }
    }

    .post-image {
      width: 100%;
      min-height: 400px;
      background-size: cover;
      background-position: center center;
    }

    h1 {
      margin: 13px 0 20px;
    }

    h3 {
      margin-top: 2em;
    }

    img {
      border-radius: 5px;
      margin-bottom: 20px;
    }

    p {
      margin-bottom: 0;
      margin-top: 2em;
    }

    strong {
      font-weight: bold;
    }

    blockquote {
      background: #f9f9f9;
      border-left: 10px solid #ccc;
      margin: 1.5em 10px;
      padding: 1em 10px;
      quotes: '\201C''\201D''\2018''\2019';

      p {
        margin: 0;
      }
    }

    .nuxt-content-highlight {
      margin-top: 2em;
    }
  }
}
</style>
