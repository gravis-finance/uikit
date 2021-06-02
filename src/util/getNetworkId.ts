import { ChainId } from '@gravis.finance/sdk'

const NetworkLabels = {
  '56': 'Binance Smart Chain',
  '97': 'Binance Smart Chain',
  '128': 'Huobi ECO Chain',
  '256': 'Huobi ECO Chain',
}

export const NetworkSymbols: { [chainId in ChainId]: string } = {
  '56': 'BNB',
  '97': 'BNB',
  '128': 'HT',
  '256': 'HT',
}

export const NetworkTitles: { [chainId in ChainId]: string } = {
  '56': 'Binance',
  '97': 'Binance',
  '128': 'Huobi',
  '256': 'Huobi',
}

const networkLocalStorageKey = 'network'

export const getNetworkId: any = () => {
  const params = new URLSearchParams(window.location.search)
  const chainId: string = params.get(networkLocalStorageKey) as string

  return chainId
}

export const getNetworkLabel: any = () => {
  const chainId = (getNetworkId() as unknown) as ChainId
  const label = NetworkLabels[chainId]

  return label
}

export const getNetworkTitles: any = () => {
  const chainId = (getNetworkId() as unknown) as ChainId
  const title = NetworkTitles[chainId]

  return title
}

export const getNetworkSymbol: any = () => {
  const chainId = (getNetworkId() as unknown) as ChainId
  const symbol = NetworkSymbols[chainId]

  return symbol
}
