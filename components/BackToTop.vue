<script setup>
import { onMounted } from 'vue';

const showBackToTop = () => {
  const backTop = document.getElementById('back-top');
  const backTopClasses = backTop.classList;
  if (document.documentElement.scrollTop >= 400) {
    if (backTopClasses.contains('opacity-0')) {
      backTopClasses.remove('opacity-0');
    }
  } else if (!backTopClasses.contains('opacity-0')) {
    backTopClasses.add('opacity-0');
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
  <span
    id="back-top"
    class="fixed bottom-5 right-5 bg-emerald-600 text-xl text-white px-5 py-4 rounded-full hover:cursor-pointer hover:bg-emerald-700 focus:outline-none scroll-up-btn opacity-0 z-50 shadow-[5px_5px_rgb(0_0_0/20%)]"
    @click="scrollToTop()"
    aria-label="Torna su"
  >
    <i class="mdi mdi-chevron-up" />
  </span>
</template>
