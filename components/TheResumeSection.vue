<template>
  <section id="resume" class="section section-resume">
    <div class="container">
      <div class="section-title text-center">
        <h1>About <span>me</span></h1>
        <span class="title-bg">Resume</span>
      </div>

      <div class="container">
        <h3 class="text-uppercase pb-3 text-center">My Skills</h3>
        <div class="row mt-4">
          <div
            v-for="expertise of resume.expertises"
            :key="expertise.id"
            class="col-sm-6 col-lg-6"
          >
            <div class="resume-panel b-box hover-state p-4 mt-3">
              <div
                v-for="skill of expertise.skills"
                :key="skill.id"
                class="mb-4 pb-2"
              >
                <h6>{{ skill.title }}</h6>
                <div class="progress mt-2">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    :style="{ width: skill.value + '%' }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 class="text-uppercase pb-5 text-center">Experience & Education</h3>
        <div class="row mt-4">
          <div
            v-for="experience of resume.experiences"
            :key="experience.id"
            class="col-md-12 col-lg-6 m-15px-tb resume-box"
          >
            <div class="icon">
              <fa icon="briefcase"></fa>
            </div>
            <div class="resume-box-content">
              <span class="time text-uppercase"
                >{{ experience.startDate ? experience.startDate + " - " : "" }}
                {{ experience.endDate || "Present" }}</span
              >
              <h5 class="text-uppercase">
                {{ experience.title }}
                <span v-if="experience.company" class="place"
                  >- {{ experience.company }}</span
                >
              </h5>
              <p>{{ experience.description }}</p>
            </div>
          </div>

          <div
            class="col-md-12 col-lg-6 m-15px-tb resume-box"
            v-for="education of resume.education"
            :key="education.id"
          >
            <div class="icon">
              <fa icon="graduation-cap"></fa>
            </div>
            <div class="resume-box-content">
              <span class="time text-uppercase"
                >{{ education.startDate ? education.startDate + " - " : ""
                }}{{ education.endDate }}</span
              >
              <h5 class="text-uppercase">{{ education.title }}</h5>
              <p>{{ education.description }}</p>
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
    resume: {
      type: Object,
      default: () => ({ experiences: [], education: [], expertises: [] }),
    },
  },
};
</script>

<style lang="scss">
.resume-panel {
  background: var(--bg);
}
.resume-box {
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 20px;
    bottom: 0;
    border-left: 1px solid #ddd;
  }

  .icon {
    width: 40px;
    height: 40px;
    position: absolute;
    left: 0;
    right: 0;
    line-height: 40px;
    text-align: center;
    z-index: 1;
    border-radius: 50%;
    color: #fff;
    background-color: var(--primary-color);
  }

  .resume-box-content {
    padding: 0 20px 0 60px;
    margin: 0 0 50px;

    .time {
      color: #666;
      font-size: 12px;
      padding: 1px 10px;
      display: inline-block;
      margin-bottom: 12px;
      border-radius: 20px;
      font-weight: 600;
      background-color: #eee;
      opacity: 0.8;
    }

    h5 {
      font-size: 18px;
      margin: 7px 0 10px;
    }

    .place {
      opacity: 0.8;
      font-weight: 600;
      font-size: 15px;
      position: relative;
      padding-left: 26px;

      &:before {
        position: absolute;
        content: "";
        width: 10px;
        height: 2px;
        background-color: #666;
        left: 7px;
        top: 9px;
        opacity: 0.8;
      }
    }

    p {
      margin: 0;
      color: #666;
      font-size: 14px;
    }
  }
}
</style>
