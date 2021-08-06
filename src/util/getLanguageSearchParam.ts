import { localStorageLanguageItem, urlSearchLanguageParam } from '../constants'
import { getDefaultLanguage } from './getDefaultLanguage'
import { availableLanguages } from '../widgets/Menu/config'

// eslint-disable-next-line import/prefer-default-export
export const getLanguageSearchParam = () => {
  const {search} = window.location
  if(search.includes(urlSearchLanguageParam)) {
    const language = search.slice(search.indexOf(urlSearchLanguageParam)+urlSearchLanguageParam.length+1).slice(0, 2)
    if(availableLanguages.find((availableLanguage) => availableLanguage.name.toLowerCase() === language.toLowerCase())) {
      localStorage.setItem(localStorageLanguageItem, language.toUpperCase())
      return language.toLowerCase()
    }
    return getDefaultLanguage()
  }
  return getDefaultLanguage()
}
