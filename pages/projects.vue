<script lang="ts" setup>
const { data } = await useAsyncData('/', () => queryContent('/').findOne());

const works = computed(() => data?.value?.works || []);
</script>

<template>
  <Page id="projects">
    <PageTitle text="Projects" subtitle=" works" />

    <div v-if="works.length === 0">
      <div class="text-center font-weight-light">No works yet :(</div>
    </div>

    <v-row v-if="works.length > 0" class="projects__list">
      <v-col v-for="work of works" :key="work.id" cols="12" sm="6" md="4" xl="3">
        <NuxtLink :to="work.url" target="_blank">
          <div class="card projects__item">
            <div class="projects__container">
              <v-img
                class="projects__image"
                :aspect-ratio="1"
                height="240px"
                :lazy-src="work.image || 'https://source.unsplash.com/random'"
                :src="work.image || 'https://source.unsplash.com/random'"
                cover
              />

              <div class="projects__content">
                <span class="projects__category">{{ work.category }}</span>
                <h5 class="projects__name">{{ work.title }}</h5>
                <div class="projects__text">
                  <p>{{ work.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </NuxtLink>
      </v-col>
    </v-row>
  </Page>
</template>
