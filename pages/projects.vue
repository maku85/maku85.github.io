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

    <v-container>
      <v-row v-if="works.length > 0">
        <v-col
          v-for="work of works"
          :key="work.id"
          cols="12"
          sm="6"
          md="6"
          lg="4"
          xl="3"
        >
          <NuxtLink :to="work.url" target="_blank">
            <div class="card">
              <v-img
                class="projects__image"
                :aspect-ratio="1"
                height="240px"
                :lazy-src="work.image || 'https://source.unsplash.com/random'"
                :src="work.image || 'https://source.unsplash.com/random'"
                cover
              />

              <div class="px-2 py-8">
                <span class="uppercase text-emerald-600 font-light">{{
                  work.category
                }}</span>
                <h5>{{ work.title }}</h5>
                <p>{{ work.description }}</p>
              </div>
            </div>
          </NuxtLink>
        </v-col>
      </v-row>
    </v-container>
  </Page>
</template>
