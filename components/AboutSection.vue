<template>
  <PageSection class="max-w-[800px]">
    <div
      class="px-2 py-4 relative after:bg-white after:absolute after:bottom-0 after:left-0 after:w-full after:top-0 after:border-2 after:border-gray-100 after:z-[-99] after:opacity-35 rounded-md shadow-[5px_5px_rgb(0_0_0/20%)]"
    >
      <div class="text-center">
        <div class="uppercase font-bold mb-2">
          <span class="text-emerald-600">Hello,</span> my name is
        </div>
        <h1
          class="about__title uppercase text-5xl md:text-7xl font-bold text-white mb-0"
        >
          <b class="text-emerald-600">Mauro</b><br />Cunsolo
        </h1>
        <div class="uppercase font-bold mt-2">
          I am
          <strong class="font-[Caveat] text-emerald-600"
            >Backend Developer</strong
          >
        </div>

        <div class="pt-8">
          <p>
            Experienced Node.js back-end developer but deeply passionate about
            all the latest back-end, front-end and mobile technologies. I'm
            curious, love challenges but I hate monotony.
          </p>

          <div class="flex justify-center gap-2 mt-8">
            <social-links />
          </div>
        </div>
      </div>
    </div>
  </PageSection>
</template>
