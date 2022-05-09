import { AlertTheme } from '../components/Alert/types'
import { ButtonTheme } from '../components/Button/types'
import { CardTheme } from '../components/Card/types'
import { TooltipTheme } from '../components/Tooltip/types'
import { NavTheme } from '../widgets/Menu/types'
import { ModalTheme } from '../widgets/Modal/types'
import { Breakpoints, Colors, MediaQueries, Radii, Shadows, Spacing, ZIndices } from './types'

export interface GravisTheme {
  siteWidth: number
  isDark: boolean
  alert: AlertTheme
  colors: Colors
  button: ButtonTheme
  card: CardTheme
  nav: NavTheme
  modal: ModalTheme
  breakpoints: Breakpoints
  mediaQueries: MediaQueries
  spacing: Spacing
  shadows: Shadows
  tooltip: TooltipTheme
  radii: Radii
  zIndices: ZIndices
}

export { lightColors } from './colors'
export { darkColors } from './colors'
export { default as dark } from './dark'
export { default as light } from './light'
