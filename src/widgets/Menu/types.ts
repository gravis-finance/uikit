import { ReactNode } from 'react'

import { Login } from '../WalletModal/types'
import type { UserBlockProps } from './UserBlock'

export interface LangType {
  code: string
  language: string
}

export interface Profile {
  username?: string
  image?: string
  profileLink: string
  noProfileLink: string
  showPip?: boolean
}

export interface PushedProps {
  isPushed: boolean
  pushNav: (isPushed: boolean) => void
}

export interface NavTheme {
  background: string
  hover: string
}

export interface ChipProps {
  title: string
  color: string
}

export interface SubChipProps extends ChipProps {
  animation?: boolean
}

export interface MenuSubEntry {
  label: string
  href?: string
  calloutClass?: string
  external?: boolean
  chip?: SubChipProps
}

export interface MenuEntry {
  label: string
  icon: string
  items?: MenuSubEntry[]
  href?: string
  blink?: boolean
  calloutClass?: string
  initialOpenState?: boolean
  external?: boolean
  chip?: ChipProps
}

export interface ModalOptions {
  modalTitle?: string
  modalFooter?: string
  modelCopyAddress?: string
  modelLogout?: string
  modalBscScan?: string
}

export interface PanelProps {
  isDark: boolean
  toggleTheme: (isDark: boolean) => void
  links: Array<MenuEntry>
}

export interface NavProps
  extends PanelProps,
    Pick<UserBlockProps, 'gmartProfileLink'> {
  account?: string
  login: Login
  loginBlockVisible?: boolean
  logout: () => void
  buttonTitle?: string
  options?: ModalOptions
  balance?: string
  explorerName?: string
  explorerLink?: string
  onTransactionHistoryHandler?: any
  balanceHook?: any
  setSelectedLanguage?: (name: string) => void
  customLanguage?: string
  networkSwitchVisible?: boolean
  subscribePushEvent?: (isPushed: boolean) => void
  networkSwitchItemCallback?: (chainId: string) => void
  gravisLogo?: ReactNode
  gravisLogoText?: string
  providedLogoLink?: string
  isShowMenuPanel?: boolean
}
