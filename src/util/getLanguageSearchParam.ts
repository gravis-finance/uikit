import { localStorageLanguageItem, urlSearchLanguageParam } from '../constants'
import { getDefaultLanguage } from './getDefaultLanguage'

// eslint-disable-next-line import/prefer-default-export
export const getLanguageSearchParam = () => {
  const {search} = window.location
  if(search.includes(urlSearchLanguageParam)) {
    const language = search.slice(search.indexOf(urlSearchLanguageParam)+urlSearchLanguageParam.length+1)
    if(language.toLowerCase() === 'jp' || language.toLowerCase() === 'en') {
      localStorage.setItem(localStorageLanguageItem, language.toUpperCase())
      return language.toLowerCase()
    }
    return getDefaultLanguage()
  }
  return getDefaultLanguage()
}
