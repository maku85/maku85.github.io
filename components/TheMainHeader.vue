<template>
  <div
    class="page-header page-header-small"
    data-parallax="true"
    style="background-image: url('header.jpg')"
  >
    <div class="filter"></div>
  </div>
</template>

<style lang="scss">
.page-header {
  background-color: #b2afab;
  background-position: center center;
  background-size: cover;
  min-height: 100vh;
  max-height: 999px;
  overflow: hidden;
  position: relative;
  width: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  .filter::after {
    background-color: rgba(0, 0, 0, 0.2);
    content: "";
    display: block;
    height: 100%;
    left: 0;
    top: 0;
    position: absolute;
    width: 100%;
    z-index: 1;
  }
  &.page-header-small {
    min-height: 65vh !important;
    max-height: 700px;
  }
  &.page-header-xs {
    min-height: 40vh !important;
  }
}
</style>
