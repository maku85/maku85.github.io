<template>
  <div class="profile-page sidebar-collapse">
    <nav id="nav" class="navbar navbar-expand-lg navbar-transparent fixed-top">
      <div class="container">
        <div class="navbar-translate">
          <TheColorModePicker class="navbar-brand" />
          <button
            class="navbar-toggler navbar-toggler"
            type="button"
            @click="$store.dispatch('nav/toggleSidebar')"
          >
            <span class="navbar-toggler-bar bar1"></span>
            <span class="navbar-toggler-bar bar2"></span>
            <span class="navbar-toggler-bar bar3"></span>
          </button>
        </div>
        <div id="navigation" class="collapse navbar-collapse justify-content-end">
          <ul class="navbar-nav">
            <li class="nav-item">
              <nuxt-link class="nav-link" :to="{ path: '/', hash: '#resume' }">Expertises</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" :to="{ path: '/', hash: '#works' }">Works</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" :to="{ path: '/', hash: '#blog' }">Blog</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" :to="{ path: '/', hash: '#contact' }">Contact</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <TheSideNav />

    <TheMainHeader />

    <TheAboutSection :socials="socials" />

    <TheResumeSection :resume="{ education, experiences, expertises }" />

    <TheWorksSection :works="works" />

    <section class="section section-freelance section-light text-center">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-head">
              <h2>"Experience is the name everyone gives to their mistakes"</h2>
              <div style="color: #fff;">- Oscar Wilde</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- <TheBlogSection :articles="articles" /> -->

    <TheContactSection />

    <a id="back-top" href="#top" class="d-none" @click="scrollToTop()">
      <i class="ti-angle-up">^</i>
    </a>

    <TheFooter />
  </div>
</template>

<script>
import TheColorModePicker from "~/components/TheColorModePicker";
import TheSideNav from "~/components/TheSideNav";
import TheMainHeader from "~/components/TheMainHeader";
import TheAboutSection from "~/components/TheAboutSection";
import TheResumeSection from "~/components/TheResumeSection";
import TheWorksSection from "~/components/TheWorksSection";
// import TheBlogSection from '~/components/TheBlogSection'
import TheContactSection from "~/components/TheContactSection";
import TheFooter from "~/components/TheFooter";

export default {
  layout: "default",
  components: {
    TheColorModePicker,
    TheSideNav,
    TheMainHeader,
    TheAboutSection,
    TheResumeSection,
    TheWorksSection,
    // TheBlogSection,
    TheContactSection,
    TheFooter,
  },
  async asyncData({ $content, params }) {
    const {
      socials,
      education,
      experiences,
      expertises,
      works,
    } = await $content("index").fetch();
    const articles = await $content("articles", params.slug)
      .only(["title", "description", "img", "slug"])
      .limit(6)
      .sortBy("createdAt", "desc")
      .fetch();
    return { socials, education, experiences, expertises, works, articles };
  },
  mounted() {
    this.$nextTick(function () {
      window.addEventListener("scroll", function () {
        const navbar = document.getElementById("nav");
        const navClasses = navbar.classList;
        if (document.documentElement.scrollTop >= 200) {
          if (navClasses.contains("navbar-transparent")) {
            navClasses.remove("navbar-transparent");
          }
        } else if (!navClasses.contains("navbar-transparent")) {
          navClasses.add("navbar-transparent");
        }

        const backTop = document.getElementById("back-top");
        const backTopClasses = backTop.classList;
        if (document.documentElement.scrollTop >= 400) {
          if (backTopClasses.contains("d-none")) {
            backTopClasses.remove("d-none");
          }
        } else if (!backTopClasses.contains("d-none")) {
          backTopClasses.add("d-none");
        }
      });
    });
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style scoped>
.navbar {
  background: var(--bg);
}
</style>