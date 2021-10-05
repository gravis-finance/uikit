import { isMobile } from 'react-device-detect'
import Metamask from './icons/Metamask'
// import MathWallet from './icons/MathWallet'
import TokenPocket from './icons/TokenPocket'
import TrustWallet from './icons/TrustWallet'
import WalletConnect from './icons/WalletConnect'
import BinanceChain from './icons/BinanceChain'
import Binance from './icons/Binance'
import Huobi from './icons/Huobi'
import Polygon from './icons/Polygon'
import Ethereum from './icons/Ethereum'
import { WalletsConfig, ConnectorNames, NetworksConfig } from './types'

const production = process.env.REACT_APP_NODE_ENV === 'production'

export const walletsConfig = {
  metamask: {
    title: 'Metamask',
    icon: Metamask,
    connectorId: ConnectorNames.Injected,
  },
  trustWallet: {
    title: 'Trust Wallet',
    icon: TrustWallet,
    connectorId: ConnectorNames.Injected,
  },
  tokenPocket: {
    title: 'Token Pocket',
    icon: TokenPocket,
    connectorId: ConnectorNames.Injected,
  },
  walletConnect: {
    title: 'Wallet Connect',
    icon: WalletConnect,
    connectorId: ConnectorNames.WalletConnect,
  },
  binanceChain: {
    title: 'Binance Chain Wallet',
    icon: BinanceChain,
    connectorId: ConnectorNames.BSC,
  },
  // mathWallet:  {
  //   title: 'Math Wallet',
  //   icon: MathWallet,
  //   connectorId: ConnectorNames.Injected,
  // },
}

export const networksConfig = {
  huobi: {
    title: 'Huobi',
    icon: Huobi,
    label: 'HECO',
    chainId: production ? '128' : '256',
    wallets: isMobile
      ? [walletsConfig.walletConnect, walletsConfig.tokenPocket]
      : [walletsConfig.metamask, walletsConfig.walletConnect],
  },
  binance: {
    title: 'Binance',
    icon: Binance,
    label: 'BSC',
    chainId: production ? '56' : '97',
    wallets: isMobile
      ? [walletsConfig.metamask, walletsConfig.walletConnect, walletsConfig.trustWallet, walletsConfig.tokenPocket]
      : [walletsConfig.metamask, walletsConfig.walletConnect, walletsConfig.binanceChain],
  },
  polygon: {
    title: 'Polygon',
    icon: Polygon,
    label: 'Polygon',
    chainId: production ? '137' : '80001',
    wallets: isMobile ? [walletsConfig.walletConnect] : [walletsConfig.metamask, walletsConfig.walletConnect],
  },
  ethereum: {
    title: 'Ethereum',
    icon: Ethereum,
    label: 'Ethereum',
    chainId: production ? '1' : '4',
    wallets: isMobile ? [walletsConfig.walletConnect] : [walletsConfig.metamask, walletsConfig.walletConnect],
  },
}

export const connectorLocalStorageKey = 'connectorId'

export const wallets: WalletsConfig[] = Object.keys(walletsConfig).map(
  (walletKey) => walletsConfig[walletKey as keyof typeof walletsConfig]
)
export const networks: NetworksConfig[] = Object.keys(networksConfig).map(
  (networkKey) => networksConfig[networkKey as keyof typeof networksConfig]
)
