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
  <div class="page-titles">
    <div class="page-title">
      <slot>
        <h2>{{ text }}</h2>
      </slot>
    </div>

    <div class="page-subtitle">
      <slot
        ><span>My</span><b>{{ subtitle }}</b></slot
      >
    </div>
  </div>
</template>

<style lang="scss">
.page-titles {
  text-align: center;
  margin-top: 0;
  margin-bottom: 50px;

  .page-title {
    margin-top: 0;
    margin-bottom: 10px;
    font-family: 'Jost';
    font-size: 44px;
    line-height: 1.3;
    color: #000;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .page-subtitle {
    position: relative;
    font-size: 14px;
    line-height: 1;
    font-weight: 700;
    z-index: 2;
    text-transform: uppercase;

    span {
      color: #29a587;
    }

    b {
      font-family: 'Caveat';
      color: #000;
      font-size: 30px;
      font-weight: 700;
      letter-spacing: 0;
      text-transform: none;
      margin-left: 2px;
      line-height: 0;
    }
  }
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .page-titles {
    margin-bottom: 0px;

    .page-title {
      font-size: 26px;
      margin-bottom: 10px;
    }

    .page-subtitle b {
      font-size: 24px;
    }
  }
}
</style>
