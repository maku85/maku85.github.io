<template>
  <v-container id="contact" class="contact-page section section-contact">
    <div>
      <p class="text-center">
        {{ $t('contact-description') }}
      </p>

      <div class="text-center">
        <social-links :links="socials"> </social-links>
      </div>

      <div class="contact-wrapper mt-5">
        <v-card class="contact-content">
          <v-form
            ref="form"
            v-model="valid"
            method="post"
            action="https://api.staticforms.xyz/submit"
          >
            <v-row class="px-4 py-2">
              <v-col cols="12" sm="6" md="7">
                <v-textarea
                  v-model="message"
                  :rules="messageRules"
                  name="message"
                  cols="30"
                  rows="14"
                  :label="$t('contact-message')"
                ></v-textarea>
              </v-col>

              <v-col cols="12" sm="6" md="5">
                <v-row>
                  <v-col>
                    <div class="stamp-container">
                      <div class="text-stamp">
                        <h1>{{ $t('contact-priority') }}</h1>
                      </div>
                      <div class="stamp">
                        <img src="//picsum.photos/320" />
                      </div>
                    </div>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="name"
                      :rules="nameRules"
                      name="name"
                      :label="$t('contact-name')"
                      required
                    ></v-text-field>
                    <v-text-field
                      v-model="email"
                      :rules="emailRules"
                      name="email"
                      :label="$t('contact-email')"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col class="d-flex flex-column align-end">
                    <v-btn
                      :disabled="!valid"
                      depressed
                      type="submit"
                      aria-label="Submit"
                      @click="submitForm"
                      >{{ $t('contact-send') }}</v-btn
                    >
                  </v-col>
                </v-row>
              </v-col>
            </v-row>

            <input type="text" name="honeypot" style="display: none" />
            <input type="hidden" name="accessKey" value="7609172f-47de-439f-a2eb-813fa687acc8" />
            <input type="hidden" name="redirectTo" :value="`${hostname}${$nuxt.$route.path}`" />
          </v-form>
        </v-card>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'ContactPage',
  async asyncData({ $content }) {
    return await $content('index').fetch();
  },
  data: () => ({
    valid: true,
    name: '',
    nameRules: [(v) => (v && v.length) || 'Name is required'],
    email: '',
    emailRules: [
      (v) => (v && v.length) || 'E-mail is required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    message: '',
    messageRules: [(v) => (v && v.length) || 'Message is required'],
  }),
  head() {
    return {
      title: 'Mauro Cunsolo | Contact',
    };
  },
  computed: {
    hostname() {
      return process.env.hostname;
    },
  },
  methods: {
    submitForm() {
      this.$refs.form.validate();
    },
  },
};
</script>

