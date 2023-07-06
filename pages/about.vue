<script lang="ts" setup>
const { data: settings } = await useAsyncData('/', () => queryContent('/').findOne());
</script>

<template>
  <Page id="about">
    <PageTitle text="About me" subtitle=" Story" />

    <v-row cols="12">
      <v-col xs="6" class="history-container">
        <h5 class="history-title">Experience</h5>

        <div class="history-items">
          <div
            v-for="(experience, index) of settings.experiences"
            :key="index"
            class="history-item"
          >
            <h6 class="name">
              <span>{{ experience.title }}</span>
            </h6>
            <div class="content">
              <div class="subname">{{ experience.company }}</div>
              <div class="date">
                {{ experience.startDate }} - <b v-if="!experience.endDate">Present</b
                ><span v-if="experience.endDate">{{ experience.endDate }}</span>
              </div>
              <div class="text">
                <p v-html="experience.description"></p>
              </div>
            </div>
          </div>
        </div>
      </v-col>

      <v-col xs="6" class="history-container">
        <h5 class="history-title">Skills</h5>

        <div class="skills-items">
          <div v-for="(expertise, index) of settings.expertises" :key="index" class="skills-item">
            <h6 class="name">{{ expertise.title }}</h6>
            <div class="text">
              <p>{{ expertise.description }}</p>
            </div>
            <div class="dots">
              <div class="dot" :style="{ width: expertise.value + '%' }"><span></span></div>
            </div>
            <div class="value">
              <span class="num">{{ expertise.value }}<span>%</span></span>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </Page>
</template>

<style lang="scss">
@import '../assets/sass/variables';

.history-container {
  padding: 40px;
}

.history-title {
  margin: 0;
  padding: 0 0 30px;
  line-height: 1;
  text-align: center;
}

.history-items {
  position: relative;

  .history-item {
    border-right: 2px solid;
    border-bottom: 2px solid #000;
    position: relative;

    .name {
      padding: 30px;

      &:after {
        content: '';
        position: absolute;
        right: -24px;
        bottom: -24px;
        width: 48px;
        height: 48px;
        line-height: 40px;
        background: #fff;
        border-radius: 50%;
        border: 2px solid #000;
        box-shadow: 5px 5px rgb(0 0 0/20%);
        font-weight: 400;
        font-size: 30px;
        text-align: center;
        transition: all 1.2s cubic-bezier(0.3, 0, 0.3, 1);
        -webkit-transition: all 1.2s cubic-bezier(0.3, 0, 0.3, 1);
        z-index: 2;
      }
    }

    .content {
      padding: 0 50px 0 30px;

      .subname {
        float: left;
        width: 70%;
        font-family: 'Caveat';
        font-size: 28px;
        line-height: 40px;
        font-weight: 700;
        color: #000;
      }

      .date {
        float: right;
        line-height: 46px;
        font-size: 13px;
        font-weight: 700;
        color: #000;
        text-transform: uppercase;
        letter-spacing: 0.05em;

        b {
          color: #29a587;
        }
      }

      .text {
        padding: 15px 0 30px;
        clear: both;
      }
    }
  }
}

.skills-items {
  padding-top: 20px;

  .skills-item {
    margin-bottom: 70px;
    position: relative;

    .name {
      margin: 0 30px 20px;
      line-height: 20px;
    }

    .text {
      margin: 0 30px 30px;
    }

    .dots {
      position: relative;
      height: 2px;
      background: rgba(0, 0, 0, 0.1);

      .dot {
        position: relative;
        display: block;
        width: 0;
        height: 2px;
        background: #000;
        transition: all 0.6s cubic-bezier(0.3, 0, 0.3, 1);
        -webkit-transition: all 0.6s cubic-bezier(0.3, 0, 0.3, 1);

        span {
          border: 2px solid #000;
          border-radius: 50%;
          background-color: #29a587;
          box-shadow: 5px 5px rgba(0, 0, 0, 0.2);
          position: absolute;
          right: 0;
          top: -12px;
          width: 25px;
          height: 25px;
        }
      }
    }

    .value {
      position: absolute;
      top: 0;
      right: 30px;

      .num {
        display: inline-block;
        vertical-align: top;
        font-weight: 700;
        color: #000;
        height: 20px;
        line-height: 20px;

        span {
          color: #29a587;
        }
      }
    }
  }
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .history-container {
    padding: 10px;
  }
}
</style>
