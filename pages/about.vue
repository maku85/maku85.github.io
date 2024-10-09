<script lang="ts" setup>
const { data } = await useAsyncData('/', () => queryContent('/').findOne());

const experiences = computed(() => data?.value?.experiences || []);
const expertises = computed(() => data?.value?.expertises || []);
</script>

<template>
  <Page>
    <PageTitle text="About me" subtitle=" Story" />

    <div
      class="mx-1 md:px-8 py-8 flex flex-col lg:flex-row relative after:bg-white after:absolute after:bottom-0 after:left-0 after:w-full after:top-0 after:border-2 after:border-gray-200 after:rounded-sm after:z-[-99] after:opacity-35 shadow-[5px_5px_rgb(0_0_0/20%)]"
    >
      <div class="pl-6 pr-8 py-2 lg:w-2/3">
        <h5 class="text-2xl font-bold text-center">Experience</h5>

        <div class="relative">
          <div
            v-for="(experience, index) of experiences"
            :key="index"
            class="relative border-b-2 border-r-2 border-black px-4 py-10 pr-8 after:absolute after:h-[48px] after:w-[48px] after:z-10 after:bg-white after:rounded-full after:bottom-[-24px] after:right-[-24px] after:shadow-[5px_5px_rgb(0_0_0/20%)]"
          >
            <h6 class="text-emerald-600 font-[Caveat] text-3xl mb-4">
              {{ experience.title }}
            </h6>
            <div class="font-mono flex flex-col items-start mb-4">
              <div class="font-bold text-lg">
                {{ experience.company }}
              </div>
              <div class="text-gray-500 uppercase font-light">
                {{ experience.startDate }} -
                <b v-if="!experience.endDate" class="text-emerald-600"
                  >Present</b
                ><span v-if="experience.endDate">{{ experience.endDate }}</span>
              </div>
            </div>
            <p v-html="experience.description"></p>
          </div>
        </div>
      </div>

      <div class="px-8 py-8 lg:w-1/2">
        <h5 class="text-3xl font-bold text-center">Skills</h5>

        <div class="pt-8">
          <div
            v-for="(expertise, index) of expertises"
            :key="index"
            class="mb-10 relative"
          >
            <h6 class="flex mb-2">
              <span class="text-xl grow">{{ expertise.title }}</span>
              <span class="text-lg">{{ expertise.value }}<span>%</span></span>
            </h6>
            <p>{{ expertise.description }}</p>
            <div class="bg-gray-300 relative h-1">
              <div
                class="bg-black h-1 relative"
                :style="{ width: expertise.value + '%' }"
              >
                <span
                  class="absolute right-0 top-[-12px] w-6 h-6 rounded-full bg-emerald-600 shadow-[5px_5px_rgb(0_0_0/20%)]"
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Page>
</template>
