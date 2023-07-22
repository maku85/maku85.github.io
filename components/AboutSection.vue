<template>
  <PageSection id="about">
    <div class="card align-items-center d-flex">
      <v-row cols="12" class="content">
        <v-col sm="8" class="titles">
          <div class="subtitle"><span>Hello, <b>my name is</b></span></div>
          <h1 class="d-xs-none title"><b>Mauro</b> Cunsolo</h1>
          <div class="subtitle">I am <strong>Backend Developer</strong></div>

          <div class="description">
            <p>
              Experienced Node.js back-end developer but deeply passionate about all the latest back-end, front-end and mobile technologies.
I'm curious, love challenges but I hate monotony.
            </p>

            <div class="d-flex flex-column">
              <social-links class="social-links" />
            </div>
          </div>
        </v-col>

        <v-col sm="4" class="d-none d-sm-flex flex-row align-center">
          <v-img
            height="300"
            width="200"
            src="https://www.maurocunsolo.com/img_avatar.webp"
            class="profile-picture img-circle"
            cover
          ></v-img>
        </v-col>
      </v-row>
    </div>
  </PageSection>
</template>

<style lang="scss" scoped>
@import '../assets/sass/variables';

#about {
  max-width: 1000px;

  .content {
    position: relative;
    z-index: 1;

    .title {
      font-size: 90px;
      line-height: 1.2;
      color: #fff;
      font-weight: 700;
      margin: 15px 0 0;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      text-shadow: 2px 2px #000, -2px 2px #000, 2px -2px #000, -2px -2px #000,
        5px 5px 0px rgba(0, 0, 0, 0.2);

      b {
        color: $primary;
      }
    }

    .subtitle {
      font-size: 15px;
      font-weight: 700;
      color: $subtitle;
      text-transform: uppercase;
      letter-spacing: 0.05em;

      b {
        color: $primary;
      }

      strong {
        font-family: 'Caveat';
        font-size: 30px;
        font-weight: 700;
        letter-spacing: 0;
        text-transform: none;
        margin-left: 2px;
      }
    }

    .description {
      padding-top: 40px;
      font-size: 18px;
      max-width: 520px;

      .social-links {
        margin-top: 30px;
      }
    }
  }
}

@media screen and (max-width: 767px) {
  #about {
    .content {
      .titles {
        text-align: center;

        .title {
          font-size: 50px;
        }
      }
    }
  }
}
</style>
