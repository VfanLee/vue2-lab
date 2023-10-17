<template>
  <ul>
    <li>
      <span>Basic</span>
      <ul>
        <li><RouterLink to="/reactivity">reactivity</RouterLink></li>
        <li><RouterLink to="/model">v-model</RouterLink></li>
      </ul>
    </li>
    <li><RouterLink to="/tinymce">tinymce</RouterLink></li>
  </ul>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>
