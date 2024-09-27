<script lang="ts" setup>
const { data } = await useAsyncData('/', () => queryContent('/').findOne());

const works = computed(() => data?.value?.works || []);
</script>

<template>
  <Page>
    <PageTitle text="Projects" subtitle=" works" />

    <div v-if="works.length === 0">
      <div class="text-center font-light">No works yet :(</div>
    </div>

    <div>
      <div v-if="works.length > 0" class="grid grid-cols-3 gap-8">
        <div v-for="work of works" :key="work.id">
          <NuxtLink :to="work.url" target="_blank">
            <div
              class="px-8 py-10 relative after:bg-white after:absolute after:bottom-0 after:left-0 after:w-full after:top-0 after:border-2 after:border-gray-100 after:z-[-99] after:opacity-35 rounded-md shadow-[5px_5px_rgb(0_0_0/20%)]"
            >
              <v-img
                :aspect-ratio="1"
                height="240px"
                :lazy-src="work.image || 'https://source.unsplash.com/random'"
                :src="work.image || 'https://source.unsplash.com/random'"
                cover
              />

              <div class="px-2 py-8">
                <span class="uppercase text-sm text-emerald-600 font-light">{{
                  work.category
                }}</span>
                <h5 class="text-2xl font-semibold mb-4">{{ work.title }}</h5>
                <p>{{ work.description }}</p>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </Page>
</template>
