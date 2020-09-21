<template>
  <div>
    <nav id="nav" class="navbar navbar-expand-lg">
      <div class="container">
        <div class="navbar-translate">
          <NuxtLink to="/" class="navbar-brand" title="Mauro Cunsolo">
            Mauro
          </NuxtLink>
        </div>
      </div>
    </nav>

    <section class="blog-detail">
      <div
        class="blog-detail-banner wow fadeIn"
        style="visibility: visible; animation-name: fadeIn;"
      >
        <img :src="article.img" alt="Blog Desc" />
      </div>
      <div
        class="blog-detail-contents wow fadeInUp"
        style="visibility: visible; animation-name: fadeInUp;"
      >
        <h2>{{ article.title }}</h2>
        <div class="blog-detail-about clearfix">
          <div class="media float-left align-items-center">
            <div class="media-left mr-3">
              <img
                src="assets/images/avatar.jpg"
                class="media-object"
                alt="avatar"
              />
            </div>
            <div class="media-body">
              <h4 class="media-heading">{{ article.author.name }}</h4>
              <p>{{ formatDate(article.updatedAt) }}</p>
            </div>
          </div>
          <div class="blog-detail-category float-right">
            tavel
          </div>
        </div>
        <div class="blog-detail-content">
          <nav class="pb-6">
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

          <!-- content from markdown -->
          <nuxt-content :document="article" />
        </div>
        <div class="blog-detail-footer">
          <div class="row">
            <div class="col-md-12">
              <div class="blog-detail-tags">
                <ul>
                  Tags:
                  <li>
                    <a class="tags" href="#">web design</a>
                  </li>

                  <li>
                    <a class="tags" href="#">blogging</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- prevNext component -->
          <PrevNext :prev="prev" :next="next" class="mt-8" />
        </div>
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
      .sortBy('createdAt', 'asc')
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
  }
}
</script>

<style lang="scss">
.blog-detail {
  padding-bottom: 50px;
}

.blog-detail-banner img {
  height: 450px;
  width: 100%;
  object-fit: cover;
}

.blog-detail-contents {
  max-width: 800px;
  margin: -100px auto 0px;
  background: #fff;
  display: block;
  padding: 30px;
  z-index: 11;
  position: relative;
  border-radius: 10px;

  h2 {
    font-weight: 500;
  }
}

.blog-detail-about .media {
  margin-bottom: 20px;
}

.blog-detail-category {
  padding: 3px 15px;
  color: #fff;
  text-transform: capitalize;
  background: #fd735a;
  border-radius: 2px;
  margin: 15px 0;
}

.nuxt-content p {
  margin: 15px 0;
}
.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
.nuxt-content img {
  width: 100%;
  margin: 15px 0;
  height: 350px;
  object-fit: cover;
}
.blog-detail-tags ul {
  margin: 0;
  padding: 0;
}
.blog-detail-tags ul li {
  display: inline-block;
}
.tags {
  display: inline-block;
  padding: 4px 10px;
  background-color: #f7f7f7;
  color: #333;
  margin-right: 5px;
  text-transform: capitalize;
  margin-bottom: 10px;
  font-size: 14px;
}
</style>
