
import { localStorageLanguageItem } from '../constants'

// eslint-disable-next-line consistent-return,import/prefer-default-export
export const getDefaultLanguage = () => {
  if(localStorage.getItem(localStorageLanguageItem))
    return localStorage.getItem(localStorageLanguageItem)?.toLowerCase() as string
  if (navigator.language) {
    if (navigator.language.includes('en')) {
      localStorage.setItem(localStorageLanguageItem, 'EN')
      return 'en'
    }
    if (navigator.language.includes('jp') || navigator.language.includes('jpn')) {
      localStorage.setItem(localStorageLanguageItem, 'JP')
      return 'jp'
    }
  }
  else {
    localStorage.setItem(localStorageLanguageItem, 'EN')
    return 'en'
  }
}
