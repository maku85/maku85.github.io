<template>
  <v-btn icon>
    <v-icon
      @click="
        $colorMode.preference = $colorMode.value === 'light' ? 'dark' : 'light'
      "
      :class="$colorMode.value"
      >{{
        $colorMode.value === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'
      }}</v-icon
    >
  </v-btn>
</template>

<style lang="scss" scoped>
.v-icon {
  font-size: 20px;
  transition: all 0.3s ease-in-out;
  color: var(--primary-color);

  &:after {
    opacity: 0 !important;
  }
}
</style>
