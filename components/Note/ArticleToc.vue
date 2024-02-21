<script setup>
defineProps({
  links: {
    type: Array,
    required: true,
  },
});

// flatten TOC links nested arrays to one array
const flattenLinks = (links) => {
  const _links = (links || [])
    .map((link) => {
      let _link = [link];
      if (link.children) {
        // recursively flatten children links
        const flattened = flattenLinks(link.children);
        _link = [link, ...flattened];
      }
      return _link;
    })
    .flat(1);
  return _links;
};
</script>

<template>
  <nav class="toc">
    <header class="toc__header">
      <h2 class="toc__title">Table of contents</h2>
    </header>

    <ul class="toc__links-container">
      <li
        v-for="link of flattenLinks(links)"
        :key="link.id"
        :class="`toc__link-wrapper toc__link-wrapper--${link.depth}`"
      >
        <NuxtLink class="toc__link" :to="'#' + link.id">{{ link.text }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>
