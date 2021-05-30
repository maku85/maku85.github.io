<template>
  <div class="social-links">
    <ul>
      <li>Share:</li>
      <li>
        <ShareNetwork
          network="facebook"
          url="https://news.vuejs.org/issues/180"
          title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
          description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
          quote="The hot reload is so fast it\'s near instant. - Evan You"
          hashtags="vuejs,vite"
        >
          <v-icon>mdi-facebook</v-icon>
        </ShareNetwork>
      </li>
      <li>
        <ShareNetwork
          network="twitter"
          url="https://news.vuejs.org/issues/180"
          title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
          quote="The hot reload is so fast it\'s near instant. - Evan You"
          hashtags="vuejs,vite"
        >
          <v-icon>mdi-twitter</v-icon>
        </ShareNetwork>
      </li>
      <li>
        <ShareNetwork
          network="linkedin"
          url="https://news.vuejs.org/issues/180"
        >
          <v-icon>mdi-linkedin</v-icon>
        </ShareNetwork>
      </li>
      <li>
        <ShareNetwork
          network="telegram"
          url="https://news.vuejs.org/issues/180"
          title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
          description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
        >
          <v-icon>mdi-telegram</v-icon>
        </ShareNetwork>
      </li>
      <li>
        <ShareNetwork
          network="whatsapp"
          url="https://news.vuejs.org/issues/180"
          title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
          description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
        >
          <v-icon>mdi-whatsapp</v-icon>
        </ShareNetwork>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.social-links {
  ul {
    padding-left: 0;
    list-style: none;
  }
  li {
    display: inline-block;
    margin-right: 5px;
  }
}
.mdi-facebook {
  color: $social-facebook;
}
.mdi-twitter {
  color: $social-twitter;
}
.mdi-linkedin {
  color: $social-linkedin;
}
.mdi-telegram {
  color: $social-telegram;
}
.mdi-whatsapp {
  color: $social-whatsapp;
}
</style>
