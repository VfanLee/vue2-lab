<template>
  <div v-show="visible" style="padding: 10px; border: 1px dashed">
    <input type="text" :value="value" @input="e => $emit('input', e.target.value)" />
    <button @click="() => $emit('update:visible', false)">close</button>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'value', // 绑定的 prop 名称，默认为 “value”
    event: 'input' // 触发更新的事件名称，默认为 “input”
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    visible: {
      type: Boolean,
      default: false
    }
  }
}
</script>
