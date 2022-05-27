import { FC } from 'react'

import { SvgProps } from '../../components/Svg/types'

export enum ConnectorNames {
  Injected = 'injected',
  WalletConnect = 'walletconnect',
  BSC = 'bsc',
  Near = 'near',
  Phantom = 'phantom'
}

export type Login = (connectorId: string) => void

export interface WalletsConfig {
  title: string
  icon: FC<SvgProps>
  connectorId: ConnectorNames
  connection: {
    disabled: boolean
    errorModalProps?: any
    errorModal: any
  }
}

export interface NetworksConfig {
  title: string
  label: string
  chainId: string
  icon: FC<SvgProps>
  wallets: WalletsConfig[]
}
