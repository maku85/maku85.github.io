<template>
  <v-app>
    <slot name="header">
      <app-navbar />
    </slot>

    <v-container class="fill-height">
      <v-main>
        <slot />
      </v-main>
    </v-container>

    <slot name="footer">
      <app-footer />
    </slot>

    <back-to-top />
  </v-app>
</template>
