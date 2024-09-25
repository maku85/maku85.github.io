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
      <h2 class="toc__title uppercase">Table of contents</h2>
    </header>

    <ul class="toc__links-container">
      <li
        v-for="link of flattenLinks(links)"
        :key="link.id"
        :class="`toc__link-wrapper toc__link-wrapper--${link.depth}`"
      >
        <NuxtLink class="toc__link" :to="'#' + link.id">{{
          link.text
        }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>
