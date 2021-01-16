<template>
  <b-container>
    <b-row class="my-5">
      <b-col class="text-center">
        <Logo />

        <h1 class="title">DruxtJS Menu</h1>
        <h2 class="subtitle">Decoupled Menu Initiative demo</h2>

        <div class="links">
          <b-button
            href="https://menu.druxtjs.org/"
            rel="noopener noreferrer"
            target="_blank"
            variant="primary"
          >
            Documentation
          </b-button>

          <b-button
            href="https://github.com/Decipher/druxt-menu-initiative"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </b-button>
        </div>
      </b-col>
    </b-row>

    <b-row class="my-5">
      <b-col>
        <h3>Example 1 - Props and Slots.</h3>
        <hr class="my-4" />

        <VueLive :code="Example1" :layout="Layout" />
      </b-col>
    </b-row>

    <b-row class="my-5">
      <b-col>
        <h3>Example 2 - Templates.</h3>
        <hr class="my-4" />

        <VueLive :code="Example2" :layout="Layout" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { VueLive } from 'vue-live'
import Layout from '~/components/Layout.vue'

import 'prismjs/themes/prism-tomorrow.css'
import 'vue-prism-editor/dist/prismeditor.min.css'

import Example1 from '!!raw-loader!~/assets/Example1.vue'
import Example2 from '!!raw-loader!~/assets/Example2.vue'

export default {
  components: { VueLive },

  data: () => ({
    Example1,
    Example2,
    Layout
  })
}
</script>

<style>
.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.prism-editor-wrapper {
  /* background-color: #222; */
  box-sizing: border-box;
  color: #eee;
  height: auto;
  padding: 8px 12px;
}

.prism-editor-wrapper .prism-editor__textarea {
  color: #eee !important;
}
</style>
