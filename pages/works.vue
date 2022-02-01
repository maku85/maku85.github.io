<template>
  <v-container id="works" class="section">
    <v-row>
      <v-col v-for="work of works" :key="work.id" cols="12" sm="6" md="4">
        <v-card :href="work.url" target="_blank">
          <v-img
            :lazy-src="work.image || 'https://source.unsplash.com/random'"
            :src="work.image || 'https://source.unsplash.com/random'"
          ></v-img>

          <v-card-title>{{ work.title }}</v-card-title>
          <v-card-text>{{ work.description }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'WorksPage',
  async asyncData({ $content }) {
    const { works } = await $content('index').fetch();
    return { works };
  },
  head() {
    return {
      title: 'Mauro Cunsolo | Works',
    };
  },
};
</script>
