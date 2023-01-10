<template>
  <v-container class="blog-detail">
    <v-row>
      <v-col cols="12" sm="12" md="8">
        <div class="card mb-4">
          <article class="post-content">
            <nav class="toc-container">
              <ul>
                <li v-for="link of data.toc" :key="link.id">
                  <NuxtLink
                    :class="{
                      'py-2': link.depth === 2,
                      'ml-2 pb-2': link.depth === 3,
                    }"
                    :to="`#${link.id}`"
                    >{{ link.text }}</NuxtLink
                  >
                </li>
              </ul>
            </nav>

            <nuxt-content :document="data" />
          </article>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const data = await $content('languages/en').fetch();
    return { data };
  },
};
</script>

<style lang="scss" scoped>
.blog-detail {
  margin-top: 50px;
  margin-bottom: 30px;
  position: relative;

  .toc-container {
    background: #f9f9f9 none repeat scroll 0 0;
    border: 1px solid #aaa;
    display: table;
    font-size: 95%;
    margin-bottom: 1.5em;
    padding: 10px 20px;
    width: auto;

    li,
    ul,
    ul li {
      list-style: outside none none !important;
    }
  }

  .card {
    background: var(--light-bg-color);

    .post-content {
      padding: 30px 10px;
      color: var(--font-color);
    }
  }
}
</style>
