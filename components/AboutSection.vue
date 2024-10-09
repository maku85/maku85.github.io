<template>
  <PageSection class="px-2 md:max-w-[800px]">
    <div
      class="text-center px-4 pt-14 pb-8 relative after:bg-white after:absolute after:bottom-0 after:left-0 after:w-full after:top-0 after:border-2 after:border-gray-200 after:rounded-sm after:z-[-99] after:opacity-35 shadow-[5px_5px_rgb(0_0_0/20%)]"
    >
      <div class="uppercase mb-2">
        <div class="mb-1">
          <span class="font-[Caveat] text-2xl text-emerald-600 font-bold"
            >Hello,</span
          >
          my name is
        </div>
        <h1 class="about__title text-5xl md:text-7xl font-bold text-white mb-2">
          <span class="text-emerald-600">Mauro</span><br />Cunsolo
        </h1>
        <div>
          I am a
          <strong class="font-bold font-[Caveat] text-xl text-emerald-600"
            >Backend Developer</strong
          >
        </div>
      </div>
      <hr class="mt-6 w-[60%] mx-auto" />

      <p class="pt-6 px-4 md:px-12">
        Experienced Node.js back-end developer but deeply passionate about all
        the latest back-end, front-end and mobile technologies. I'm curious,
        love challenges but I hate monotony.
      </p>

      <div class="flex justify-center gap-4 mt-8">
        <social-links />
      </div>
    </div>
  </PageSection>
</template>

<style lang="scss">
.about__title {
  text-shadow: 2px 2px #000, -2px 2px #000, 2px -2px #000, -2px -2px #000,
    5px 5px 0px rgba(0, 0, 0, 0.2);
}
</style>
