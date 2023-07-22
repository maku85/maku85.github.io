<script setup>
defineProps({
  links: {
    type: Array,
    required: true,
  },
});

// flatten TOC links nested arrays to one array
const flattenLinks = (links) => {
  let _links = (links || [])
    .map((link) => {
      let _link = [link];
      if (link.children) {
        // recursively flatten children links
        let flattened = flattenLinks(link.children);
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
    <header class="header">
      <h2 class="title">Table of contents</h2>
    </header>
    <ul class="links">
      <!-- render each link with depth class -->
      <li v-for="link of flattenLinks(links)" :key="link.id" :class="`link link_${link.depth}`">
        <a :href="`#${link.id}`">
          {{ link.text }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@import '../assets/sass/variables';

.title {
  margin-top: 0 !important;
  margin-bottom: 50px !important;
  font-size: 18px !important;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -20px;
    width: 30px;
    height: 4px;
    background: #29a587;
  }
}

.links {
  margin: 2rem 0;
  padding: 0;
  list-style-type: disc;
  padding-inline-start: 2ch;

  .link {
    line-height: 1.4;
    margin-bottom: 10px;

    a {
      font-weight: 400;
    }
  }

  .link_2 {
    margin-top: 25px;
    color: $primary;
  }

  .link_3 {
    margin-left: 2ch;
    list-style-type: circle;
  }

  .link_4 {
    margin-left: 4ch;
    list-style-type: square;
  }
}
</style>
