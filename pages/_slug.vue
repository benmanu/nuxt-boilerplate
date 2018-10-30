<template>
  <div>
    <p>Single page</p>
    <div v-if="!isLoading">
      <h1>{{ currentPage.fields.title }}</h1>
      <div v-html="$md.render(currentPage.fields.abstract)" />
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    currentPage() {
      return this.$store.state.page.currentPage;
    },
    isLoading() {
      return this.$store.state.page.isLoading;
    },
  },
  async fetch({ store, params }) {
    await store.dispatch('page/getPageBySlug', params.slug);
  },
};
</script>
