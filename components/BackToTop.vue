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
    <v-icon>mdi-chevron-up</v-icon>
  </span>
</template>

<style lang="scss" scoped>
@import '../assets/sass/variables';

#back-top {
  position: fixed;
  bottom: 40px;
  right: 20px;
  height: 50px;
  width: 50px;
  line-height: 45px;
  cursor: pointer;
  border-radius: 50%;
  background: #ff014f;
  text-align: center;
  color: #fff;
  transition: all 0.5s ease;

  &:hover {
    background: #29a587;
  }
}
</style>
