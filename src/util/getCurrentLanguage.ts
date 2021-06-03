import { localStorageLanguageItem } from '../constants'

// eslint-disable-next-line import/prefer-default-export
export const getCurrentLanguage = () => {
  return localStorage.getItem(localStorageLanguageItem)?.toLowerCase() as string
}
