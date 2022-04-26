import { ChainId } from '@gravis.finance/sdk'
import { comparedNetworksIds } from '../constants'

const NetworkLabels = {
  [ChainId.MAINNET]: 'binanceSmartChain',
  [ChainId.BSCTESTNET]: 'binanceSmartChain',
  [ChainId.HECOMAINNET]: 'huobiEcoChain',
  [ChainId.HECOTESTNET]: 'huobiEcoChain',
  [ChainId.MATICMAINNET]: 'Polygon (Matic)',
  [ChainId.MATICTESTNET]: 'Polygon (Matic)',
  [ChainId.ETHEREUMMAINNET]: 'Ethereum',
  [ChainId.ETHEREUMTESTNET]: 'Ethereum',
  [ChainId.AURORAMAINNET]: 'Aurora',
  [ChainId.AURORATESTNET]: 'Aurora',
}

export const NetworkSymbols: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: 'BNB',
  [ChainId.BSCTESTNET]: 'BNB',
  [ChainId.HECOMAINNET]: 'HT',
  [ChainId.HECOTESTNET]: 'HT',
  [ChainId.MATICMAINNET]: 'Matic',
  [ChainId.MATICTESTNET]: 'Matic',
  [ChainId.ETHEREUMMAINNET]: 'Ethereum',
  [ChainId.ETHEREUMTESTNET]: 'Ethereum',
  [ChainId.AURORAMAINNET]: 'Ethereum',
  [ChainId.AURORATESTNET]: 'Ethereum',
}

export const NetworkTitles: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: 'Binance',
  [ChainId.BSCTESTNET]: 'Binance',
  [ChainId.HECOMAINNET]: 'Huobi',
  [ChainId.HECOTESTNET]: 'Huobi',
  [ChainId.MATICMAINNET]: 'Polygon',
  [ChainId.MATICTESTNET]: 'Polygon',
  [ChainId.ETHEREUMMAINNET]: 'Ethereum',
  [ChainId.ETHEREUMTESTNET]: 'Ethereum',
  [ChainId.AURORAMAINNET]: 'Aurora',
  [ChainId.AURORATESTNET]: 'Aurora',
}

const networkLocalStorageKey = 'network'

export const getNetworkId: any = () => {
  const params = new URLSearchParams(window.location.search)
  const chainId: string = params.get(networkLocalStorageKey) as string

  return chainId
}

export const getNetworkLabel: any = () => {
  const chainId = getNetworkId() as unknown as ChainId
  const label = NetworkLabels[chainId]

  return label
}

export const getNetworkTitles: any = () => {
  const chainId = getNetworkId() as unknown as ChainId
  const title = NetworkTitles[chainId]

  return title
}

export const getNetworkSymbol: any = () => {
  const chainId = getNetworkId() as unknown as ChainId
  const symbol = NetworkSymbols[chainId]

  return symbol
}

export const getNetworkForAnalytics: any = (networkChainId: number) => {
  let networkName = ''

  comparedNetworksIds.map((network) => {
    if (network.networks.find((networkId) => networkId === networkChainId)) networkName = network.name
    return null
  })
  return networkName
}
