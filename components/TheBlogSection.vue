<template>
  <section id="blog" class="section section-blog">
    <div class="container">
      <div class="section-title text-center">
        <h1>My <span>blog</span></h1>
        <span class="title-bg">Posts</span>
      </div>

      <div v-if="articles.length === 0" class="row mt-4">
        <div class="col-sm-12 text-center">No post yet here :(</div>
      </div>

      <div v-if="articles.length > 0" class="row mt-4">
        <div
          v-for="article of articles"
          :key="article.id"
          class="col-sm-12 col-md-6 col-lg-4"
        >
          <card class="blog-post">
            <div class="row blog-post-inner">
              <div class="col-sm-6 col-md-12 post-thumbnail">
                <NuxtLink :to="'blog/' + article.slug">
                  <img
                    class="img-responsive"
                    :src="article.img || 'https://source.unsplash.com/random'"
                    alt=""
                  />
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
              </div>
            </div>
          </card>
        </div>

        <div class="col-sm-12 text-center">
          <div class="btn blog-button">
            <NuxtLink to="blog">
              go to blog <fa icon="chevron-right"></fa
            ></NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: { articles: { type: Array, default: () => [] } },
};
</script>

<style lang="scss">
.blog-post {
  .card-body {
    padding: 0;
    background-color: #f2f2f2;
  }

  .post-thumbnail img {
    height: 250px;
    object-fit: cover;
    width: 100%;
    border-bottom: 5px solid var(--primary-color);
  }

  .post-content {
    padding: 20px 25px 25px 25px;

    .post-content-inner {
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
.blog-button {
  background: var(--primary-color);
  border-color: var(--primary-color);

  a {
    color: #fff;
  }
}
</style>
