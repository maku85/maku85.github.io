<template>
  <v-container class="blog-detail">
    <v-row>
      <v-col class="mb-4 text-center">
        <h2>{{ article.title }}</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="12" md="8">
        <div class="card mb-4">
          <v-img
            :src="article.img || 'https://source.unsplash.com/random'"
          ></v-img>

          <article class="post-content">
            <nuxt-content :document="article" />

            <div class="post-footer d-flex flex-wrap">
              <div class="date flex-grow-1 mt-2">
                <v-icon>mdi-calendar</v-icon>
                {{ formatDate(article.date || article.createdAt) }}
              </div>

              <div class="social-links mt-2">
                <ul>
                  <li>Share:</li>
                  <li>
                    <ShareNetwork
                      network="facebook"
                      url="https://news.vuejs.org/issues/180"
                      title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
                      description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
                      quote="The hot reload is so fast it\'s near instant. - Evan You"
                      hashtags="vuejs,vite"
                    >
                      <v-icon>mdi-facebook</v-icon>
                    </ShareNetwork>
                  </li>
                  <li>
                    <ShareNetwork
                      network="twitter"
                      url="https://news.vuejs.org/issues/180"
                      title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
                      quote="The hot reload is so fast it\'s near instant. - Evan You"
                      hashtags="vuejs,vite"
                    >
                      <v-icon>mdi-twitter</v-icon>
                    </ShareNetwork>
                  </li>
                  <li>
                    <ShareNetwork
                      network="linkedin"
                      url="https://news.vuejs.org/issues/180"
                    >
                      <v-icon>mdi-linkedin</v-icon>
                    </ShareNetwork>
                  </li>
                  <li>
                    <ShareNetwork
                      network="telegram"
                      url="https://news.vuejs.org/issues/180"
                      title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
                      description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
                    >
                      <v-icon>mdi-telegram</v-icon>
                    </ShareNetwork>
                  </li>
                  <li>
                    <ShareNetwork
                      network="whatsapp"
                      url="https://news.vuejs.org/issues/180"
                      title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
                      description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
                    >
                      <v-icon>mdi-whatsapp</v-icon>
                    </ShareNetwork>
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>

        <div v-if="prev || next" class="card blog-post-footer">
          <BlogPrevNext :prev="prev" :next="next" class="mt-8" />
        </div>
      </v-col>

      <v-col cols="12" sm="12" md="3" class="ml-lg-4">
        <div class="card mb-3">
          <h5>Tags</h5>
          <div class="tags">
            <NuxtLink
              v-for="tag of article.tags.split(',')"
              :key="tag"
              :to="localePath(`/blog?category=${tag.trim()}`)"
              >#{{ tag.trim() }}</NuxtLink
            >
          </div>
        </div>
        <div class="card">
          <h5>Recent Posts</h5>
          <div class="tags">
            <NuxtLink
              v-for="tag of article.tags.split(',')"
              :key="tag"
              :to="localePath(`/blog?category=${tag.trim()}`)"
              >#{{ tag.trim() }}</NuxtLink
            >
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  async asyncData({ $content, params, i18n }) {
    const article = await $content("articles", params.slug).fetch();
    const [prev, next] = await $content("articles")
      .only(["title", "slug"])
      .where({ published: true, language: i18n.locale })
      .sortBy("date", "asc")
      .surround(params.slug)
      .fetch();
    return {
      article,
      prev,
      next,
    };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
  head() {
    return {
      title: `My blog - ${this.article.title}`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.article.description,
        },
        { hid: "og:title", property: "og:title", content: this.article.title },
        {
          hid: "og:description",
          property: "og:description",
          content: this.article.description,
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.article.title,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.article.description,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.blog-detail {
  margin-bottom: 30px;
  position: relative;

  .post-content {
    padding: 30px 10px;

    .post-content-inner {
      h2 {
        font-size: 19px;
        margin-top: 0;
        margin-bottom: 12px;
        color: rgb(41, 41, 41);
        font-weight: 700;
        line-height: 1.53;

        a {
          color: rgb(41, 41, 41);
        }
      }

      p {
        color: #666;
        margin: 15px 0 5px;
      }
    }
  }
}

.post-footer {
  margin-top: 35px;

  .social-links {
    ul {
      padding-left: 0;
      list-style: none;
    }
    li {
      display: inline-block;
      margin-right: 5px;
    }
  }
}

.tags {
  display: flex;
  flex-wrap: wrap;

  h5 {
    font-weight: 700;
    line-height: 1.618;
    color: #35404e;
    margin: 0;
  }

  a {
    background-color: #eee;
    color: #515c6a;
    padding: 5px 10px;
    margin-bottom: 5px;
    margin-right: 5px;
    border-radius: 5px;
    text-transform: capitalize;
    font-size: 14px;

    &:hover {
      background-color: $primary-color;
    }
  }
}

.blog-detail {
  margin-top: 50px;

  .blog-post {
    .v-image {
      border-radius: 5px;
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
        quotes: "\201C""\201D""\2018""\2019";

        p {
          margin: 0;
        }
      }
    }
  }
}
.mdi-facebook {
  color: $social-facebook;
}
.mdi-twitter {
  color: $social-twitter;
}
.mdi-linkedin {
  color: $social-linkedin;
}
.mdi-telegram {
  color: $social-telegram;
}
.mdi-whatsapp {
  color: $social-whatsapp;
}
</style>
