<template>
  <footer class="footer">
    <v-container>
      <v-row class="body">
        <v-col cols="12" sm="12" md="6" class="d-flex justify-center align-center"><div><social-links /></div></v-col>
        <v-col cols="12" sm="12" md="6" class="d-flex justify-center align-center">
          <p class="copyright-text">&copy; Mauro 2021 | All Right Reserved</p>
        </v-col>
      </v-row>
    </v-container>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  border-top: 1px solid rgba(0, 0, 0, 0.1);

  .body {
    padding: 10px 0;

    .copyright-text {
      opacity: 0.8;
      text-align: end;
      font-size: 13px;
      font-weight: 500;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
  }
}
</style>
