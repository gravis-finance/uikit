import { DefaultTheme } from 'styled-components'
import { dark as darkAlert } from '../components/Alert/theme'
import { dark as darkButton } from '../components/Button/theme'
import { dark as darkCard } from '../components/Card/theme'
import { dark as darkTooltip } from '../components/Tooltip/theme'
import { dark as darkNav } from '../widgets/Menu/theme'
import { dark as darkModal } from '../widgets/Modal/theme'
import base from './base'
import { darkColors } from './colors'

const darkTheme: DefaultTheme = {
  ...base,
  isDark: true,
  alert: darkAlert,
  button: darkButton,
  colors: darkColors,
  card: darkCard,
  nav: darkNav,
  modal: darkModal,
  tooltip: darkTooltip,
}

export default darkTheme
