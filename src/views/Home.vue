<template>
  <div class="home">
    <h2>{{ $t('home') }}</h2>

    <section>{{ $t('currentTime', { time: currentTime }) }}</section>
    <section v-html="$t('currentTime', { time: currentTimeHtml })"></section>

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
      calendarValue: '',
      currentTime: new Date(),
      currentTimeHtml: `<span style="color: var(--primary-color)">${new Date()}</span>`
    }
  }
}
</script>
