<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types';

const query: QueryBuilderParams = {
  path: '/en/articles',
  where: [{ published: true }],
  limit: 6,
  sort: [{ date: -1 }],
};
</script>

<template>
  <PageSection id="notes">
    <PageTitle text="Latest notes" subtitle=" Articles and Advice" />

    <ContentList v-slot="{ list }" :query="query">
      <v-row v-if="list.length > 0" cols="12" class="notes__list mt-4 mb-8">
        <v-col v-for="article of list" :key="article._path" xs="12" sm="6" md="4">
          <note-section-article-item :article="article" />
        </v-col>
      </v-row>

      <v-row>
        <v-btn class="notes__load-more" :to="'/notes'" variant="plain"
          ><span>View notes</span></v-btn
        >
      </v-row>
    </ContentList>
  </PageSection>
</template>
