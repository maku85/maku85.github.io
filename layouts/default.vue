<template>
  <v-app full-height>
    <slot name="header">
      <app-navbar />
    </slot>

    <v-container fluid>
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
