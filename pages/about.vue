<script lang="ts" setup>
const { data } = await useAsyncData('/', () => queryContent('/').findOne());

const experiences = computed(() => data?.value?.experiences || []);
const expertises = computed(() => data?.value?.expertises || []);
</script>

<template>
  <Page>
    <PageTitle text="About me" subtitle=" Story" />

    <div
      class="px-8 py-10 relative after:bg-white after:absolute after:bottom-0 after:left-0 after:w-full after:top-0 after:border-2 after:border-gray-100 after:z-[-99] after:opacity-35 rounded-md shadow-[5px_5px_rgb(0_0_0/20%)] grid grid-cols-2"
    >
      <div class="px-8 py-8">
        <h5 class="text-2xl font-bold text-center">Experience</h5>

        <div class="relative">
          <div
            v-for="(experience, index) of experiences"
            :key="index"
            class="relative border-b-2 border-r-2 border-black px-4 py-8 pr-8"
          >
            <h6
              class="after:absolute after:h-[48px] after:w-[48px] after:z-10 after:bg-white after:rounded-full after:bottom-[-24px] after:right-[-24px] after:shadow-[5px_5px_rgb(0_0_0/20%)]"
            >
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
                ><span v-if="experience.endDate">{{ experience.endDate }}</span>
              </div>
            </div>
            <p v-html="experience.description"></p>
          </div>
        </div>
      </div>

      <div class="px-8 py-8">
        <h5 class="text-2xl font-bold text-center">Skills</h5>

        <div class="pt-8">
          <div
            v-for="(expertise, index) of expertises"
            :key="index"
            class="mb-10 relative"
          >
            <h6 class="flex">
              <span class="grow">{{ expertise.title }}</span>
              <span class="font-bold text-lg"
                >{{ expertise.value }}<span>%</span></span
              >
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
