<script setup>
defineProps({
  links: {
    type: Array,
    required: true,
  },
});

const flattenLinks = (links) => {
  const _links = (links || []).flatMap((link) => {
    let _link = [link];
    if (link.children) {
      const flattened = flattenLinks(link.children);
      _link = [link, ...flattened];
    }
    return _link;
  });
  return _links;
};
</script>

<template>
  <nav>
    <header>
      <h2
        class="mb-6 text-lg uppercase relative before:bg-emerald-600 before:bottom-[-10px] before:h-1 before:absolute before:w-[80px]"
      >
        Table of contents
      </h2>
    </header>

    <ul class="list-disc text-md">
      <li
        v-for="link of flattenLinks(links)"
        :key="link.id"
        :class="{
          'text-emerald-600': link.depth === 2,
          'mb-2': link.depth === 2,
          'mt-6': link.depth === 2,
          'ml-4': link.depth === 3,
          'list-[circle]': link.depth === 3,
          'ml-8': link.depth === 4,
          'list-[square]': link.depth === 4,
        }"
      >
        <NuxtLink class="font-normal" :to="'#' + link.id">{{
          link.text
        }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>
