<template>
  <section id="blog-page" class="section">
    <div class="container">
      <div class="section-title text-center">
        <h1>My <span>blog</span></h1>
        <span class="title-bg">Posts</span>
      </div>

      <AppSearchInput @searchResults="refreshData" />

      <div v-if="filter" class="mt-2 mb-2">
        <span class="filter">
          {{ filter }}
          <fa class="close-btn" icon="times" @click="reset"></fa>
        </span>
      </div>

      <div v-if="!articles || articles.length === 0" class="row mt-4">
        <div class="col-sm-12">No post found :(</div>
      </div>

      <div v-i="articles && articles.length > 0" class="row mt-4">
        <div
          v-for="article of articles"
          :key="article.id"
          class="col-sm-12 col-md-6 col-lg-4"
        >
          <post-preview :post="article"></post-preview>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  fetch() {
    const filters = {}
    const query = this.$route.query
    if (query.category) {
      Object.assign(filters, { tags: { $containsAny: [query.category] } })
      this.filter = query.category
    }
    this.retrieveData(filters)
  },
  data() {
    return { filter: '', articles: [] }
  },
  methods: {
    async retrieveData(filters) {
      Object.assign(filters, { published: true })
      this.articles = await this.$content('articles')
        .only(['date', 'title', 'description', 'img', 'slug'])
        .where(filters)
        .sortBy('date', 'desc')
        .fetch()
    },
    refreshData(data) {
      this.articles = data
    },
    async reset() {
      this.$router.push('/blog')
      this.filter = ''
      await this.retrieveData()
    }
  },
  head() {
    return {
      title: 'Mauro Cunsolo - My blog'
    }
  }
}
</script>

<style lang="scss">
.navbar.navbar-transparent .navbar-toggler .navbar-toggler-bar {
  background-color: #66615b !important;
}
.navbar.navbar-transparent .navbar-nav .nav-item .nav-link {
  color: #66615b !important;
}
.filter {
  background-color: #f2f2f2;
  padding: 12px 10px;
  border-radius: 4px;

  .close-btn {
    margin-right: 2px;
    cursor: pointer;
  }
}
.blog-post {
  .card-body {
    padding: 0;
    background-color: #f2f2f2;
  }

  .post-thumbnail img {
    height: 250px;
    object-fit: cover;
    width: 100%;
    border-bottom: 5px solid $primary-color;
  }

  .post-content {
    .post-content-inner {
      padding: 0px 20px 15px 20px;

      h3 {
        font-weight: 500;
        line-height: 26px;
        margin-bottom: 12px;
      }

      p {
        color: #666;
        margin: 15px 0 5px;
      }
    }

    .post-footer {
      text-align: center;

      .read-more-btn a {
        color: #606060;
        font-size: 12px;
        font-weight: 400;
        line-height: 1px;
        text-transform: uppercase;
      }
    }
  }
}
</style>
