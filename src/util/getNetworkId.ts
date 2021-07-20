import { ChainId } from '@gravis.finance/sdk'
import { comparedNetworksIds } from '../constants'

const NetworkLabels = {
  '56': 'binanceSmartChain',
  '97': 'binanceSmartChain',
  '128': 'huobiEcoChain',
  '256': 'huobiEcoChain',
  '80001': 'Polygon (Matic)',
  '137': 'Polygon (Matic)',
  '1': 'Ethereum',
  '4': 'Ethereum',
}

export const NetworkSymbols: { [chainId in ChainId]: string } = {
  '56': 'BNB',
  '97': 'BNB',
  '128': 'HT',
  '256': 'HT',
  '80001': 'Matic',
  '137': 'Matic',
  '1': 'Ethereum',
  '4': 'Ethereum',
}

export const NetworkTitles: { [chainId in ChainId]: string } = {
  '56': 'Binance',
  '97': 'Binance',
  '128': 'Huobi',
  '256': 'Huobi',
  '80001': 'Polygon',
  '137': 'Polygon',
  '1': 'Ethereum',
  '4': 'Ethereum',
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

export const getNetworkForAnalytics : any = (networkChainId : number) => {
  let networkName = ''

  comparedNetworksIds.map((network)=> {
    if(network.networks.find((networkId)=> networkId === networkChainId))
      networkName = network.name
    return null
  })
  return networkName
}
