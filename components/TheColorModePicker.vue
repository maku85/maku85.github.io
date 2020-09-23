<template>
  <div>
    <fa
      icon="lightbulb"
      @click="$colorMode.preference = $colorMode.value === 'light' ? 'dark': 'light'"
      :class="$colorMode.value"
    ></fa>
  </div>
</template>

<style scoped>
.fa-lightbulb {
  font-size: 20px;
  transition: all .3s ease-in-out;
}
.light {
  color: yellow;
}
</style>