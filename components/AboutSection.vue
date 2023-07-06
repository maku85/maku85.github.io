<template>
  <PageSection id="about">
    <div class="card align-items-center d-flex">
      <v-row cols="12" class="content">
        <v-col sm="8" class="titles">
          <div class="subtitle">
            <span>Hello, <b>my name is</b></span>
          </div>
          <h1 class="d-xs-none title"><b>Mauro</b> Cunsolo</h1>
          <div class="subtitle">I am <strong>Backend Developer</strong></div>

          <div class="description">
            <p>
              From France, Paris. I have rich experience in web design, also I am good at wordpress.
              I love to talk with you about our unique.
            </p>

            <div class="d-flex flex-column">
              <social-links class="social-links" />
            </div>
          </div>
        </v-col>

        <v-col sm="4" class="d-none d-sm-flex flex-row align-center image-container">
          <v-img
            height="300"
            width="300"
            src="https://www.maurocunsolo.com/img_avatar.webp"
            class="profile-picture"
            cover
          ></v-img>
        </v-col>
      </v-row>
    </div>

    <div class="bgtitle"><span>Backend Developer</span></div>
  </PageSection>
</template>

<style lang="scss">
@import '../assets/sass/variables';

#about {
  max-width: 1000px;

  .content {
    position: relative;
    z-index: 1;

    .title {
      font-family: '"Jost",sans-serif';
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
        color: #29a587;
      }
    }

    .subtitle {
      font-size: 15px;
      font-weight: 700;
      color: #000;
      text-transform: uppercase;
      letter-spacing: 0.05em;

      b {
        color: #29a587;
      }

      strong {
        font-family: 'Caveat';
        font-size: 30px;
        font-weight: 700;
        letter-spacing: 0;
        text-transform: none;
        margin-left: 2px;
        color: #000;
      }
    }

    .description {
      padding: 40px 0;
      font-size: 18px;
      max-width: 520px;

      .social-links {
        position: relative;
        margin-top: 30px;
        line-height: 1;
      }
    }

    .profile-picture {
      border-radius: 50%;
      background-size: cover;
      background-position: 0px -10px;
    }
  }

  .bgtitle {
    position: relative;
    top: -50px;
    left: -50%;
    width: 200%;
    font-size: 180px;
    font-family: "Caveat";
    color: rgba(0,0,0,.02);
    font-weight: 700;
    line-height: 1px;
    text-align: center;
    white-space: nowrap;
    pointer-events: none;
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

    .bgtitle {
      font-size: 60px;
    }
  }
}
</style>
