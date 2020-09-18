<template>
  <ul class="nav-list">
    <li class="nav-item"><a href="#home">Home</a></li>
    <li class="nav-item">
      <nuxt-link class="nav-link" :to="{ path: '/', hash: '#about' }"
        >About</nuxt-link
      >
    </li>
    <li class="nav-item">
      <nuxt-link class="nav-link" :to="{ path: '/', hash: '#works' }"
        >Works</nuxt-link
      >
    </li>
    <li class="nav-item">
      <nuxt-link class="nav-link" :to="{ path: '/', hash: '#resume' }"
        >Expertises</nuxt-link
      >
    </li>
    <li class="nav-item">
      <nuxt-link class="nav-link" :to="{ path: '/', hash: '#blog' }"
        >Blog</nuxt-link
      >
    </li>
    <li class="nav-item">
      <nuxt-link class="nav-link" :to="{ path: '/', hash: '#contact' }"
        >Contact</nuxt-link
      >
    </li>
  </ul>
</template>

<script>
export default {
  watch: {
    $route() {
      this.$store.dispatch('nav/toggleSidebar')
    }
  }
}
</script>

<style scoped>
.nav-list {
  list-style: none;
  padding: 0;
  width: 100%;
}
.nav-item {
  text-align: center;
}
.nav-item a {
  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
  border-bottom: 1px solid #dddddd;
  color: #aaaaaa;
  display: block;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: 500;
  padding: 13px 0;
  text-transform: uppercase;
}
.nav-item a:hover,
.nav-item a:active {
  color: #000000;
  background: none;
}
</style>
