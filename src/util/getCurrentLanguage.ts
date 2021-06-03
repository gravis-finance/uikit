import { localStorageLanguageItem } from '../constants'

// eslint-disable-next-line import/prefer-default-export,@typescript-eslint/explicit-module-boundary-types
export const getCurrentLanguage = () => {
  return localStorage.getItem(localStorageLanguageItem)?.toLowerCase() as string
}
