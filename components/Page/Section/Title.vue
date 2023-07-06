<script lang="ts" setup>
defineProps({
  text: {
    type: String,
    default: () => '',
  },
});
</script>

<template>
  <div class="section-title">
    <slot>{{ text }}</slot>
  </div>
</template>

<style lang="scss">
.section-title {
  margin-bottom: 60px;
  font-family: 'Jost';
  font-size: 44px;
  line-height: 1.3;
  color: #000;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  &:after {
    content: '';
    width: 100px;
    height: 2px;
    background: var(--primary-color);
    display: block;
    margin-top: 4px;
  }
}
</style>
