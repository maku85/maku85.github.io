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
    class="fixed bottom-5 right-5 bg-emerald-600 text-4xl text-white py-1 px-3 rounded-md hover:cursor-pointer hover:bg-emerald-700 focus:outline-none opacity-0 z-50 shadow-[5px_5px_rgb(0_0_0/20%)]"
    @click="scrollToTop()"
    aria-label="Back top top"
  >
    <i class="mdi mdi-chevron-up" />
  </span>
</template>
