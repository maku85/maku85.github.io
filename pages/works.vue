<template>
  <div class="profile-page sidebar-collapse">
    <div class="mt-5 mb-4 text-center">
      <h2>{{ $t("My works") }}</h2>
    </div>

    <section id="works" class="section section-work">
      <v-row>
        <v-col cols="12" sm="6" md="4" v-for="work of works" :key="work.id">
          <div class="work-item">
            <v-img
              class="work-image"
              :src="work.image || 'https://source.unsplash.com/random'"
            ></v-img>

            <div class="work-overlay">
              <div class="d-flex">
                <h5>{{ work.title }}</h5>
              </div>
              <div class="mt-4">
                <p class="mt-3">{{ work.description }}</p>
                <div class="text-center mt-3">
                  <a :href="work.url" target="_blank">
                    <v-icon style="color: #fff">mdi-link</v-icon>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const { works } = await $content("index").fetch();
    return { works };
  },
  head() {
    return {
      title: "Mauro Cunsolo | Works",
    };
  },
};
</script>

<style lang="scss" scoped>
.work-item {
  position: relative;
  height: 240px;
  border-radius: 20px;
  box-shadow: 0px 5px 20px 0px rgb(69 67 96 / 10%);

  &:hover {
    cursor: pointer;
  }

  .v-image {
    height: 100%;
    margin-bottom: 30px;
    border-radius: 20px;
  }
  .work-overlay {
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    color: #fff;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    transition: all 0.7s ease;
    border-radius: 20px;

    &:hover {
      opacity: 1;
    }
  }
}
</style>
