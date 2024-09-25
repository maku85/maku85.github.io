<script lang="ts" setup>
const { data } = await useAsyncData('/', () => queryContent('/').findOne());

const experiences = computed(() => data?.value?.experiences || []);
const expertises = computed(() => data?.value?.expertises || []);
</script>

<template>
  <Page id="about-page">
    <PageTitle text="About me" subtitle=" Story" />

    <v-container class="card">
      <v-row>
        <v-col cols="12" xs="7" md="7" class="px-8 py-8">
          <h5 class="text-center">Experience</h5>

          <div class="about__history-items relative">
            <div
              v-for="(experience, index) of experiences"
              :key="index"
              class="about__history-item px-4 py-8"
            >
              <h6 class="about__name">
                <span>{{ experience.title }}</span>
              </h6>
              <div class="flex pb-4 items-center">
                <div class="font-[Caveat] text-2xl grow">
                  {{ experience.company }}
                </div>
                <div class="uppercase font-light">
                  {{ experience.startDate }} -
                  <b v-if="!experience.endDate" class="text-emerald-600"
                    >Present</b
                  ><span v-if="experience.endDate">{{
                    experience.endDate
                  }}</span>
                </div>
              </div>
              <p v-html="experience.description"></p>
            </div>
          </div>
        </v-col>

        <v-col xs="6" class="px-8 py-8">
          <h5 class="text-center">Skills</h5>

          <div class="pt-8">
            <div
              v-for="(expertise, index) of expertises"
              :key="index"
              class="about__skills-item"
            >
              <h6 class="flex">
                <span class="grow">{{ expertise.title }}</span>
                <span class="font-bold text-lg"
                  >{{ expertise.value }}<span>%</span></span
                >
              </h6>
              <p>{{ expertise.description }}</p>
              <div class="about__dots">
                <div
                  class="about__dot"
                  :style="{ width: expertise.value + '%' }"
                >
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </Page>
</template>
