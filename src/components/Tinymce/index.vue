<template>
  <div class="tinymce-container">
    <Editor :value="value" :init="init" :api-key="apiKey" />
  </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'
import { apiKey, defaultConfig } from './config'

export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    config: {
      type: Object,
      default: () => ({})
    }
  },

  data() {
    return {
      apiKey: apiKey,
      init: {
        ...defaultConfig,
        ...this.config
      }
    }
  },

  components: {
    Editor
  }
}
</script>
