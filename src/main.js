import Vue from 'vue'
import i18n from './i18n'
import store from './store'
import router from './router'

import 'element-ui/lib/theme-chalk/index.css'

import App from './App.vue'
import ElementUI from 'element-ui'

Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
})

Vue.config.productionTip = false

new Vue({
  i18n,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
