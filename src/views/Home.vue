<template>
  <div class="home">
    <h2>{{ $t('home') }}</h2>

    <section>{{ $t('currentDate', { date: currentDate }) }}</section>
    <section v-html="$t('currentDate', { date: currentDateHtml })"></section>

    <section>
      <h2>Element UI【PC】</h2>
      <el-date-picker v-model="currentDate1" type="datetime"></el-date-picker>
    </section>

    <section>
      <h2>Vant v2【Mobile】</h2>
      <van-datetime-picker v-model="currentDate2" type="datetime" />
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      currentDate: new Date(),
      currentDateHtml: `<span style="color: var(--primary-color)">${new Date()}</span>`,
      currentDate1: new Date(),
      currentDate2: new Date()
    }
  }
}
</script>
