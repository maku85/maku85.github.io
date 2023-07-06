<template>
  <section class="section">
    <slot />
  </section>
</template>

<style lang="scss">
@import '../assets/sass/variables';

.section {
  margin: auto;
  padding-top: 60px;
  max-width: 1320px;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .section {
    padding-top: 30px;
  }
}
</style>
