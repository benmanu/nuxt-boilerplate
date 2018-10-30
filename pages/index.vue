<template>
  <div class="container">
    <h2>Pages</h2>
    <ul v-if="pages">
      <li
        v-for="(page, index) in pages"
        :key="index"
      >
        <h2>{{ page.fields.title }}</h2>
        <nuxt-link :to="page.fields.slug">{{ page.fields.title }}</nuxt-link>
        <div v-html="$md.render(page.fields.abstract)" />
        <div
          v-for="(image, index) in page.fields.image"
          :key="index"
        >
          <img
            :src="image.fields.file.url"
            :title="image.fields.title"
          >
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    pages() {
      return this.$store.state.pages.pages;
    },
  },
  async fetch({ store, params }) {
    await store.dispatch('pages/getPages', params.slug);
  },
};
</script>
