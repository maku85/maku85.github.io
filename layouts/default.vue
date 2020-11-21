<template>
  <div class="profile-page sidebar-collapse">
    <nav id="nav" class="navbar navbar-expand-lg navbar-transparent fixed-top">
      <div class="container">
        <div class="navbar-translate">
          <TheColorModePicker class="navbar-brand" />

          <button
            class="navbar-toggler navbar-toggler"
            type="button"
            @click="$store.dispatch('nav/toggleSidebar')"
          >
            <span class="navbar-toggler-bar bar1"></span>
            <span class="navbar-toggler-bar bar2"></span>
            <span class="navbar-toggler-bar bar3"></span>
          </button>
        </div>
        <div
          id="navigation"
          class="collapse navbar-collapse justify-content-end"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <nuxt-link class="nav-link" :to="{ path: '/' }">Home</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" :to="{ path: '/', hash: '#about' }">
                About
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" :to="{ path: '/', hash: '#works' }">
                Works
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" :to="{ path: '/', hash: '#resume' }">
                Expertises
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" :to="{ path: '/blog' }">
                Blog
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" :to="{ path: '/', hash: '#contact' }">
                Contact
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <TheSideNav />

    <Nuxt />
  </div>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
.main-container {
  overflow: hidden;
}
</style>
