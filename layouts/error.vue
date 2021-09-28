<template>
  <div class="space">
    <div class="stars"></div>
    <div class="central-body">
      <h1>{{ error.statusCode }}</h1>
      <h2>{{ errorTitle }}</h2>
      <div v-if="error.statusCode !== 404" class="message">
        {{ error.message }}
      </div>
      <NuxtLink class="mt-4 btn" :to="localePath('/')">go back home</NuxtLink>
    </div>

    <div class="objects">
      <img class="rocket" src="/rocket.svg" width="40px" />
      <img class="earth" src="/earth.svg" width="100px" />
      <img class="moon" src="/moon.svg" width="80px" />
      <div class="astronaut-box">
        <img class="astronaut" src="/astronaut.svg" width="140px" />
      </div>

      <div class="glowing-stars">
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: 'Looks like you are lost in space',
      otherError: 'Houston, we have a problem',
      errorTitle: '',
    };
  },
  head() {
    this.errorTitle =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title: this.errorTitle,
    };
  },
};
</script>

<style lang="scss">
.space {
  background: linear-gradient(to top, #283e51, #0a2342);
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  .stars {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    display: block;
    background: url('/stars.png') repeat top center;
    z-index: 0;
  }

  .central-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    z-index: 100;
    overflow: hidden;
    text-align: center;
    color: #f2f2f2;

    h1 {
      font-size: 9rem;
      font-weight: bold;
    }

    h2 {
      max-width: 33vw;
      font-size: 1.5rem;
      text-transform: uppercase;
      margin: 0;
    }

    .message {
      background-color: rgba(255, 0, 0, 0.4);
      padding: 10px;
      margin-top: 10px;
    }

    .btn {
      background-color: transparent;
      border-radius: 10px;

      &:hover {
        background-color: $primary-color;
        transform: scale(1.05);
        box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.1);
      }
    }
  }

  .objects {
    .rocket {
      position: absolute;
      transform: translateX(-50px);
      top: 75%;
      pointer-events: none;
      z-index: 8;
      animation: rocket-movement 200s linear infinite both running;
    }

    .earth {
      position: absolute;
      top: 20%;
      left: 15%;
      z-index: 5;
      transition: ease 200s !important;
      transform: rotate(-3600deg) !important;
    }

    .moon {
      position: absolute;
      top: 12%;
      left: 25%;
      z-index: 5;
      pointer-events: none;
    }

    .astronaut-box {
      z-index: 10;
      position: absolute;
      top: 60%;
      right: 20%;
      will-change: transform;
      animation: move-astronaut 50s infinite linear both alternate;

      .astronaut {
        animation: rotate-astronaut 200s infinite linear both alternate;
        pointer-events: none;
      }
    }
  }

  .glowing-stars {
    .star {
      position: absolute;
      border-radius: 100%;
      background-color: #fff;
      width: 2px;
      height: 2px;
      opacity: 0.5;
      will-change: opacity;
      box-shadow: 0px 0px 18px 2px white;
    }

    .star:nth-child(1) {
      top: 80%;
      left: 25%;
      animation: glow-star 2s infinite ease-in-out alternate 1s;
    }
    .star:nth-child(2) {
      top: 20%;
      left: 40%;
      animation: glow-star 2s infinite ease-in-out alternate 3s;
    }
    .star:nth-child(3) {
      top: 25%;
      left: 25%;
      animation: glow-star 2s infinite ease-in-out alternate 5s;
    }
    .star:nth-child(4) {
      top: 75%;
      left: 80%;
      animation: glow-star 2s infinite ease-in-out alternate 7s;
    }
    .star:nth-child(5) {
      top: 90%;
      left: 50%;
      animation: glow-star 2s infinite ease-in-out alternate 9s;
    }
  }
}

@media only screen and (max-width: 600px) {
  .astronaut-box {
    top: 70%;
  }

  .central-body {
    padding-top: 25%;
  }
}

@keyframes rocket-movement {
  100% {
    transform: translate(1200px, -600px);
  }
}
@keyframes spin-earth {
  100% {
    -webkit-transform: rotate(-360deg);
    transform: rotate(-360deg);
    transition: transform 20s;
  }
}
@keyframes move-astronaut {
  100% {
    -webkit-transform: translate(-160px, -160px);
    transform: translate(-160px, -160px);
  }
}
@keyframes rotate-astronaut {
  100% {
    -webkit-transform: rotate(-720deg);
    transform: rotate(-720deg);
  }
}
@keyframes glow-star {
  40% {
    -webkit-opacity: 0.3;
    opacity: 0.3;
  }
  90%,
  100% {
    -webkit-opacity: 1;
    opacity: 1;
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
    border-radius: 999999px;
  }
}
</style>
