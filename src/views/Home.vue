<template>
  <div class="home">
    <h2>{{ $t('home') }}</h2>

    <section>
      <el-calendar v-model="calendarValue" />
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      calendarValue: ''
    }
  }
}
</script>
