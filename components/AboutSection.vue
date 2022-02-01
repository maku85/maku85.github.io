<!-- eslint-disable vue/no-v-html -->
<template>
  <section id="about" class="section">
    <div class="section-about-wrap">
      <div class="section-about-inner ma-xs-1 ma-md-8 align-items-center d-flex">
        <v-card sm="3" class="card d-none d-md-block">
          <v-card-text class="text-center">
            <div class="profile-picture img-circle my-10 mx-8"></div>
          </v-card-text>

          <v-card-actions class="card-actions justify-center text-center">
            <social-links :links="socials"> </social-links>
          </v-card-actions>
        </v-card>

        <div class="about-desc d-flex align-center flex-grow-1">
          <div class="about-desc-content mx-8 my-10">
            <h1>{{ $t('about-title') }} <b class="primary-color">Mauro</b>!</h1>
            <p class="mt-4 font-weight-light" v-html="$t('about-description')"></p>
            <div class="justify-center text-center d-flex d-md-none">
              <social-links :links="socials"> </social-links>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    socials: { type: Array, default: () => [] },
  },
};
</script>

<style lang="scss">
#about {
  padding-top: 60px;
  padding-bottom: 20px;
  max-width: 90%;
  margin: auto;
  max-width: 1000px;

  .card-title {
    line-height: 1.2em;
    font-size: 27px;
    color: var(--font-color);
  }

  .about-desc {
    background: var(--light-bg-color);
  }

  .section-about-inner {
    color: var(--font-color);

    h1 {
      font-size: 30px;
      font-weight: 400;
      margin-bottom: 20px;
    }

    .profile-picture {
      background-image: url('/img_avatar.webp');
      min-width: 180px;
      min-height: 180px;
      background-size: cover;
      background-position: 0px -10px;
      box-shadow: $shadow;
    }
  }

  .card-actions {
    background: var(--light-bg-color) !important;
  }
}
</style>
