<template>
  <section v-if="works.length > 0" id="works" class="section section-work">
    <div class="container">
      <div class="section-title text-center">
        <h1 v-resize-text="{ minFontSize: '30px', maxFontSize: '110px' }">
          My <span>Portfolio</span>
        </h1>
        <span
          class="title-bg"
          v-resize-text="{ minFontSize: '30px', maxFontSize: '110px' }"
          >Works</span
        >
      </div>

      <div class="row mt-4">
        <div v-for="work of works" :key="work.id" class="col-sm-6 col-md-4">
          <a :href="work.url" target="_blank">
            <div class="works-flip">
              <div class="works-list">
                <div
                  class="works-list-front"
                  :style="{ backgroundImage: 'url(' + work.image + ')' }"
                >
                  <div class="flip-content">
                    <h5 class="mb-0">{{ work.title }}</h5>
                  </div>
                </div>
                <div class="works-list-back">
                  <div class="flip-content">
                    <div class="works-list-icon">
                      <i class="fas fa-paint-brush"></i>
                    </div>
                    <div class="mt-4">
                      <h5 class="mb-0">{{ work.category }}</h5>
                      <p class="mt-3">{{ work.description }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: { works: { type: Array, default: () => [] } },
};
</script>

<style lang="scss">
.works-flip {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  min-height: 270px;
  perspective: 1200px;
  position: relative;
  transform-style: preserve-3d;
  width: 100%;
}
.works-list {
  height: 100%;
  margin-bottom: 30px;
  perspective: inherit;
  position: relative;
  transform-style: inherit;
  transition-duration: 0.6s;
  transition-property: box-shadow, -webkit-transform;
  transition-property: box-shadow, transform;
  transition-property: box-shadow, transform, -webkit-transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;
}
.works-list-1 {
  background-image: url("https://www.beingeorge.com/justin/assets/images/services1.jpg");
}
.works-list-2 {
  background-image: url("https://www.beingeorge.com/justin/assets/images/services2.jpg");
}
.works-list-3 {
  background-image: url("https://www.beingeorge.com/justin/assets/images/services3.jpg");
}
.works-list-4 {
  background-image: url("https://www.beingeorge.com/justin/assets/images/services4.jpg");
}
.works-list-5 {
  background-image: url("https://www.beingeorge.com/justin/assets/images/services5.jpg");
}
.works-list-6 {
  background-image: url("https://www.beingeorge.com/justin/assets/images/services6.jpg");
}
.works-list-front {
  align-items: center;
  backface-visibility: hidden;
  background-color: #fff;
  background-position: center;
  background-size: cover;
  display: flex;
  height: 100%;
  justify-content: center;
  perspective: inherit;
  transform-style: inherit;
  z-index: 2;

  &:before {
    background: #000;
    content: "";
    height: 100%;
    left: 0;
    opacity: 0.2;
    position: absolute;
    right: 0;
  }

  h5 {
    background: #fff;
    border-radius: 2px;
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    padding: 11px 20px;
    z-index: 1;
  }
}
.works-list-back {
  align-items: center;
  backface-visibility: hidden;
  background: #fd735a;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  perspective: inherit;
  position: absolute;
  text-align: center;
  top: 0;
  transform: rotateY(-180deg) rotateZ(-180deg);
  transform: rotate3d(0, 1, 0, 180deg);
  transform-style: inherit;
  z-index: 1;
}
</style>
