<template>
  <div class="profile-page sidebar-collapse">
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
              <div>- Oscar Wilde</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <TheBlogSection :articles="articles" />

    <TheContactSection />

    <a id="back-top" href="#top" class="d-none" @click="scrollToTop()"></a>

    <TheFooter />
  </div>
</template>

<script>
import TheMainHeader from "~/components/TheMainHeader";
import TheAboutSection from "~/components/TheAboutSection";
import TheResumeSection from "~/components/TheResumeSection";
import TheWorksSection from "~/components/TheWorksSection";
import TheBlogSection from "~/components/TheBlogSection";
import TheContactSection from "~/components/TheContactSection";
import TheFooter from "~/components/TheFooter";

export default {
  components: {
    TheMainHeader,
    TheAboutSection,
    TheResumeSection,
    TheWorksSection,
    TheBlogSection,
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
      .sortBy("date", "desc")
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
  width: 100vw;
  background: var(--bg);
}
</style>