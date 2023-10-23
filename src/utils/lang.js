import { Locale } from 'vant'
import zhCN from 'vant/es/locale/lang/zh-CN'
import enUS from 'vant/es/locale/lang/en-US'

export const getCacheLang = () => {
  const lang = localStorage.getItem('lang')
  return lang
}

export const setCacheLang = lang => {
  localStorage.setItem('lang', lang)
}

export const setVantLang = lang => {
  const langObj = {
    zh: zhCN,
    en: enUS,
    ar: enUS
  }
  Locale.use(lang, langObj[lang])
}

export const setDir = lang => {
  if (lang === 'ar') {
    document.body.dir = 'rtl'
  } else {
    document.body.dir = 'ltr'
  }
}
