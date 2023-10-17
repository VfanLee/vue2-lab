<template>
  <div>
    <h2>Reactivity</h2>

    <section>
      <p>obj: {{ obj }}</p>
      <button @click="updateObj">update obj</button>
      <button @click="addObjFoo">add obj.foo</button>
      <button @click="removeObjFoo">remove obj.foo</button>
    </section>

    <section>
      <p>arr: {{ arr }}</p>
      <button @click="updateArr">update arr</button>
      <button @click="updateArrIndexValue">update arr[1]</button>
      <button @click="updateArrLength">update arr length</button>
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
  // vue2 响应式参考：https://v2.cn.vuejs.org/v2/guide/reactivity.html
  methods: {
    updateObj() {
      this.obj = { id: '001', name: 'foo:update', gender: 'male:update' }
    },
    addObjFoo() {
      // this.obj.foo = Date.now() // ❌
      this.$set(this.obj, 'foo', Date.now())
    },
    removeObjFoo() {
      // delete this.obj.foo // ❌
      // ✔
      const x = { ...this.obj }
      delete x.foo
      this.obj = x
    },
    updateArr() {
      this.arr = [4, 5, 6]
    },
    updateArrIndexValue() {
      // this.arr[1] = Date.now() // ❌
      // this.$set(this.arr, 1, Date.now()) // ✔
      this.arr.splice(1, 1, Date.now()) // or ✔
    },
    updateArrLength() {
      // this.arr.length = 1 // ❌
      this.arr.splice(1) // ✔
    }
  },
  mounted() {
    this.obj = { id: '001', name: 'foo', gender: 'male' }
    this.arr = [1, 2, 3]
  }
}
</script>
