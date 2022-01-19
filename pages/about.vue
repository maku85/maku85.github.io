<template>
  <v-container class="profile-page sidebar-collapse">
    <div class="mt-5 mb-4 text-center">
      <div class="h1">{{ $t('About me') }}</div>
    </div>

    <section id="resume" class="section section-resume">
      <v-row>
        <v-col>
          <v-card class="card">
            <v-card-text>
              <v-row>
                <v-col>
                  <div class="h4 text-center">{{ $t('My skills') }}</div>
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  v-for="expertise of expertises"
                  :key="expertise.id"
                  cols="12"
                  xs="12"
                  sm="6"
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
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-card class="card">
            <v-card-text>
              <v-row>
                <v-col>
                  <div class="h4 text-center">{{ $t('Work & Education') }}</div>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" xs="12" sm="6">
                  <div class="resume-box-wrapper">
                    <div
                      v-for="experience of experiences"
                      :key="experience.id"
                      class="resume-box"
                    >
                      <div class="icon">
                        <v-icon>mdi-briefcase</v-icon>
                      </div>
                      <div class="resume-box-content">
                        <h5>{{ experience.title }}</h5>
                        <h6 v-if="experience.company" class="place">
                          {{ experience.company }}
                        </h6>
                        <small class="time"
                          >{{
                            experience.startDate
                              ? experience.startDate + ' - '
                              : ''
                          }}
                          {{ experience.endDate || 'Present' }}</small
                        >
                        <p>{{ experience.description }}</p>
                      </div>
                    </div>
                  </div>
                </v-col>

                <v-col cols="12" xs="12" sm="6">
                  <div class="resume-box-wrapper">
                    <div
                      v-for="education of education"
                      :key="education.id"
                      class="resume-box"
                    >
                      <div class="icon">
                        <v-icon>mdi-school</v-icon>
                      </div>
                      <div class="resume-box-content">
                        <h5>{{ education.title }}</h5>
                        <small class="time"
                          >{{
                            education.startDate
                              ? education.startDate + ' - '
                              : ''
                          }}
                          {{ education.endDate }}</small
                        >
                        <p>{{ education.description }}</p>
                      </div>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </section>
  </v-container>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const { education, experiences, expertises } = await $content(
      'index'
    ).fetch();
    return { education, experiences, expertises };
  },
  head() {
    return {
      title: 'Mauro Cunsolo | About',
    };
  },
};
</script>

<style lang="scss" scoped>
.card {
  background: var(--light-bg-color);
  border: 1px solid rgba(0, 0, 0, 0.125);

  .v-card__text {
    color: var(--title-color);
  }
}
.resume-box {
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 15px;
    bottom: -10px;
    border-left: 1px solid #ddd;
  }

  .v-icon {
    font-size: 15px;
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
    }

    .place {
      opacity: 0.6;
      font-weight: 100;
      font-size: 15px;
      position: relative;
      margin-top: -8px;
    }

    p {
      margin: 0;
      color: #666;
    }
  }
}
.progress-bar {
  background-color: var(--primary-color);
}
</style>
