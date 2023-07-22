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
  <PageSection id="blog">
    <PageTitle text="Latest notes" subtitle=" Articles and Advice" />

    <ContentList :query="query" v-slot="{ list }">
      <v-row v-if="list.length > 0" cols="12" class="articles-list mt-4 mb-8">
        <v-col v-for="article of list" :key="article._path" xs="12" sm="6" md="4">
          <blog-section-post-item :post="article" />
        </v-col>
      </v-row>

      <v-row>
        <v-btn class="blog-load-more" :to="'/notes'" variant="plain"><span>View notes</span></v-btn>
      </v-row>
    </ContentList>
  </PageSection>
</template>

<style lang="scss">
@import '../assets/sass/variables';

#blog {
  .blog-load-more {
    position: relative;
    margin: auto;
    text-align: center;
    z-index: 2;
    padding: 0 40px;
    overflow: hidden;
    display: inline-block;
    vertical-align: top;
    font-size: 13px;
    color: $title;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    height: 56px;
    line-height: 52px;
    text-decoration: none;
    outline: none !important;
    cursor: pointer;
    transition: all 0.7s cubic-bezier(0.3, 0, 0.3, 1);
    -webkit-transition: all 0.7s cubic-bezier(0.3, 0, 0.3, 1);
    border: 2px solid #000;
    background: 0 0;
    box-shadow: 5px 5px rgba(0, 0, 0, 0.2);
    border-radius: 56px;
    -webkit-border-radius: 56px;

    &:hover {
      &:before {
        width: calc(100% - 4px);
        height: calc(100% - 4px);
        opacity: 1;
        filter: blur(0px);
      }
    }

    &:before {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      width: 0;
      height: 0;
      background: $primary;
      transition: all 0.6s cubic-bezier(0.3, 0, 0.3, 1);
      -webkit-transition: all 0.6s cubic-bezier(0.3, 0, 0.3, 1);
      transform: translate(-50%, -50%);
      -webkit-transform: translate(-50%, -50%);
      border-radius: 56px;
      -webkit-border-radius: 56px;
      opacity: 0;
      z-index: -1;
      filter: blur(10px);
    }

    .span {
      position: relative;
      z-index: 2;
    }
  }
}
</style>
