import i18n from '@/i18n'
import router from '@/router'
import { setCacheLang } from '@/utils/lang'

// --- init settings ---
;(function () {
  const i18nLocale = i18n.locale
  if (i18nLocale === 'ar') {
    document.body.dir = 'rtl'
  } else {
    document.body.dir = 'ltr'
  }
})()
// --- init settings ---

const state = {
  currentLang: i18n.locale
}

const getters = {}

const mutations = {
  SET_LANG(state, lang) {
    state = lang
  }
}

const actions = {
  setLang({ commit }, lang) {
    if (lang === 'ar') {
      document.body.dir = 'rtl'
    } else {
      document.body.dir = 'ltr'
    }
    i18n.locale = lang
    commit('SET_LANG', lang)
    setCacheLang(lang)
    document.title = i18n.t(router.currentRoute.meta.title)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
