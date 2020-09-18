<template>
  <section id="resume" class="section section-resume">
    <div class="container">
      <div class="section-head">
        <span>My Resume</span>
        <h2>My Expertises</h2>
      </div>

      <div class="row mt-4">
        <div class="col-sm-6 col-lg-6">
          <h5 class="section-subHead mt-3">My Experience</h5>
          <card
            v-for="experience of resume.experiences"
            :key="experience.id"
            class="resume-list b-box hover-state p-4 mt-4"
          >
            <div>
              <h5>{{ experience.title }}</h5>
              <h6>{{ experience.company }}</h6>
              <h6 class="badge badge-dark d-inline-block my-3">
                {{ experience.startDate }} -
                {{ experience.endDate || 'Present' }}
              </h6>
              <p>{{ experience.description }}</p>
            </div>
          </card>
        </div>

        <div class="col-sm-6 col-lg-6">
          <h5 class="section-subHead mt-3">My Education</h5>
          <card
            v-for="education of resume.education"
            :key="education.id"
            class="resume-list b-box hover-state p-4 mt-4"
          >
            <div>
              <h5>{{ education.title }}</h5>
              <h6 class="badge badge-dark d-inline-block my-3">
                {{ education.startDate ? education.startDate + ' - ' : ''
                }}{{ education.endDate }}
              </h6>
              <p>{{ education.description }}</p>
            </div>
          </card>
        </div>
      </div>

      <div class="row mt-4">
        <div
          v-for="expertise of resume.expertises"
          :key="expertise.id"
          class="col-sm-6 col-lg-6"
        >
          <h5 class="section-subHead mt-3">{{ expertise.title }}</h5>
          <div class="resume-panel b-box hover-state p-4 mt-3">
            <div
              v-for="skill of expertise.skills"
              :key="skill.id"
              class="mb-4 pb-2"
            >
              <h6>{{ skill.title }}</h6>
              <div class="progress mt-2" style="height: 7px;">
                <div
                  class="progress-bar"
                  role="progressbar"
                  :style="{ width: skill.value + '%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    resume: {
      type: Object,
      default: () => ({ experiences: [], education: [], expertises: [] })
    }
  }
}
</script>
