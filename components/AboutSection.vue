<template>
  <PageSection id="about">
    <v-container>
      <v-row class="card about__container">
        <v-col class="about__content text-center">
          <div class="uppercase font-bold">
            <span>Hello, <b class="text-emerald-600">my name is</b></span>
          </div>
          <h1 class="about__title uppercase text-7xl font-bold text-white mb-0">
            <b class="text-emerald-600">Mauro</b><br />Cunsolo
          </h1>
          <div class="uppercase font-bold">
            I am
            <strong class="font-[Caveat] text-emerald-600"
              >Backend Developer</strong
            >
          </div>

          <div class="pt-8">
            <p>
              Experienced Node.js back-end developer but deeply passionate about
              all the latest back-end, front-end and mobile technologies. I'm
              curious, love challenges but I hate monotony.
            </p>

            <div class="flex justify-center gap-2 mt-8">
              <social-links />
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </PageSection>
</template>
