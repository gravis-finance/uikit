import { ChainId } from '@gravis.finance/sdk'
import { useMemo } from 'react'
import {
  browserName,
  BrowserTypes,
  isMobile,
  osName,
  OsTypes
} from 'react-device-detect'

import { NETWORK_NAMES } from '../../config/networks'
import { useWidgetsContext } from '../../WidgetsContext'
import BrowserNotSupported from './BrowserNotSupported'
import Aurora from './icons/Aurora'
import Binance from './icons/Binance'
import BinanceChain from './icons/BinanceChain'
import Ethereum from './icons/Ethereum'
import Huobi from './icons/Huobi'
import Metamask from './icons/Metamask'
import Near from './icons/Near'
import Phantom from './icons/Phantom'
import Polygon from './icons/Polygon'
import SafePal from './icons/SafePal'
import Solana from './icons/Solana'
import TokenPocket from './icons/TokenPocket'
import TrustWallet from './icons/TrustWallet'
import WalletConnect from './icons/WalletConnect'
import IncorrectBrowserModal from './IncorrectBrowserModal'
import IsNotSafariModal from './IsNotSafariModal'
import { MetamaskMobileRedirect } from './MetamaskMobileRedirect'
import { ConnectorNames, NetworksConfig, WalletsConfig } from './types'
import WalletExtensionInstallModal from './WalletExtensionInstallModal'

const production = process.env.REACT_APP_NODE_ENV === 'production'

export const INSTALL_LINKS = {
  METAMASK: {
    [BrowserTypes.Chrome]:
      'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn',
    [BrowserTypes.Firefox]:
      'https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/'
  } as any,
  BINANCE_CHAIN: {
    [BrowserTypes.Chrome]:
      'https://chrome.google.com/webstore/detail/binance-wallet/fhbohimaelbohpjbbldcngcnapndodjp',
    [BrowserTypes.Firefox]:
      'https://addons.mozilla.org/en-US/firefox/addon/binance-chain/'
  } as any
}

const WALLETS_CONFIG_BUILDER = ({ chainId }: { chainId?: ChainId }) => ({
  metamask: {
    title: 'Metamask',
    icon: Metamask,
    connectorId: ConnectorNames.Injected,
    connection: {
      disabled:
        !(window as any).ethereum || !(window as any).ethereum?.isMetaMask,
      errorModalProps: {
        supportedBrowsers: Object.keys(INSTALL_LINKS.METAMASK),
        installLink: INSTALL_LINKS.METAMASK[browserName]
      },
      errorModal: isMobile
        ? MetamaskMobileRedirect
        : browserName in INSTALL_LINKS.METAMASK
        ? WalletExtensionInstallModal
        : BrowserNotSupported
    },
    walletCardComponent: null
  },
  trustWallet: {
    title: 'Trust Wallet',
    icon: TrustWallet,
    connectorId:
      osName === OsTypes.IOS
        ? ConnectorNames.WalletConnect
        : ConnectorNames.Injected,
    connection: {
      disabled:
        osName !== OsTypes.IOS
          ? !(window as any).ethereum ||
            !(window as any).ethereum?.isTrustWallet
          : browserName !== BrowserTypes.MobileSafari,
      errorModal: IncorrectBrowserModal
    }
  },
  tokenPocket: {
    title: 'Token Pocket',
    icon: TokenPocket,
    connectorId: ConnectorNames.Injected,
    connection: {
      disabled:
        !(window as any).ethereum || !(window as any).ethereum?.isTokenPocket,
      errorModal: IncorrectBrowserModal
    }
  },
  walletConnect: {
    title: 'Wallet Connect',
    icon: WalletConnect,
    connectorId: ConnectorNames.WalletConnect,
    connection: {
      disabled:
        osName === OsTypes.IOS && browserName !== BrowserTypes.MobileSafari,
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
      errorModal: isMobile
        ? IncorrectBrowserModal
        : browserName in INSTALL_LINKS.BINANCE_CHAIN
        ? WalletExtensionInstallModal
        : BrowserNotSupported
    }
  },
  safePal: {
    title: 'SafePal',
    icon: SafePal,
    connectorId: ConnectorNames.Injected,
    connection: {
      disabled:
        !(window as any).ethereum || !(window as any).ethereum?.isSafePal,
      errorModal: IncorrectBrowserModal
    }
  },
  nearWallet: {
    title: 'Near Wallet',
    icon: Near,
    connectorId: ConnectorNames.Near,
    connection: {
      disabled: chainId
        ? ![ChainId.NEARMAINNET, ChainId.NEARTESTNET].includes(chainId)
        : false,
      errorModal: IncorrectBrowserModal
    }
  },
  phantom: {
    title: 'Phantom',
    icon: Phantom,
    connectorId: ConnectorNames.Phantom,
    connection: {
      disabled: chainId
        ? ![ChainId.SOLANAMAINNET, ChainId.SOLANATESTNET].includes(chainId)
        : false,
      errorModal: IncorrectBrowserModal
    }
  }
})

