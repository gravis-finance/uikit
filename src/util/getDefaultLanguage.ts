import { localStorageLanguageItem } from '../constants'

// eslint-disable-next-line consistent-return,import/prefer-default-export
export const getDefaultLanguage = () => {
  if (
    localStorage.getItem(localStorageLanguageItem) &&
    localStorage.getItem(localStorageLanguageItem)?.toLowerCase() !==
      'undefined'
  )
    return localStorage
      .getItem(localStorageLanguageItem)
      ?.toLowerCase() as string
  if (navigator.language?.includes('en')) {
    localStorage.setItem(localStorageLanguageItem, 'EN')
    return 'en'
  }
  if (navigator.language.includes('jp') || navigator.language.includes('jpn')) {
    localStorage.setItem(localStorageLanguageItem, 'JP')
    return 'jp'
  }
  if (navigator.language.includes('cn')) {
    localStorage.setItem(localStorageLanguageItem, 'CN')
    return 'cn'
  }
  if (navigator.language.includes('ru')) {
    localStorage.setItem(localStorageLanguageItem, 'RU')
    return 'ru'
  }
  if (navigator.language.includes('es')) {
    localStorage.setItem(localStorageLanguageItem, 'ES')
    return 'es'
  }
  if (navigator.language.includes('vie')) {
    localStorage.setItem(localStorageLanguageItem, 'VIE')
    return 'vie'
  }
  localStorage.setItem(localStorageLanguageItem, 'EN')
  return 'en'
}
