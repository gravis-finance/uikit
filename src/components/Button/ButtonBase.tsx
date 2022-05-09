import styled from 'styled-components'
import {
  color,
  ColorProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system'

const ButtonBase = styled.button<SpaceProps & LayoutProps & TypographyProps & ColorProps & PositionProps>`
  font: inherit;
  font-size: 1em;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: inherit;
  border: 0;
  cursor: pointer;
  margin: 0;
  outline: 0;
  padding: 0;
  position: relative;
  user-select: none;
  border-radius: 0;
  vertical-align: middle;
  text-decoration: none;
  background-color: transparent;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  box-sizing: border-box;
  ${space}
  ${layout}
  ${typography}
  ${color}
  ${position}
  
  &[disabled] {
    pointer-events: none;
  }

  ${({ disabled }) =>
    disabled &&
    `
    pointer-events: none;
  `}
`

export default ButtonBase
