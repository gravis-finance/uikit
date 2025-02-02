import styled from 'styled-components'

import Button from './Button'
import { ButtonProps } from './types'

const IconButton = styled(Button)<ButtonProps>`
  padding: 0;
  width: ${({ size }) => (size === 'sm' ? '32px' : '48px')};
  ${({ buttonSize }) => buttonSize && `width: ${buttonSize}; height: ${buttonSize}`}
`

export default IconButton
