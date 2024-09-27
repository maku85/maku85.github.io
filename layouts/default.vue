<template>
  <v-app>
    <div class="container mx-auto">
      <slot name="header">
        <app-navbar />
      </slot>

      <main class="mb-10 mt-8">
        <slot />
      </main>
    </div>

    <slot name="footer">
      <app-footer />
    </slot>

    <back-to-top />
  </v-app>
</template>
