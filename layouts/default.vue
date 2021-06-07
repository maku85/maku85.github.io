<template>
  <v-main class="main-container">
    <TheNavbar />

    <v-container>
      <Nuxt />
    </v-container>

    <TheFooter />
    <TheBackToTop />

    <client-only>
      <TheCookie />
    </client-only>
  </v-main>
</template>