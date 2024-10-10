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
  <div class="py-5">
    <h2
      class="mb-6 text-lg uppercase relative before:bg-emerald-600 before:bottom-[-10px] before:h-1 before:absolute before:w-[80px]"
    >
      Table of contents
    </h2>

    <ul class="ml-4 list-disc">
      <li
        v-for="link of flattenLinks(links)"
        :key="link.id"
        :class="{
          'mb-1': link.depth === 2,
          'mt-2': link.depth === 2,
          'ml-4': link.depth === 3,
          'list-[circle]': link.depth === 3,
          'ml-8': link.depth === 4,
          'list-[square]': link.depth === 4,
        }"
      >
        <NuxtLink
          class="hover:text-emerald-600 border-0 text-gray-500 font-normal"
          :to="'#' + link.id"
        >
          <span>{{ link.text }}</span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
