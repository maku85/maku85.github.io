<script setup>
import { onMounted } from 'vue';

const showBackToTop = () => {
  const backTop = document.getElementById('back-top');
  const backTopClasses = backTop.classList;
  if (document.documentElement.scrollTop >= 400) {
    if (backTopClasses.contains('d-none')) {
      backTopClasses.remove('d-none');
    }
  } else if (!backTopClasses.contains('d-none')) {
    backTopClasses.add('d-none');
  }
};
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
  showBackToTop();

  window.onscroll = () => {
    showBackToTop();
  };
});
</script>

<template>
  <span id="back-top" class="d-none" @click="scrollToTop()">
    <v-icon icon="mdi-chevron-up" />
  </span>
</template>
