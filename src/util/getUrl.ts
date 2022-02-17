import { getNetworkId } from './getNetworkId'

export const getUrl = (origin: string | undefined, path: string) => {
  if (!origin) return ''
  return `${origin}${origin !== '/' ? '/' : ''}${path}?network=${getNetworkId()}`
}
