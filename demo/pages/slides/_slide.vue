<template>
  <b-container v-if="!$fetchState.pending">
    <b-row>
      <b-col>
        <NuxtContent :document="slide" />
      </b-col>
    </b-row>

    <b-row class="my-5">
      <b-col>
        <b-pagination-nav align="center" :pages="slides" use-router />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  layout: 'slides',

  data: () => ({
    slide: null,
    slides: [
      { link: '/slides', text: 'Introduction' },
      { link: '/slides/druxt', text: 'DruxtJS' },
      { link: '/slides/drupal', text: 'Drupal' },
      { link: '/slides/menu', text: 'Menu' },
      { link: '/slides/component', text: '<DruxtMenu />' },
      { link: '/slides/example-1', text: 'Example: Slots & Props' },
      { link: '/slides/example-2', text: 'Example: Templates' },
      { link: '/slides/example-3', text: 'Example: Slotless wrapper' },
      { link: '/slides/example-4', text: 'Example: Extend DruxtMenu' },
      { link: '/slides/example-5', text: 'Example: Plugin' },
      { link: '/slides/example-6', text: 'Example: Node app' }
    ]
  }),

  async fetch() {
    this.slide = await this.$content(this.$route.params.slide || 'intro').fetch()
  },
}
</script>

<style>
.nuxt-content svg {
  width: 100%;
}

.nuxt-content h1 {
  font-family: 'Quicksand';
  text-align: center;
}

.nuxt-content h1 + * {
  text-align: center;
}

.nuxt-content h2 {
  font-family: 'Quicksand';
  margin: 2rem 0 1rem;
}

.nuxt-content h2 + * {
  text-align: left;
}

.nuxt-content blockquote {
  text-align: center;
}
</style>