<style lang="scss">
.contact-page {
  margin-top: 40px;

  .contact-wrapper {
    background-image: url('/robot.jpg');
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    padding: 30px;

    input {
      border: none;
      border-bottom: 3px dotted #eee;
    }
    textarea {
      border: none;
      border-right: 4px solid #eee;
      border-radius: 2px;
      border: 3px dotted #eee;
      resize: none;
    }
    .btn {
      float: right;
    }
    .text-stamp h1 {
      border: 5px solid red;
      color: red;
      font-size: 2.5em;
      mask-image: url('/grunge-texture.png');
      -webkit-mask-size: contain;
      -webkit-mask-image: url('/grunge-texture.png');
      -o-mask-image: url('/grunge-texture.png');
      -moz-mask-image: url('/grunge-texture.png');
      -ms-mask-image: url('/grunge-texture.png');
      opacity: 0.6;
      padding: 0px 25px;
      position: absolute;
      right: 55px;
      top: 45px;
      transform: rotate(-30deg);
      z-index: 1;
    }
    .stamp {
      border-image: url('data:image/svg+xml;utf8,%3Csvg%20%20%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20%20%20xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22%20%20%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%20%20%20xmlns%3Asvg%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20%20%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20%20%20id%3D%22svg30%22%20%20%20version%3D%221.1%22%20%20%20viewBox%3D%220%200%2079.37503%2079.375035%22%20%20%20height%3D%22300.00012%22%20%20%20width%3D%22300.00012%22%3E%20%20%3Cdefs%20%20%20%20%20id%3D%22defs24%22%20%2F%3E%20%20%3Cmetadata%20%20%20%20%20id%3D%22metadata27%22%3E%20%20%20%20%3Crdf%3ARDF%3E%20%20%20%20%20%20%3Ccc%3AWork%20%20%20%20%20%20%20%20%20rdf%3Aabout%3D%22%22%3E%20%20%20%20%20%20%20%20%3Cdc%3Aformat%3Eimage%2Fsvg%2Bxml%3C%2Fdc%3Aformat%3E%20%20%20%20%20%20%20%20%3Cdc%3Atype%20%20%20%20%20%20%20%20%20%20%20rdf%3Aresource%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fdcmitype%2FStillImage%22%20%2F%3E%20%20%20%20%20%20%20%20%3Cdc%3Atitle%3E%3C%2Fdc%3Atitle%3E%20%20%20%20%20%20%3C%2Fcc%3AWork%3E%20%20%20%20%3C%2Frdf%3ARDF%3E%20%20%3C%2Fmetadata%3E%20%20%3Cg%20%20%20%20%20transform%3D%22translate(0%2C-217.62496)%22%20%20%20%20%20id%3D%22layer1%22%3E%20%20%20%20%3Cpath%20%20%20%20%20%20%20id%3D%22rect3739%22%20%20%20%20%20%20%20transform%3D%22scale(0.26458333)%22%20%20%20%20%20%20%20d%3D%22M%2057.357422%2C822.51953%20A%2079.999997%2C79.999997%200%200%201%200%2C879.91797%20v%2042.60156%20h%20100%20v%20-100%20z%22%20%20%20%20%20%20%20style%3D%22fill%3A%23ffffff%3Bstroke%3Anone%3Bstroke-width%3A3.99999976%3Bstroke-miterlimit%3A4%3Bstroke-dasharray%3Anone%3Bstroke-opacity%3A1%3Bfill-opacity%3A1%3Bopacity%3A1%22%20%2F%3E%20%20%20%20%3Cpath%20%20%20%20%20%20%20id%3D%22rect4551%22%20%20%20%20%20%20%20transform%3D%22scale(0.26458333)%22%20%20%20%20%20%20%20d%3D%22m%20100%2C822.51953%20v%20100%20h%20100%20v%20-100%20h%20-15.76562%20a%2039.285714%2C110%200%200%201%20-34.94922%2C60%2039.285714%2C110%200%200%201%20-34.99024%2C-60%20z%22%20%20%20%20%20%20%20style%3D%22fill%3A%23ffffff%3Bstroke%3Anone%3Bstroke-width%3A3.99999976%3Bstroke-miterlimit%3A4%3Bstroke-dasharray%3Anone%3Bstroke-opacity%3A1%3Bfill-opacity%3A1%3Bopacity%3A1%22%20%2F%3E%20%20%20%20%3Cpath%20%20%20%20%20%20%20id%3D%22rect4551-6%22%20%20%20%20%20%20%20d%3D%22M%2052.916667%2C296.99999%20V%20270.54166%20H%2026.458334%20v%2026.45833%20h%204.17132%20a%2010.394345%2C29.104167%201.864837e-6%200%201%209.246981%2C-15.875%2010.394345%2C29.104167%201.864837e-6%200%201%209.257834%2C15.875%20z%22%20%20%20%20%20%20%20style%3D%22fill%3A%23ffffff%3Bstroke%3Anone%3Bstroke-width%3A1.05833328%3Bstroke-miterlimit%3A4%3Bstroke-dasharray%3Anone%3Bstroke-opacity%3A1%3Bfill-opacity%3A1%3Bopacity%3A1%22%20%2F%3E%20%20%20%20%3Cpath%20%20%20%20%20%20%20id%3D%22rect4551-9%22%20%20%20%20%20%20%20d%3D%22m%203.6694232e-6%2C270.54158%2026.4583303305768%2C8e-5%208.1e-5%2C-26.45833%20-26.458330930577%2C-8e-5%20-1.27e-5%2C4.17132%20A%2029.104167%2C10.394345%201.7425496e-4%200%201%2015.875044%2C257.5016%2029.104167%2C10.394345%201.7425496e-4%200%201%201.5169423e-5%2C266.75938%20Z%22%20%20%20%20%20%20%20style%3D%22fill%3A%23ffffff%3Bstroke%3Anone%3Bstroke-width%3A1.05833328%3Bstroke-miterlimit%3A4%3Bstroke-dasharray%3Anone%3Bstroke-opacity%3A1%3Bfill-opacity%3A1%3Bopacity%3A1%22%20%2F%3E%20%20%20%20%3Cpath%20%20%20%20%20%20%20id%3D%22rect4551-3%22%20%20%20%20%20%20%20d%3D%22m%2079.375035%2C244.08333%20-26.45833%2C-8e-5%20-7.5e-5%2C26.45833%2026.45833%2C8e-5%201.2e-5%2C-4.17132%20a%2029.104167%2C10.394345%201.6162321e-4%200%201%20-15.874974%2C-9.24703%2029.104167%2C10.394345%201.6162321e-4%200%201%2015.875026%2C-9.25779%20z%22%20%20%20%20%20%20%20style%3D%22fill%3A%23ffffff%3Bstroke%3Anone%3Bstroke-width%3A1.05833328%3Bstroke-miterlimit%3A4%3Bstroke-dasharray%3Anone%3Bstroke-opacity%3A1%3Bfill-opacity%3A1%3Bopacity%3A1%22%20%2F%3E%20%20%20%20%3Cpath%20%20%20%20%20%20%20id%3D%22rect3739-9%22%20%20%20%20%20%20%20d%3D%22M%2079.375028%2C232.80089%20A%2021.166666%2C21.166666%200%200%201%2064.1884%2C217.62503%20l%20-11.27166%2C-3e-5%20-7.3e-5%2C26.45833%2026.45833%2C8e-5%20z%22%20%20%20%20%20%20%20style%3D%22fill%3A%23ffffff%3Bstroke%3Anone%3Bstroke-width%3A1.05833328%3Bstroke-miterlimit%3A4%3Bstroke-dasharray%3Anone%3Bstroke-opacity%3A1%3Bfill-opacity%3A1%3Bopacity%3A1%22%20%2F%3E%20%20%20%20%3Cpath%20%20%20%20%20%20%20id%3D%22rect3739-0%22%20%20%20%20%20%20%20d%3D%22m%2064.199251%2C296.99996%20a%2021.166666%2C21.166666%200%200%201%2015.17577%2C-15.18672%20l%20-3e-5%2C-11.27166%20-26.458324%2C8e-5%207e-5%2C26.45833%20z%22%20%20%20%20%20%20%20style%3D%22fill%3A%23ffffff%3Bstroke%3Anone%3Bstroke-width%3A1.05833328%3Bstroke-miterlimit%3A4%3Bstroke-dasharray%3Anone%3Bstroke-opacity%3A1%3Bfill-opacity%3A1%3Bopacity%3A1%22%20%2F%3E%20%20%20%20%3Cpath%20%20%20%20%20%20%20id%3D%22rect3739-7%22%20%20%20%20%20%20%20d%3D%22m%20-6.5e-6%2C281.82418%20a%2021.166666%2C21.166666%200%200%201%2015.1866805%2C15.17581%20h%2011.27166%20l%20-10e-6%2C-26.45834%20-26.4583305%2C10e-6%20z%22%20%20%20%20%20%20%20style%3D%22fill%3A%23ffffff%3Bstroke%3Anone%3Bstroke-width%3A1.05833328%3Bstroke-miterlimit%3A4%3Bstroke-dasharray%3Anone%3Bstroke-opacity%3A1%3Bfill-opacity%3A1%3Bopacity%3A1%22%20%2F%3E%20%20%20%20%3Crect%20%20%20%20%20%20%20y%3D%22244.08333%22%20%20%20%20%20%20%20x%3D%2226.458332%22%20%20%20%20%20%20%20height%3D%2226.458332%22%20%20%20%20%20%20%20width%3D%2226.458332%22%20%20%20%20%20%20%20id%3D%22rect4613%22%20%20%20%20%20%20%20style%3D%22fill%3A%23ffffff%3Bstroke%3Anone%3Bstroke-width%3A1.05833328%3Bstroke-miterlimit%3A4%3Bstroke-dasharray%3Anone%3Bstroke-opacity%3A1%3Bfill-opacity%3A1%3Bopacity%3A1%22%20%2F%3E%20%20%3C%2Fg%3E%3C%2Fsvg%3E')
        100 /*slice*/ round /*repeat*/;
      -webkit-border-image: url('data:image/svg+xml;utf8,%3Csvg%20%20%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20%20%20xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22%20%20%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%20%20%20xmlns%3Asvg%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20%20%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20%20%20id%3D%22svg30%22%20%20%20version%3D%221.1%22%20%20%20viewBox%3D%220%200%2079.37503%2079.375035%22%20%20%20height%3D%22300.00012%22%20%20%20width%3D%22300.00012%22%3E%20%20%3Cdefs%20%20%20%20%20id%3D%22defs24%22%20%2F%3E%20%20%3Cmetadata%20%20%20%20%20id%3D%22metadata27%22%3E%20%20%20%20%3Crdf%3ARDF%3E%20%20%20%20%20%20%3Ccc%3AWork%20%20%20%20%20%20%20%20%20rdf%3Aabout%3D%22%22%3E%20%20%20%20%20%20%20%20%3Cdc%3Aformat%3Eimage%2Fsvg%2Bxml%3C%2Fdc%3Aformat%3E%20%20%20%20%20%20%20%20%3Cdc%3Atype%20%20%20%20%20%20%20%20%20%20%20rdf%3Aresource%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fdcmitype%2FStillImage%22%20%2F%3E%20%20%20%20%20%20%20%20%3Cdc%3Atitle%3E%3C%2Fdc%3Atitle%3E%20%20%20%20%20%20%3C%2Fcc%3AWork%3E%20%20%20%20%3C%2Frdf%3ARDF%3E%20%20%3C%2Fmetadata%3E%20%20%3Cg%20%20%20%20%20transform%3D%22translate(0%2C-217.62496)%22%20%20%20%20%20id%3D%22layer1%22%3E%20%20%20%20%3Cpath%20%20%20%20%20%20%20id%3D%22rect3739%22%20%20%20%20%20%20%20transform%3D%22scale(0.26458333)%22%20%20%20%20%20%20%20d%3D%22M%2057.357422%2C822.51953%20A%2079.999997%2C79.999997%200%200%201%200%2C879.91797%20v%2042.60156%20h%20100%20v%20-100%20z%22%20%20%20%20%20%20%20style%3D%22fill%3A%23ffffff%3Bstroke%3Anone%3Bstroke-width%3A3.99999976%3Bstroke-miterlimit%3A4%3Bstroke-dasharray%3Anone%3Bstroke-opacity%3A1%3Bfill-opacity%3A1%3Bopacity%3A1%22%20%2F%3E%20%20%20%20%3Cpath%20%20%20%20%20%20%20id%3D%22rect4551%22%20%20%20%20%20%20%20transform%3D%22scale(0.26458333)%22%20%20%20%20%20%20%20d%3D%22m%20100%2C822.51953%20v%20100%20h%20100%20v%20-100%20h%20-15.76562%20a%2039.285714%2C110%200%200%201%20-34.94922%2C60%2039.285714%2C110%200%200%201%20-34.99024%2C-60%20z%22%20%20%20%20%20%20%20style%3D%22fill%3A%23ffffff%3Bstroke%3Anone%3Bstroke-width%3A3.99999976%3Bstroke-miterlimit%3A4%3Bstroke-dasharray%3Anone%3Bstroke-opacity%3A1%3Bfill-opacity%3A1%3Bopacity%3A1%22%20%2F%3E%20%20%20%20%3Cpath%20%20%20%20%20%20%20id%3D%22rect4551-6%22%20%20%20%20%20%20%20d%3D%22M%2052.916667%2C296.99999%20V%20270.54166%20H%2026.458334%20v%2026.45833%20h%204.17132%20a%2010.394345%2C29.104167%201.864837e-6%200%201%209.246981%2C-15.875%2010.394345%2C29.104167%201.864837e-6%200%201%209.257834%2C15.875%20z%22%20%20%20%20%20%20%20style%3D%22fill%3A%23ffffff%3Bstroke%3Anone%3Bstroke-width%3A1.05833328%3Bstroke-miterlimit%3A4%3Bstroke-dasharray%3Anone%3Bstroke-opacity%3A1%3Bfill-opacity%3A1%3Bopacity%3A1%22%20%2F%3E%20%20%20%20%3Cpath%20%20%20%20%20%20%20id%3D%22rect4551-9%22%20%20%20%20%20%20%20d%3D%22m%203.6694232e-6%2C270.54158%2026.4583303305768%2C8e-5%208.1e-5%2C-26.45833%20-26.458330930577%2C-8e-5%20-1.27e-5%2C4.17132%20A%2029.104167%2C10.394345%201.7425496e-4%200%201%2015.875044%2C257.5016%2029.104167%2C10.394345%201.7425496e-4%200%201%201.5169423e-5%2C266.75938%20Z%22%20%20%20%20%20%20%20style%3D%22fill%3A%23ffffff%3Bstroke%3Anone%3Bstroke-width%3A1.05833328%3Bstroke-miterlimit%3A4%3Bstroke-dasharray%3Anone%3Bstroke-opacity%3A1%3Bfill-opacity%3A1%3Bopacity%3A1%22%20%2F%3E%20%20%20%20%3Cpath%20%20%20%20%20%20%20id%3D%22rect4551-3%22%20%20%20%20%20%20%20d%3D%22m%2079.375035%2C244.08333%20-26.45833%2C-8e-5%20-7.5e-5%2C26.45833%2026.45833%2C8e-5%201.2e-5%2C-4.17132%20a%2029.104167%2C10.394345%201.6162321e-4%200%201%20-15.874974%2C-9.24703%2029.104167%2C10.394345%201.6162321e-4%200%201%2015.875026%2C-9.25779%20z%22%20%20%20%20%20%20%20style%3D%22fill%3A%23ffffff%3Bstroke%3Anone%3Bstroke-width%3A1.05833328%3Bstroke-miterlimit%3A4%3Bstroke-dasharray%3Anone%3Bstroke-opacity%3A1%3Bfill-opacity%3A1%3Bopacity%3A1%22%20%2F%3E%20%20%20%20%3Cpath%20%20%20%20%20%20%20id%3D%22rect3739-9%22%20%20%20%20%20%20%20d%3D%22M%2079.375028%2C232.80089%20A%2021.166666%2C21.166666%200%200%201%2064.1884%2C217.62503%20l%20-11.27166%2C-3e-5%20-7.3e-5%2C26.45833%2026.45833%2C8e-5%20z%22%20%20%20%20%20%20%20style%3D%22fill%3A%23ffffff%3Bstroke%3Anone%3Bstroke-width%3A1.05833328%3Bstroke-miterlimit%3A4%3Bstroke-dasharray%3Anone%3Bstroke-opacity%3A1%3Bfill-opacity%3A1%3Bopacity%3A1%22%20%2F%3E%20%20%20%20%3Cpath%20%20%20%20%20%20%20id%3D%22rect3739-0%22%20%20%20%20%20%20%20d%3D%22m%2064.199251%2C296.99996%20a%2021.166666%2C21.166666%200%200%201%2015.17577%2C-15.18672%20l%20-3e-5%2C-11.27166%20-26.458324%2C8e-5%207e-5%2C26.45833%20z%22%20%20%20%20%20%20%20style%3D%22fill%3A%23ffffff%3Bstroke%3Anone%3Bstroke-width%3A1.05833328%3Bstroke-miterlimit%3A4%3Bstroke-dasharray%3Anone%3Bstroke-opacity%3A1%3Bfill-opacity%3A1%3Bopacity%3A1%22%20%2F%3E%20%20%20%20%3Cpath%20%20%20%20%20%20%20id%3D%22rect3739-7%22%20%20%20%20%20%20%20d%3D%22m%20-6.5e-6%2C281.82418%20a%2021.166666%2C21.166666%200%200%201%2015.1866805%2C15.17581%20h%2011.27166%20l%20-10e-6%2C-26.45834%20-26.4583305%2C10e-6%20z%22%20%20%20%20%20%20%20style%3D%22fill%3A%23ffffff%3Bstroke%3Anone%3Bstroke-width%3A1.05833328%3Bstroke-miterlimit%3A4%3Bstroke-dasharray%3Anone%3Bstroke-opacity%3A1%3Bfill-opacity%3A1%3Bopacity%3A1%22%20%2F%3E%20%20%20%20%3Crect%20%20%20%20%20%20%20y%3D%22244.08333%22%20%20%20%20%20%20%20x%3D%2226.458332%22%20%20%20%20%20%20%20height%3D%2226.458332%22%20%20%20%20%20%20%20width%3D%2226.458332%22%20%20%20%20%20%20%20id%3D%22rect4613%22%20%20%20%20%20%20%20style%3D%22fill%3A%23ffffff%3Bstroke%3Anone%3Bstroke-width%3A1.05833328%3Bstroke-miterlimit%3A4%3Bstroke-dasharray%3Anone%3Bstroke-opacity%3A1%3Bfill-opacity%3A1%3Bopacity%3A1%22%20%2F%3E%20%20%3C%2Fg%3E%3C%2Fsvg%3E')
        100 /*slice*/ round /*repeat*/;
      -o-border-image: url('data:image/svg+xml;utf8,%3Csvg%20%20%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20%20%20xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22%20%20%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%20%20%20xmlns%3Asvg%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20%20%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20%20%20id%3D%22svg30%22%20%20%20version%3D%221.1%22%20%20%20viewBox%3D%220%200%2079.37503%2079.375035%22%20%20%20height%3D%22300.00012%22%20%20%20width%3D%22300.00012%22%3E%20%20%3Cdefs%20%20%20%20%20id%3D%22defs24%22%20%2F%3E%20%20%3Cmetadata%20%20%20%20%20id%3D%22metadata27%22%3E%20%20%20%20%3Crdf%3ARDF%3E%20%20%20%20%20%20%3Ccc%3AWork%20%20%20%20%20%20%20%20%20rdf%3Aabout%3D%22%22%3E%20%20%20%20%20%20%20%20%3Cdc%3Aformat%3Eimage%2Fsvg%2Bxml%3C%2Fdc%3Aformat%3E%20%20%20%20%20%20%20%20%3Cdc%3Atype%20%20%20%20%20%20%20%20%20%20%20rdf%3Aresource%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fdcmitype%2FStillImage%22%20%2F%3E%20%20%20%20%20%20%20%20%3Cdc%3Atitle%3E%3C%2Fdc%3Atitle%3E%20%20%20%20%20%20%3C%2Fcc%3AWork%3E%20%20%20%20%3C%2Frdf%3ARDF%3E%20%20%3C%2Fmetadata%3E%20%20%3Cg%20%20%20%20%20transform%3D%22translate(0%2C-217.62496)%22%20%20%20%20%20id%3D%22layer1%22%3E%20%20%20%20%3Cpath%20%20%20%20%20%20%20id%3D%22rect3739%22%20%20%20%20%20%20%20transform%3D%22scale(0.26458333)%22%20%20%20%20%20%20%20d%3D%22M%2057.357422%2C822.51953%20A%2079.999997%2C79.999997%200%200%201%200%2C879.91797%20v%2042.60156%20h%20100%20v%20-100%20z%22%20%20%20%20%20%20%20style%3D%22fill%3A%23ffffff%3Bstroke%3Anone%3Bstroke-width%3A3.99999976%3Bstroke-miterlimit%3A4%3Bstroke-dasharray%3Anone%3Bstroke-opacity%3A1%3Bfill-opacity%3A1%3Bopacity%3A1%22%20%2F%3E%20%20%20%20%3Cpath%20%20%20%20%20%20%20id%3D%22rect4551%22%20%20%20%20%20%20%20transform%3D%22scale(0.26458333)%22%20%20%20%20%20%20%20d%3D%22m%20100%2C822.51953%20v%20100%20h%20100%20v%20-100%20h%20-15.76562%20a%2039.285714%2C110%200%200%201%20-34.94922%2C60%2039.285714%2C110%200%200%201%20-34.99024%2C-60%20z%22%20%20%20%20%20%20%20style%3D%22fill%3A%23ffffff%3Bstroke%3Anone%3Bstroke-width%3A3.99999976%3Bstroke-miterlimit%3A4%3Bstroke-dasharray%3Anone%3Bstroke-opacity%3A1%3Bfill-opacity%3A1%3Bopacity%3A1%22%20%2F%3E%20%20%20%20%3Cpath%20%20%20%20%20%20%20id%3D%22rect4551-6%22%20%20%20%20%20%20%20d%3D%22M%2052.916667%2C296.99999%20V%20270.54166%20H%2026.458334%20v%2026.45833%20h%204.17132%20a%2010.394345%2C29.104167%201.864837e-6%200%201%209.246981%2C-15.875%2010.394345%2C29.104167%201.864837e-6%200%201%209.257834%2C15.875%20z%22%20%20%20%20%20%20%20style%3D%22fill%3A%23ffffff%3Bstroke%3Anone%3Bstroke-width%3A1.05833328%3Bstroke-miterlimit%3A4%3Bstroke-dasharray%3Anone%3Bstroke-opacity%3A1%3Bfill-opacity%3A1%3Bopacity%3A1%22%20%2F%3E%20%20%20%20%3Cpath%20%20%20%20%20%20%20id%3D%22rect4551-9%22%20%20%20%20%20%20%20d%3D%22m%203.6694232e-6%2C270.54158%2026.4583303305768%2C8e-5%208.1e-5%2C-26.45833%20-26.458330930577%2C-8e-5%20-1.27e-5%2C4.17132%20A%2029.104167%2C10.394345%201.7425496e-4%200%201%2015.875044%2C257.5016%2029.104167%2C10.394345%201.7425496e-4%200%201%201.5169423e-5%2C266.75938%20Z%22%20%20%20%20%20%20%20style%3D%22fill%3A%23ffffff%3Bstroke%3Anone%3Bstroke-width%3A1.05833328%3Bstroke-miterlimit%3A4%3Bstroke-dasharray%3Anone%3Bstroke-opacity%3A1%3Bfill-opacity%3A1%3Bopacity%3A1%22%20%2F%3E%20%20%20%20%3Cpath%20%20%20%20%20%20%20id%3D%22rect4551-3%22%20%20%20%20%20%20%20d%3D%22m%2079.375035%2C244.08333%20-26.45833%2C-8e-5%20-7.5e-5%2C26.45833%2026.45833%2C8e-5%201.2e-5%2C-4.17132%20a%2029.104167%2C10.394345%201.6162321e-4%200%201%20-15.874974%2C-9.24703%2029.104167%2C10.394345%201.6162321e-4%200%201%2015.875026%2C-9.25779%20z%22%20%20%20%20%20%20%20style%3D%22fill%3A%23ffffff%3Bstroke%3Anone%3Bstroke-width%3A1.05833328%3Bstroke-miterlimit%3A4%3Bstroke-dasharray%3Anone%3Bstroke-opacity%3A1%3Bfill-opacity%3A1%3Bopacity%3A1%22%20%2F%3E%20%20%20%20%3Cpath%20%20%20%20%20%20%20id%3D%22rect3739-9%22%20%20%20%20%20%20%20d%3D%22M%2079.375028%2C232.80089%20A%2021.166666%2C21.166666%200%200%201%2064.1884%2C217.62503%20l%20-11.27166%2C-3e-5%20-7.3e-5%2C26.45833%2026.45833%2C8e-5%20z%22%20%20%20%20%20%20%20style%3D%22fill%3A%23ffffff%3Bstroke%3Anone%3Bstroke-width%3A1.05833328%3Bstroke-miterlimit%3A4%3Bstroke-dasharray%3Anone%3Bstroke-opacity%3A1%3Bfill-opacity%3A1%3Bopacity%3A1%22%20%2F%3E%20%20%20%20%3Cpath%20%20%20%20%20%20%20id%3D%22rect3739-0%22%20%20%20%20%20%20%20d%3D%22m%2064.199251%2C296.99996%20a%2021.166666%2C21.166666%200%200%201%2015.17577%2C-15.18672%20l%20-3e-5%2C-11.27166%20-26.458324%2C8e-5%207e-5%2C26.45833%20z%22%20%20%20%20%20%20%20style%3D%22fill%3A%23ffffff%3Bstroke%3Anone%3Bstroke-width%3A1.05833328%3Bstroke-miterlimit%3A4%3Bstroke-dasharray%3Anone%3Bstroke-opacity%3A1%3Bfill-opacity%3A1%3Bopacity%3A1%22%20%2F%3E%20%20%20%20%3Cpath%20%20%20%20%20%20%20id%3D%22rect3739-7%22%20%20%20%20%20%20%20d%3D%22m%20-6.5e-6%2C281.82418%20a%2021.166666%2C21.166666%200%200%201%2015.1866805%2C15.17581%20h%2011.27166%20l%20-10e-6%2C-26.45834%20-26.4583305%2C10e-6%20z%22%20%20%20%20%20%20%20style%3D%22fill%3A%23ffffff%3Bstroke%3Anone%3Bstroke-width%3A1.05833328%3Bstroke-miterlimit%3A4%3Bstroke-dasharray%3Anone%3Bstroke-opacity%3A1%3Bfill-opacity%3A1%3Bopacity%3A1%22%20%2F%3E%20%20%20%20%3Crect%20%20%20%20%20%20%20y%3D%22244.08333%22%20%20%20%20%20%20%20x%3D%2226.458332%22%20%20%20%20%20%20%20height%3D%2226.458332%22%20%20%20%20%20%20%20width%3D%2226.458332%22%20%20%20%20%20%20%20id%3D%22rect4613%22%20%20%20%20%20%20%20style%3D%22fill%3A%23ffffff%3Bstroke%3Anone%3Bstroke-width%3A1.05833328%3Bstroke-miterlimit%3A4%3Bstroke-dasharray%3Anone%3Bstroke-opacity%3A1%3Bfill-opacity%3A1%3Bopacity%3A1%22%20%2F%3E%20%20%3C%2Fg%3E%3C%2Fsvg%3E')
        100 /*slice*/ round /*repeat*/;
      border-style: solid;
      border-width: 6px;
      box-sizing: border-box;
      opacity: 0.8;
      height: 120px;
      filter: drop-shadow(0 6px 10px -4px rgba(0, 0, 0, 0.15)) grayscale(80%);
      -webkit-filter: drop-shadow(0 0 1px rgba(0, 0, 0, 1));
      float: right;
      margin-bottom: 20px;
      margin-right: 35px;
      position: relative;
      transform: rotate(3deg);
      width: 120px;

      img {
        height: 100%;
        object-fit: cover;
        width: 100%;
      }
    }
  }
}
</style>
