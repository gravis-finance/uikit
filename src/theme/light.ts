import { DefaultTheme } from 'styled-components'

import { light as lightAlert } from '../components/Alert/theme'
import { light as lightButton } from '../components/Button/theme'
import { light as lightCard } from '../components/Card/theme'
import { light as lightTooltip } from '../components/Tooltip/theme'
import { light as lightNav } from '../widgets/Menu/theme'
import { light as lightModal } from '../widgets/Modal/theme'
import base from './base'
import { lightColors } from './colors'

const lightTheme: DefaultTheme = {
  ...base,
  isDark: false,
  alert: lightAlert,
  button: lightButton,
  colors: lightColors,
  card: lightCard,
  nav: lightNav,
  modal: lightModal,
  tooltip: lightTooltip,
}

export default lightTheme
