<template>
  <v-app dark>
    <div class="main">
      <div class="content">
        <div v-if="error.statusCode === 404">
          <h1>404</h1>
          <h2>Page not found</h2>
          <NuxtLink class="mt-5" to="/">
            back to home
          </NuxtLink>
        </div>
        <div v-else>
          {{ otherError }}
          <NuxtLink class="mt-5" to="/">
            back to home
          </NuxtLink>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style lang="scss">
.main {
  background-image: url('https://picsum.photos/1024/768');
  background-size: cover;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  .content {
    background: rgba(256, 256, 256, 0.5);
    text-align: center;
    position: relative;
    color: #444;
    top: 20vh;
    padding-top: 25px;

    h1 {
      font-weight: 900;
      font-size: 165px;
      line-height: 1;
      margin-bottom: -10px;
      opacity: 0.6;
    }

    h2 {
      font-weight: 700;
      font-size: 34px;
      margin-bottom: 6px;
      opacity: 0.9;
    }

    a {
      display: inline-block;
      font-weight: 300;
      font-size: 12px;
      text-transform: uppercase;
      border: 1px solid #444;
      padding: 8px 14px;
      border-radius: 4px;
      opacity: 0.8;
      cursor: pointer;
      margin: 15px 0;
      color: #444;
    }
  }
}
</style>
