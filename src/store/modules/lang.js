import i18n from '@/i18n'
import router from '@/router'
import { setCacheLang, setVantLang, setPageDir } from '@/utils/lang'

// --- init ---
;(function () {
  const i18nLocale = i18n.locale
  setVantLang(i18nLocale)
  setPageDir(i18nLocale)
})()
// --- init ---

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
    i18n.locale = lang
    setVantLang(lang)
    setPageDir(lang)
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
