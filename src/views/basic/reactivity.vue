<template>
  <div>
    <h2>Reactivity</h2>

    <section>
      obj: {{ obj }}
      <button @click="updateObj">update obj</button>
    </section>

    <section>
      arr: {{ arr }}
      <button @click="updateArr">update arr</button>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Reactivity',
  data() {
    return {
      obj: {},
      arr: []
    }
  },
  methods: {
    updateObj() {
      this.obj = { id: '001', name: 'foo:update', gender: 'male:update' }
    },
    updateArr() {
      this.arr = [4, 5, 6]
    }
  },
  mounted() {
    this.obj = { id: '001', name: 'foo', gender: 'male' }
    this.arr = [1, 2, 3]
  }
}
</script>
