import { ChainId } from '@gravis.finance/sdk'

const EXPLORER_PREFIXES: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '',
  [ChainId.BSCTESTNET]: 'testnet.',
  [ChainId.HECOMAINNET]: '',
  [ChainId.HECOTESTNET]: 'testnet.',
  [ChainId.MATICMAINNET]: 'explorer-mainnet.',
  [ChainId.MATICTESTNET]: 'explorer-mumbai.',
  [ChainId.ETHEREUMMAINNET]: 'explorer-mainnet.',
  [ChainId.ETHEREUMTESTNET]: 'explorer-mumbai.',
  [ChainId.AURORAMAINNET]: '',
  [ChainId.AURORATESTNET]: 'testnet.',
  [ChainId.NEARMAINNET]: 'explorer.',
  [ChainId.NEARTESTNET]: 'explorer.testnet.'
}

const EXPLORER_URLS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: 'bscscan.com',
  [ChainId.BSCTESTNET]: 'bscscan.com',
  [ChainId.HECOMAINNET]: 'hecoinfo.com',
  [ChainId.HECOTESTNET]: 'hecoinfo.com',
  [ChainId.MATICMAINNET]: 'maticvigil.com',
  [ChainId.MATICTESTNET]: 'maticvigil.com',
  [ChainId.ETHEREUMMAINNET]: 'explorer-mainnet.',
  [ChainId.ETHEREUMTESTNET]: 'explorer-mumbai.',
  [ChainId.AURORAMAINNET]: 'aurorascan.dev',
  [ChainId.AURORATESTNET]: 'aurorascan.dev',
  [ChainId.NEARMAINNET]: 'near.org',
  [ChainId.NEARTESTNET]: 'near.org'
}

const EXPLORER_NAMES: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: 'viewOnBscscan',
  [ChainId.BSCTESTNET]: 'viewOnBscscan',
  [ChainId.HECOMAINNET]: 'viewOnHecoInfo',
  [ChainId.HECOTESTNET]: 'viewOnHecoInfo',
  [ChainId.MATICMAINNET]: 'PolygonScan',
  [ChainId.MATICTESTNET]: 'PolygonScan',
  [ChainId.ETHEREUMMAINNET]: 'explorer-mainnet.',
  [ChainId.ETHEREUMTESTNET]: 'explorer-mumbai.',
  [ChainId.AURORAMAINNET]: 'AuroraScan',
  [ChainId.AURORATESTNET]: 'AuroraScan',
  [ChainId.NEARMAINNET]: 'Near Explorer',
  [ChainId.NEARTESTNET]: 'Near Explorer'
}

export const getExplorerName = (chainId?: ChainId) => {
  if (!chainId) return ''
  return EXPLORER_NAMES[chainId]
}

enum ROUTES {
  TRANSACTION,
  ADDRESS,
  TOKEN
}

const EXPLORER_ROUTES = {
  [ROUTES.TRANSACTION]: {
    [ChainId.MAINNET]: 'transaction',
    [ChainId.BSCTESTNET]: 'transaction',
    [ChainId.HECOMAINNET]: 'transaction',
    [ChainId.HECOTESTNET]: 'transaction',
    [ChainId.MATICMAINNET]: 'transaction',
    [ChainId.MATICTESTNET]: 'transaction',
    [ChainId.ETHEREUMMAINNET]: 'transaction',
    [ChainId.ETHEREUMTESTNET]: 'transaction',
    [ChainId.AURORAMAINNET]: 'transaction',
    [ChainId.AURORATESTNET]: 'transaction',
    [ChainId.NEARMAINNET]: 'transactions',
    [ChainId.NEARTESTNET]: 'transactions'
  },
  [ROUTES.ADDRESS]: {
    [ChainId.MAINNET]: 'address',
    [ChainId.BSCTESTNET]: 'address',
    [ChainId.HECOMAINNET]: 'address',
    [ChainId.HECOTESTNET]: 'address',
    [ChainId.MATICMAINNET]: 'address',
    [ChainId.MATICTESTNET]: 'address',
    [ChainId.ETHEREUMMAINNET]: 'address',
    [ChainId.ETHEREUMTESTNET]: 'address',
    [ChainId.AURORAMAINNET]: 'address',
    [ChainId.AURORATESTNET]: 'address',
    [ChainId.NEARMAINNET]: 'accounts',
    [ChainId.NEARTESTNET]: 'accounts'
  },
  [ROUTES.TOKEN]: {
    [ChainId.MAINNET]: 'token',
    [ChainId.BSCTESTNET]: 'token',
    [ChainId.HECOMAINNET]: 'token',
    [ChainId.HECOTESTNET]: 'token',
    [ChainId.MATICMAINNET]: 'token',
    [ChainId.MATICTESTNET]: 'token',
    [ChainId.ETHEREUMMAINNET]: 'token',
    [ChainId.ETHEREUMTESTNET]: 'token',
    [ChainId.AURORAMAINNET]: 'token',
    [ChainId.AURORATESTNET]: 'token',
    [ChainId.NEARMAINNET]: 'token',
    [ChainId.NEARTESTNET]: 'token'
  }
}

export function getExplorerLink(
  chainId: ChainId | undefined,
  data: string | undefined,
  type: 'transaction' | 'token' | 'address'
): string {
  if (!chainId || !data) return ''
  const url = EXPLORER_URLS[chainId] || EXPLORER_URLS[ChainId.MAINNET]
  const prefix = `https://${
    EXPLORER_PREFIXES[chainId] || EXPLORER_PREFIXES[ChainId.MAINNET]
  }${url}`

  switch (type) {
    case 'transaction': {
      return `${prefix}/${EXPLORER_ROUTES[ROUTES.TRANSACTION][chainId]}/${data}`
    }
    case 'token': {
      return `${prefix}/${EXPLORER_ROUTES[ROUTES.TOKEN][chainId]}/${data}`
    }
    case 'address':
    default: {
      return `${prefix}/${EXPLORER_ROUTES[ROUTES.ADDRESS][chainId]}/${data}`
    }
  }
}