export const useWalletsConfig = () => {
  const { chainId } = useWidgetsContext()
  return useMemo(() => WALLETS_CONFIG_BUILDER({ chainId }), [chainId])
}

export const useWalletsList = () => {
  const walletsConfig = useWalletsConfig()
  return useMemo(() => Object.values(walletsConfig), [walletsConfig])
}

export const NETWORKS_CONFIG_BUILDER = ({
  walletsConfig
}: {
  walletsConfig: { [key: string]: WalletsConfig }
}) =>
  Object.fromEntries(
    Object.entries({
      [NETWORK_NAMES.HUOBI]: {
        title: 'Huobi',
        icon: Huobi,
        label: 'HECO',
        chainId: production ? ChainId.HECOMAINNET : ChainId.HECOTESTNET,
        wallets: isMobile
          ? [walletsConfig.walletConnect, walletsConfig.tokenPocket]
          : [walletsConfig.metamask, walletsConfig.walletConnect]
      },
      [NETWORK_NAMES.BINANCE]: {
        title: 'Binance',
        icon: Binance,
        label: 'BSC',
        chainId: production ? ChainId.MAINNET : ChainId.BSCTESTNET,
        wallets: isMobile
          ? [
              walletsConfig.metamask,
              walletsConfig.walletConnect,
              walletsConfig.trustWallet,
              walletsConfig.tokenPocket,
              walletsConfig.safePal
            ]
          : [
              walletsConfig.metamask,
              walletsConfig.walletConnect,
              walletsConfig.binanceChain
            ]
      },
      [NETWORK_NAMES.POLYGON]: {
        title: 'Polygon',
        icon: Polygon,
        label: 'Polygon',
        chainId: production ? ChainId.MATICMAINNET : ChainId.MATICTESTNET,
        wallets: isMobile
          ? [walletsConfig.walletConnect, walletsConfig.safePal]
          : [walletsConfig.metamask, walletsConfig.walletConnect]
      },
      [NETWORK_NAMES.ETHEREUM]: {
        title: 'Ethereum',
        icon: Ethereum,
        label: 'Ethereum',
        chainId: production ? ChainId.ETHEREUMMAINNET : ChainId.ETHEREUMTESTNET,
        wallets: isMobile
          ? [walletsConfig.walletConnect]
          : [walletsConfig.metamask, walletsConfig.walletConnect]
      },
      [NETWORK_NAMES.AURORA]: {
        title: 'Aurora',
        icon: Aurora,
        label: 'Aurora',
        chainId: production ? ChainId.AURORAMAINNET : ChainId.AURORATESTNET,
        wallets: isMobile
          ? [
              walletsConfig.metamask,
              walletsConfig.walletConnect,
              walletsConfig.tokenPocket
            ]
          : [walletsConfig.metamask, walletsConfig.walletConnect]
      },
      [NETWORK_NAMES.NEAR]: {
        title: 'Near',
        icon: Near,
        label: 'Near',
        chainId: production ? ChainId.NEARMAINNET : ChainId.NEARTESTNET,
        wallets: isMobile
          ? [walletsConfig.nearWallet]
          : [walletsConfig.nearWallet]
      },
      [NETWORK_NAMES.SOLANA]: {
        title: 'Solana',
        icon: Solana,
        label: 'Solana',
        chainId: production ? ChainId.SOLANAMAINNET : ChainId.SOLANATESTNET,
        wallets: isMobile ? [walletsConfig.phantom] : [walletsConfig.phantom]
      }
    }).map(([key, value]) => [
      key,
      { ...value, chainId: value.chainId.toString(), key } as NetworksConfig & {
        chainId: string
        key: NETWORK_NAMES
      }
    ])
  )

export const useNetworksConfig = () => {
  const walletsConfig = useWalletsConfig()
  return useMemo(
    () => NETWORKS_CONFIG_BUILDER({ walletsConfig }),
    [walletsConfig]
  )
}

export const useNetworksList = () => {
  const networksConfig = useNetworksConfig()
  return useMemo(() => Object.values(networksConfig), [networksConfig])
}

export const connectorLocalStorageKey = 'connectorId'
