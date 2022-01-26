<template>
  <v-app>
    <app-navbar />

    <v-container>
      <v-main class="main-container">
        <Nuxt />
      </v-main>
    </v-container>

    <app-footer />
    <back-to-top />

    <client-only>
      <TheCookie />
    </client-only>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
};
</script>
