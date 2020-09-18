<template>
  <section id="blog" class="section section-light section-blog">
    <div class="container">
      <div class="section-head">
        <span>Blog</span>
        <h2>My Latest Articles</h2>
      </div>

      <div v-if="articles.length === 0" class="row mt-4">
        <div class="col-sm-12">
          No post here
        </div>
      </div>

      <div v-if="articles.length > 0" class="row mt-4">
        <div
          v-for="article of articles"
          :key="article.id"
          class="col-sm-12 col-md-4"
        >
          <card class="blog-post">
            <div class="row blog-post-inner">
              <div class="col-sm-6 col-md-12 post-thumbnail">
                <NuxtLink :to="'blog/' + article.slug">
                  <img class="img-responsive" :src="article.img" alt="" />
                </NuxtLink>
              </div>
              <div class="col-sm-6 col-md-12 post-content">
                <div class="post-content-inner text-center">
                  <h3>
                    <NuxtLink :to="'blog/' + article.slug">
                      {{ article.title }}
                    </NuxtLink>
                  </h3>
                  <p>{{ article.description }}</p>
                </div>
                <div class="post-footer">
                  <div class="read-more-btn">
                    <NuxtLink :to="'blog/' + article.slug">
                      read more
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </card>
        </div>

        <div class="col-sm-12 text-center">
          <NuxtLink to="blog">
            go to blog
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: { articles: { type: Array, default: () => [] } }
}
</script>

<style lang="scss">
.blog-post {
  .card .card-body {
    padding: 0;
  }

  .post-thumbnail img {
    height: 250px;
    object-fit: cover;
    width: 100%;
  }

  .post-content {
    padding: 25px 30px;

    .post-content-inner {
      h3 {
        font-weight: 600;
        line-height: 28px;
        margin-bottom: 22px;
      }

      p {
        margin-bottom: 40px;
        color: #606060;
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
