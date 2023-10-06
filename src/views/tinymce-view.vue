<template>
  <div>
    <Tinymce v-model="value" />

    <section>{{ value }}</section>
  </div>
</template>

<script>
import Tinymce from '@/components/Tinymce'

export default {
  name: 'TinymceView',

  data() {
    return {
      value: '<p>hello world<p>'
    }
  },

  components: {
    Tinymce
  }
}
</script>
