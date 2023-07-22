<script lang="ts" setup>
const { data } = await useAsyncData('/', () => queryContent('/').findOne());

const experiences = computed(() => data?.value?.experiences || []);
const expertises = computed(() => data?.value?.expertises || []);
</script>

<template>
  <Page id="about">
    <PageTitle text="About me" subtitle=" Story" />

    <v-row>
      <v-col cols="12" xs="7" md="7" class="about__history-container">
        <h5 class="about__history-title">Experience</h5>

        <div class="about__history-items">
          <div v-for="(experience, index) of experiences" :key="index" class="about__history-item">
            <h6 class="about__name">
              <span>{{ experience.title }}</span>
            </h6>
            <div class="about__content">
              <div class="about__subname">{{ experience.company }}</div>
              <div class="about__date">
                {{ experience.startDate }} - <b v-if="!experience.endDate">Present</b
                ><span v-if="experience.endDate">{{ experience.endDate }}</span>
              </div>
              <div class="about__text">
                <p v-html="experience.description"></p>
              </div>
            </div>
          </div>
        </div>
      </v-col>

      <v-col xs="6" class="about__history-container">
        <h5 class="about__history-title">Skills</h5>

        <div class="about__skills-items">
          <div v-for="(expertise, index) of expertises" :key="index" class="about__skills-item">
            <h6 class="about__name">{{ expertise.title }}</h6>
            <div class="about__text">
              <p>{{ expertise.description }}</p>
            </div>
            <div class="about__dots">
              <div class="about__dot" :style="{ width: expertise.value + '%' }"><span></span></div>
            </div>
            <div class="about__value">
              <span class="about__num">{{ expertise.value }}<span>%</span></span>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </Page>
</template>
