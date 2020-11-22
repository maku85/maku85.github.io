<template>
  <div class="section-title text-center">
    <h1 v-resize-text="{ minFontSize: '18px', maxFontSize: '65px' }">
      <slot></slot>
    </h1>
    <span
      class="title-bg"
      v-resize-text="{ minFontSize: '30px', maxFontSize: '100px' }"
    >
      {{ subtitle }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, default: "" },
    subtitle: { type: String, default: "" },
  },
};
</script>
