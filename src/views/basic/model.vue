<template>
  <div>
    <MyInput v-model="textValue" :visible.sync="isShow" />

    <div>
      <button @click="isShow = !isShow">click me</button>
      {{ textValue }}
    </div>
  </div>
</template>

<script>
import MyInput from '@/components/MyInput/index.vue'

export default {
  name: 'InputView',
  data() {
    return {
      textValue: 'hello',
      isShow: true
    }
  },
  components: {
    MyInput
  }
}
</script>
