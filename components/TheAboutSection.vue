<template>
  <section id="about" class="section-about">
    <div class="section-about-wrap">
      <div class="section-about-inner align-items-center d-flex">
        <div
          sm="3"
          class="d-none d-md-block profile-picture img-circle mr-5"
        ></div>

        <div class="about-desc flex-grow-1">
          <div class="about-desc-content">
            <h1>{{ $t("about-title") }} <b>Mauro</b></h1>
            <p
              class="mt-4 font-weight-light"
              v-html="$t('about-description')"
            ></p>
          </div>
          <ul class="mt-4">
            <li
              v-for="social of socials"
              :key="social.id"
              class="list-inline-item"
            >
              <a :href="social.link" class="mr-1" target="_blank">
                <v-icon
                  class="social-icon"
                  :class="{ ['social-' + social.type]: true }"
                  >mdi-{{ social.type }}</v-icon
                >
              </a>
            </li>
          </ul>
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
.section-about {
  padding-top: 120px;
  padding-bottom: 20px;

  .section-about-inner {
    padding: 50px;

    h1 {
      font-size: 30px;
      font-weight: 400;
      margin-bottom: 20px;
    }

    .profile-picture {
      background-image: url("/img_avatar.webp");
      min-width: 200px;
      min-height: 200px;
      background-size: cover;
      background-position: 0px -10px;
      box-shadow: $shadow;
    }
  }
}
</style>
