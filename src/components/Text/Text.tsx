import styled, { DefaultTheme } from 'styled-components'
import { space } from 'styled-system'

import getThemeValue from '../../util/getThemeValue'
import { TextProps } from './types'

interface ThemedProps extends TextProps {
  theme: DefaultTheme
}

const getColor = ({ color, theme }: ThemedProps) => {
  return getThemeValue(`colors.${color}`, color)(theme)
}

const getFontSize = ({ fontSize, small }: TextProps) => {
  return small ? '14px' : fontSize || '16px'
}

const Text = styled.div<TextProps>`
  color: ${getColor};
  font-size: ${getFontSize};
  font-weight: ${({ bold }) => (bold ? 600 : 400)};
  line-height: 1.5;
  letter-spacing: 0.3px;
  ${({ textTransform }) => textTransform && `text-transform: ${textTransform};`}
  ${space}
`

Text.defaultProps = {
  color: 'text',
  small: false,
}

export default Text
