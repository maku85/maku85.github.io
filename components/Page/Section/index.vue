<template>
  <section class="section">
    <slot />
  </section>
</template>

<style lang="scss" scoped>
@import '../assets/sass/variables';

.section {
  margin: auto;
  padding: 0 0 180px;
  padding-top: 60px;
  max-width: 1320px;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .section {
    padding: 0 0 90px;
    padding-top: 30px;
  }
}
</style>
