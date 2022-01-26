<template>
  <v-container id="resume" class="about-page section section-resume">
    <v-row>
      <v-col>
        <v-card class="card">
          <v-card-title>
            {{ $t('My skills') }}
          </v-card-title>
          <v-card-text>
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
                      <v-progress-linear
                        :value="skill.value"
                      ></v-progress-linear>
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
      <v-col cols="12" xs="12" sm="6">
        <v-card class="card">
          <v-card-title>
            {{ $t('Experiences') }}
          </v-card-title>
          <v-card-text>
            <v-list-item
              three-line
              v-for="experience of experiences"
              :key="experience.id"
              class="resume-box"
            >
              <v-list-item-icon>
                <v-icon>mdi-briefcase</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ experience.title }}</v-list-item-title>
                <v-list-item-subtitle>
                  {{ experience.company }}
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  <small class="time"
                    >{{
                      experience.startDate ? experience.startDate + ' - ' : ''
                    }}
                    {{ experience.endDate || 'Present' }}</small
                  >
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" xs="12" sm="6">
        <v-card class="card">
          <v-card-title>
            {{ $t('Education') }}
          </v-card-title>
          <v-card-text>
            <v-list-item
              two-line
              v-for="education of education"
              :key="education.id"
              class="resume-box"
            >
              <v-list-item-icon>
                <v-icon>mdi-school</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ education.title }}</v-list-item-title>
                <v-list-item-subtitle>
                  <small class="time">
                    {{ education.startDate ? education.startDate + ' - ' : '' }}
                    {{ education.endDate }}
                  </small>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'AboutPage',
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
.about-page {
  margin-top: 40px;

  .resume-box {
    position: relative;

    &:after {
      content: '';
      position: absolute;
      top: 20px;
      left: 25px;
      border-left: 1px solid #ddd;
    }

    .v-icon {
      font-size: 18px;
      width: 30px;
      height: 30px;
      position: absolute;
      left: 10px;
      z-index: 1;
      border-radius: 20%;
      color: #fff;
      background-color: var(--primary-color);
    }

    .time {
      color: #ffffff;
      padding: 6px 8px;
      margin-bottom: 20px;
      border-radius: 10%;
      font-size: 11px;
      background-color: var(--primary-color);
      opacity: 0.8;
    }

    .resume-box-content {
      padding: 0 20px 30px 60px;

      .place {
        opacity: 0.6;
        font-weight: 100;
        position: relative;
      }
    }
  }
}
</style>
