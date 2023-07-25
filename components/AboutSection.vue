<template>
  <PageSection id="about">
    <v-container>
      <v-row class="card about__container">
        <v-col cols="12" xs="12" md="8" class="about__content">
          <div class="about__subtitle">
            <span>Hello, <b>my name is</b></span>
          </div>
          <h1 class="about__title"><b>Mauro</b> Cunsolo</h1>
          <div class="about__subtitle">I am <strong>Backend Developer</strong></div>

          <div class="about__description">
            <p>
              Experienced Node.js back-end developer but deeply passionate about all the latest
              back-end, front-end and mobile technologies. I'm curious, love challenges but I hate
              monotony.
            </p>

            <social-links class="social-links" />
          </div>
        </v-col>

        <v-col cols="12" sm="4" class="d-none d-md-flex about__img-container">
          <v-img
            height="300"
            width="200"
            src="/img/img_avatar.webp"
            class="about__img img-circle"
            alt="Avatar"
            cover
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
  </PageSection>
</template>
