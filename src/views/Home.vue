<template>
  <div class="home">
    <h2>{{ $t('home') }}</h2>

    <section>{{ $t('currentDate', { date: currentDate }) }}</section>
    <section v-html="$t('currentDate', { date: currentDateHtml })"></section>

    <section>
      <h2>Element UI</h2>
      <el-date-picker v-model="currentDate" type="datetime"></el-date-picker>
    </section>

    <section>
      <h2>Vant v2</h2>
      <van-datetime-picker v-model="currentDate" type="datehour" />
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      currentDate: new Date(),
      currentDateHtml: `<span style="color: var(--primary-color)">${new Date()}</span>`
    }
  }
}
</script>
