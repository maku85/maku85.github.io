<!-- eslint-disable vue/no-v-html -->
<template>
  <v-container id="resume" class="section">
    <v-row>
      <v-col cols="12" sm="12" md="6">
        <v-row>
          <v-col>
            <v-card>
              <v-card-title>
                <div class="headline font-weight-bold mb-3">{{ $t('Experiences') }}</div>
              </v-card-title>
              <v-card-text>
                <v-timeline dense align-top>
                  <v-timeline-item
                    v-for="(experience, i) in experiences"
                    :key="i"
                    small
                    right
                    color="red darken-3"
                  >
                    <div class="title font-weight-bold">{{ experience.title }}</div>
                    <span class="subtitle-1 font-weight-bold">
                      <small class="time"
                        >{{ experience.startDate ? experience.startDate + ' - ' : '' }}
                        {{ experience.endDate || 'Present' }}</small
                      >
                      - <span class="text-caption mb-2">{{ experience.company }}</span>
                    </span>
                    <div class="" v-html="experience.description"></div>
                  </v-timeline-item>
                </v-timeline>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-card>
              <v-card-title>
                <div class="headline font-weight-bold mb-3">{{ $t('Education') }}</div>
              </v-card-title>
              <v-card-text>
                <v-timeline dense align-top>
                  <v-timeline-item
                    v-for="(education, i) in educations"
                    :key="i"
                    color="red darken-3"
                    small
                    right
                  >
                    <div class="h2 font-weight-bold">{{ education.title }}</div>
                    <span class="subtitle-1 font-weight-bold">
                      <small class="time"
                        >{{ education.startDate ? education.startDate + ' - ' : '' }}
                        {{ education.endDate || 'Present' }}</small
                      >
                      - <span class="text-caption mb-2">{{ education.location }}</span>
                    </span>
                  </v-timeline-item>
                </v-timeline>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" sm="12" md="6">
        <v-row>
          <v-col>
            <v-card>
              <v-card-title>
                <div class="headline font-weight-bold mb-3">{{ $t('Skills') }}</div>
              </v-card-title>

              <v-card-text>
                <v-row>
                  <v-col cols="12" xs="12" sm="6" md="12">
                    <div v-for="(skill, index) of expertises[0].skills" :key="index">
                      <div class="subtitle">{{ skill.title }}</div>

                      <v-progress-linear color="red darken-3" height="5" :value="skill.value">
                      </v-progress-linear>
                    </div>
                  </v-col>
                  <v-col cols="12" xs="12" sm="6" md="12">
                    <div
                      v-for="(skill, index) of expertises[1].skills"
                      :key="index"
                      class="resume-panel"
                    >
                      <div class="subtitle">{{ skill.title }}</div>

                      <v-progress-linear color="red darken-3" height="5" :value="skill.value">
                      </v-progress-linear>
                    </div>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-card>
              <v-card-title>
                <div class="headline font-weight-bold mb-3">{{ $t('Knowledges') }}</div>
              </v-card-title>
              <v-card-text>
                <v-row>
                  <v-col>
                    <v-chip
                      v-for="(knowledge, index) of knowledges"
                      :key="index"
                      class="ml-1 mb-1"
                      label
                    >
                      {{ knowledge }}
                    </v-chip>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'AboutPage',
  async asyncData({ $content }) {
    const { educations, experiences, expertises, knowledges } = await $content('index').fetch();
    return { educations, experiences, expertises, knowledges };
  },
  head() {
    return {
      title: 'Mauro Cunsolo | About',
    };
  },
};
</script>

<style lang="scss" scoped>
#resume {
  .time {
    color: #ffffff;
    padding: 4px 8px;
    margin-bottom: 20px;
    border-radius: 4px;
    font-size: 11px;
    background-color: var(--primary-color);
    opacity: 0.8;
  }
}
</style>
