<template>
  <div class="profile-page sidebar-collapse">
    <div class="mt-5 mb-4 text-center">
      <h2>{{ $t("About me") }}</h2>
    </div>

    <section id="resume" class="section section-resume">
      <div class="section-sub-heading">
        <h4 class="section-sub-title">{{ $t("My skills") }}</h4>
      </div>
      <v-row>
        <v-col
          cols="12"
          xs="12"
          sm="6"
          v-for="expertise of expertises"
          :key="expertise.id"
        >
          <div class="resume-panel">
            <div
              v-for="skill of expertise.skills"
              :key="skill.id"
              class="mb-2 p-2"
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
        </v-col>
      </v-row>

      <div class="section-sub-heading mt-5">
        <h4 class="section-sub-title">{{ $t("Work & Education") }}</h4>
      </div>
      <v-row>
        <v-col cols="12" xs="12" sm="6">
          <div class="resume-box-wrapper">
            <div
              class="resume-box"
              v-for="experience of experiences"
              :key="experience.id"
            >
              <div class="icon">
                <fa icon="briefcase"></fa>
              </div>
              <div class="resume-box-content">
                <h5>{{ experience.title }}</h5>
                <h6 v-if="experience.company" class="place">
                  {{ experience.company }}
                </h6>
                <small class="time"
                  >{{
                    experience.startDate ? experience.startDate + " - " : ""
                  }}
                  {{ experience.endDate || "Present" }}</small
                >
                <p>{{ experience.description }}</p>
              </div>
            </div>
          </div>
        </v-col>

        <v-col cols="12" xs="12" sm="6">
          <div class="resume-box-wrapper">
            <div
              class="resume-box"
              v-for="education of education"
              :key="education.id"
            >
              <div class="icon">
                <fa icon="graduation-cap"></fa>
              </div>
              <div class="resume-box-content">
                <h5>{{ education.title }}</h5>
                <small class="time"
                  >{{ education.startDate ? education.startDate + " - " : "" }}
                  {{ education.endDate }}</small
                >
                <p>{{ education.description }}</p>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const { education, experiences, expertises } = await $content(
      "index"
    ).fetch();
    return { education, experiences, expertises };
  },
  head() {
    return {
      title: "Mauro Cunsolo | About",
    };
  },
};
</script>

<style lang="scss" scoped>
.section-sub-heading {
  margin: auto;
  text-align: center;
  margin-bottom: 40px;
}
.section-sub-title {
  font-weight: 800;
  position: relative;
  margin: auto;
  text-align: center;
  display: inline-block;

  &:before {
    position: absolute;
    content: "";
    left: 0;
    top: auto;
    width: 14px;
    height: 14px;
    bottom: -10px;
    border-radius: 50%;
    background-color: #f21e4e;
    right: 0;
    margin: auto;
    z-index: 2;
    border: 4px solid #f9f9ff;
  }
  &:after {
    position: absolute;
    content: "";
    left: 0px;
    top: auto;
    width: 100%;
    height: 1px;
    bottom: -4px;
    background-color: #f21e4e;
    z-index: -1;
  }
}
.progress {
  background-color: #ddd;
  border-radius: 4px;
  height: 8px;
}

.resume-panel {
  background: var(--bg);
}
.resume-box-wrapper {
  margin-right: 5px;
}
.resume-box {
  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 20px;
    bottom: 0;
    border-left: 1px solid #ddd;
  }

  .icon {
    width: 30px;
    height: 30px;
    position: absolute;
    left: 0;
    right: 0;
    line-height: 30px;
    text-align: center;
    z-index: 1;
    border-radius: 50%;
    color: #fff;
    background-color: var(--primary-color);
  }

  .resume-box-content {
    padding: 0 20px 30px 60px;

    .time {
      color: #ffffff;
      padding: 4px 8px;
      border-radius: 4px;
      font-weight: 500;
      font-size: 11px;
      letter-spacing: 0.5px;
      background-color: var(--primary-color);
      opacity: 0.8;
    }

    h5 {
      font-size: 18px;
      margin: 7px 0 0px;
    }

    .place {
      opacity: 0.6;
      font-weight: 100;
      font-size: 15px;
      position: relative;
    }

    p {
      margin: 0;
      color: #666;
      font-size: 14px;
    }
  }
}
.progress-bar {
  background-color: var(--primary-color);
}
</style>
