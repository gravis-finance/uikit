import Metamask from './icons/Metamask'
// import MathWallet from './icons/MathWallet'
import TokenPocket from './icons/TokenPocket'
import TrustWallet from './icons/TrustWallet'
import WalletConnect from './icons/WalletConnect'
import BinanceChain from './icons/BinanceChain'
import Binance from './icons/Binance'
import Huobi from './icons/Huobi'

import { WalletsConfig, ConnectorNames } from './types'

export const wallets: WalletsConfig[] = [
  {
    title: 'Metamask',
    icon: Metamask,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: 'Trust Wallet',
    icon: TrustWallet,
    connectorId: ConnectorNames.Injected,
  },
  // {
  //   title: 'Math Wallet',
  //   icon: MathWallet,
  //   connectorId: ConnectorNames.Injected,
  // },
  {
    title: 'Token Pocket',
    icon: TokenPocket,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: 'Wallet Connect',
    icon: WalletConnect,
    connectorId: ConnectorNames.WalletConnect,
  },
  {
    title: 'Binance Chain Wallet',
    icon: BinanceChain,
    connectorId: ConnectorNames.BSC,
  },
]

export const networks = {
  production: [
    {
      title: 'Huobi',
      icon: Huobi,
      label: 'HECO',
      chainId: '128',
    },
    {
      title: 'Binance',
      icon: Binance,
      label: 'BSC',
      chainId: '56',
    },
  ],
  development: [
    {
      title: 'Huobi',
      icon: Huobi,
      label: 'HECO',
      chainId: '256',
    },
    {
      title: 'Binance',
      icon: Binance,
      label: 'BSC',
      chainId: '97',
    },
  ],
}

export const getNetworks: any = (isProduction: any) => {
  return isProduction ? networks.production : networks.development
}

export const connectorLocalStorageKey = 'connectorId'
