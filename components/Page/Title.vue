<script lang="ts" setup>
defineProps({
  text: {
    type: String,
    default: '',
  },
  subtitle: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <div class="titles">
    <div class="titles__title">
      <slot>
        <h2>{{ text }}</h2>
      </slot>
    </div>

    <div class="titles__subtitle">
      <slot
        ><span>My</span><b>{{ subtitle }}</b></slot
      >
    </div>
  </div>
</template>
