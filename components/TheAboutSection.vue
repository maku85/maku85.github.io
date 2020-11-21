<template>
  <section id="about" class="section section-about">
    <div class="container">
      <card class="section-about-wrap">
        <div class="section-about-inner row align-items-center">
          <div class="col-md-7">
            <div class="about-desc">
              <div class="about-desc-content">
                <p class="mt-4 font-weight-light">
                  Passionate full-stack developer, I like to follow the whole
                  life cycle of a project development, from feasibility analysis
                  to final release. Fast learner, hard worker and team player
                  who is proficient in an array of scripting languages and
                  multimedia Web tools. I love challenges but I hate monotony.
                </p>
              </div>
              <ul
                class="about-desc-social mt-4 list-unstyled list-inline text-center"
              >
                <li
                  v-for="social of socials"
                  :key="social.id"
                  class="list-inline-item"
                >
                  <a
                    :href="social.link"
                    :class="{ ['social-' + social.type]: true }"
                    class="mr-3 h3"
                    target="_blank"
                    ><fa :icon="['fab', social.type]"></fa
                  ></a>
                </li>
              </ul>
            </div>
          </div>

          <div
            class="col-md-5 d-none d-md-block profile-picture img-circle"
          ></div>
        </div>
      </card>
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
.social-linkedin {
  color: #306fb2 !important;
}
.section-about {
  margin-top: 120px;

  .section-about-wrap {
    background: var(--bg);
    max-width: 950px;
    margin: -40vh auto 0 auto;
    border-radius: 4px;
    color: var(--color);

    .section-about-inner {
      padding: 50px;

      .profile-picture {
        background-image: url("/img_avatar.webp");
        max-width: 200px;
        height: 200px;
        background-size: cover;
        background-position: 0px -10px;
      }
    }
  }
}
</style>
