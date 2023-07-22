<script setup>
defineProps(['prev', 'next']);
</script>

<template>
  <v-row>
    <v-col cols="12" xs="12" class="prev" v-if="prev?.title">
      <NuxtLink :to="'/notes' + prev?._path">
        <div class="label"><v-icon>mdi-arrow-left</v-icon> Previous article</div>
        <div class="title">{{ prev?.title }}</div>
      </NuxtLink>
    </v-col>
    <v-col cols="12" xs="12" class="next" v-if="next?.title">
      <NuxtLink :to="'/notes' + next._path">
        <div class="label">Next article <v-icon>mdi-arrow-right</v-icon></div>
        <div class="title">{{ next.title }}</div>
      </NuxtLink>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
@import '../assets/sass/variables';

.label {
  margin-bottom: 30px;
  position: relative;
  display: block;
  font-size: 14px;
  line-height: 20px;
  color: $title;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.title {
  font-size: 48px;
  margin-top: 0;
  margin-bottom: 0;
  line-height: 1;
  color: $title;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.next {
  .label,
  .title {
    text-align: right;
  }
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .label {
    font-size: 12px;
    margin-bottom: 15px;
  }

  .title {
    font-size: 18px;
  }

  .next {
    margin-top: 15px;
  }
}
</style>
