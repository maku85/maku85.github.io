<script lang="ts" setup>
const { data: settings } = await useAsyncData('/', () => queryContent('/').findOne());
</script>

<template>
  <Page id="about">
    <PageTitle text="Projects" subtitle=" works" />

    <div v-if="settings.works.length === 0" class="mt-4">
      <div class="text-center font-weight-light">No works :(</div>
    </div>

    <v-row v-if="settings.works.length > 0" class="projects-list mt-4 mb-8">
      <v-col v-for="work of settings.works" :key="work.id" cols="12" sm="6" md="4" xl="3">
        <NuxtLink :to="work.url" target="_blank">
          <div class="card project-item">
            <div class="wrapper d-flex flex-column">
              <v-img
                class="image flex-grow-0"
                :aspect-ratio="1"
                height="240px"
                :lazy-src="work.image || 'https://source.unsplash.com/random'"
                :src="work.image || 'https://source.unsplash.com/random'"
                cover
              />

              <div class="content d-flex flex-column flex-grow-1">
                <span class="category">{{ work.category }}</span>
                <h5 class="name flex-grow-1">{{ work.title }}</h5>
                <div class="text flex-grow-1">
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

<style lang="scss" scoped>
@import '../assets/sass/variables';

.project-item {
  margin-bottom: 30px;
  padding: 0 20px;
  height: 100%;
  position: relative;
  overflow: hidden;

  .wrapper {
    padding: 20px;
    height: 100%;

    .content {
      padding-top: 20px;

      .category {
        margin-bottom: 5px;
        display: block;
        text-transform: uppercase;
        font-size: 13px;
        font-weight: 700;
        letter-spacing: 0.05em;
        color: #29a587;
      }

      .name {
        font-size: 24px;
        margin: 0;
      }

      .text {
        opacity: 0.8;
        margin: 15px 0 0;
        min-height: 80px;
      }
    }

    .image {
      margin: 30px 0 0;
      border-radius: 20px;
    }
  }
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .project-item {
    padding: 10px;
  }
}
</style>
