<template>
  <div class="m-8">
    <nav id="nav" class="navbar navbar-expand-lg">
      <div class="container">
        <div class="navbar-translate">
          <NuxtLink to="/" class="navbar-brand" title="Mauro Cunsolo">
            Mauro
          </NuxtLink>
        </div>
      </div>
    </nav>

    <section id="blog-page" class="section">
      <div class="container">
        <div class="section-head">
          <span>Blog</span>
          <h2>My Articles</h2>
        </div>

        <ul
          class="list-items-container blog-wrapper images-loaded shuffle"
          style="height: 2271.5px; transition: height 250ms ease-out 0s;"
        >
          <li
            v-for="article of articles"
            :key="article.slug"
            class="list-item shuffle-item filtered"
            style="float: left;"
          >
            <NuxtLink
              :to="{ name: 'blog-slug', params: { slug: article.slug } }"
              class="blog-list"
            >
              <div class="blog-list--img">
                <img :src="article.img" alt="Blog Image" class="img-fluid" />
                <div
                  class="blog-list--details d-flex justify-content-center align-items-center"
                >
                  <div class="blog-list--details-in">
                    <p class="blog-by text-white">Alice Joseph</p>
                    <span class="blog-duration text-white">2 Mins Read</span>
                  </div>
                </div>
              </div>
              <div class="blog-list--desc p-3">
                <p>{{ article.title }}</p>
                <span class="d-block text-center mt-3 font-weight-bold blog-cat"
                  >Design</span
                >
              </div>
            </NuxtLink>
          </li>
        </ul>
        <!-- .projects-container -->
      </div>
      <!-- .contaier -->
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .only(['title', 'description', 'img', 'slug', 'author'])
      .sortBy('createdAt', 'desc')
      .fetch()
    return {
      articles
    }
  }
}
</script>

<style lang="scss">
.list-items-container {
  position: relative;
  display: block;
  width: 100%;
  padding: 0;
  margin: 0;

  .list-item {
    display: block;
    list-style: outside none none;
    margin-bottom: 30px;
    padding: 0 15px;
    width: 33.3%;
  }
}
.blog-list {
  max-width: 350px;
  display: block;
  background: #f8fafb;
  margin: 0 auto;

  img {
    height: 300px;
    object-fit: cover;
    width: 100%;
  }
}
</style>
