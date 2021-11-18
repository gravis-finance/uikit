import { isMobile, browserName, osName, BrowserTypes, OsTypes } from 'react-device-detect'

import Metamask from './icons/Metamask'
// import MathWallet from './icons/MathWallet'
import TokenPocket from './icons/TokenPocket'
import TrustWallet from './icons/TrustWallet'
import WalletConnect from './icons/WalletConnect'
import BinanceChain from './icons/BinanceChain'
import SafePal from './icons/SafePal'
import Binance from './icons/Binance'
import Huobi from './icons/Huobi'
import Polygon from './icons/Polygon'
import Ethereum from './icons/Ethereum'
import { WalletsConfig, ConnectorNames, NetworksConfig } from './types'
import IsNotSafariModal from './IsNotSafariModal'
import IncorrectBrowserModal from './IncorrectBrowserModal'
import WalletExtensionInstallModal from './WalletExtensionInstallModal'
import BrowserNotSupported from './BrowserNotSupported'

const production = process.env.REACT_APP_NODE_ENV === 'production'

export const INSTALL_LINKS = {
  METAMASK: {
    [BrowserTypes.Chrome]: 'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn',
    [BrowserTypes.Firefox]: 'https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/'
  } as any,
  BINANCE_CHAIN: {
    [BrowserTypes.Chrome]: 'https://chrome.google.com/webstore/detail/binance-wallet/fhbohimaelbohpjbbldcngcnapndodjp',
    [BrowserTypes.Firefox]: 'https://addons.mozilla.org/en-US/firefox/addon/binance-chain/'
  } as any
}

export const walletsConfig = {
  metamask: {
    title: 'Metamask',
    icon: Metamask,
    connectorId: ConnectorNames.Injected,
    connection: {
      disabled: !(window as any).ethereum || !(window as any).ethereum?.isMetaMask,
      errorModalProps: {
        supportedBrowsers: Object.keys(INSTALL_LINKS.METAMASK),
        installLink: INSTALL_LINKS.METAMASK[browserName]
      },
      errorModal: isMobile ?
        IncorrectBrowserModal :
        browserName in INSTALL_LINKS.METAMASK ?
          WalletExtensionInstallModal :
          BrowserNotSupported
    }
  },
  trustWallet: {
    title: 'Trust Wallet',
    icon: TrustWallet,
    connectorId: osName === OsTypes.IOS ? ConnectorNames.WalletConnect : ConnectorNames.Injected,
    connection: {
      disabled: osName !== OsTypes.IOS ?
        (!(window as any).ethereum || !(window as any).ethereum?.isTrustWallet) :
        browserName !== BrowserTypes.MobileSafari,
      errorModal: IncorrectBrowserModal
    }
  },
  tokenPocket: {
    title: 'Token Pocket',
    icon: TokenPocket,
    connectorId: ConnectorNames.Injected,
    connection: {
      disabled: !(window as any).ethereum || !(window as any).ethereum?.isTokenPocket,
      errorModal: IncorrectBrowserModal
    }
  },
  walletConnect: {
    title: 'Wallet Connect',
    icon: WalletConnect,
    connectorId: ConnectorNames.WalletConnect,
    connection: {
      disabled: osName === OsTypes.IOS && browserName !== BrowserTypes.MobileSafari,
      errorModal: IsNotSafariModal
    }
  },
  binanceChain: {
    title: 'Binance Chain Wallet',
    icon: BinanceChain,
    connectorId: ConnectorNames.BSC,
    connection: {
      disabled: !(window as any).BinanceChain,
      errorModalProps: {
        supportedBrowsers: Object.keys(INSTALL_LINKS.BINANCE_CHAIN),
        installLink: INSTALL_LINKS.BINANCE_CHAIN[browserName]
      },
      errorModal: isMobile ?
        IncorrectBrowserModal :
        browserName in INSTALL_LINKS.BINANCE_CHAIN ?
          WalletExtensionInstallModal :
          BrowserNotSupported
    }
  },
  safePal: {
    title: 'SafePal',
    icon: SafePal,
    connectorId: ConnectorNames.Injected,
    connection: {
      disabled: !(window as any).ethereum || !(window as any).ethereum?.isSafePal,
      errorModal: IncorrectBrowserModal
    }
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
      ? [walletsConfig.metamask, walletsConfig.walletConnect, walletsConfig.trustWallet, walletsConfig.tokenPocket, walletsConfig.safePal]
      : [walletsConfig.metamask, walletsConfig.walletConnect, walletsConfig.binanceChain],
  },
  polygon: {
    title: 'Polygon',
    icon: Polygon,
    label: 'Polygon',
    chainId: production ? '137' : '80001',
    wallets: isMobile ? [walletsConfig.walletConnect, walletsConfig.safePal] : [walletsConfig.metamask, walletsConfig.walletConnect],
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
