export const getCacheLang = () => {
  const lang = localStorage.getItem('lang')
  return lang
}

export const setCacheLang = lang => {
  localStorage.setItem('lang', lang)
}
