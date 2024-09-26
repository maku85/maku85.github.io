<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col>
          <slot name="header">
            <app-navbar />
          </slot>

          <v-main>
            <slot />
          </v-main>
        </v-col>
      </v-row>
    </v-container>

    <slot name="footer">
      <app-footer />
    </slot>

    <back-to-top />
  </v-app>
</template>
