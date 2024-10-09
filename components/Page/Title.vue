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
  <div class="text-center mb-12 font-bold">
    <div>
      <slot>
        <h2 class="text-3xl uppercase">{{ text }}</h2>
      </slot>
    </div>

    <div>
      <slot
        ><span class="uppercase text-lg">My</span
        ><b class="font-[Caveat] text-emerald-600 text-2xl">{{
          subtitle
        }}</b></slot
      >
    </div>
  </div>
</template>
