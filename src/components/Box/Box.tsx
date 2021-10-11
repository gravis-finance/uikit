import styled from 'styled-components'
import {
  background,
  border,
  layout,
  position,
  space,
  typography,
  color,
  flexbox,
  grid,
  display,
  compose,
  system,
} from 'styled-system'
import { BoxProps } from './types'

const textTransform = system({
  textTransform: true,
})

const Box = styled.div<BoxProps>(
  compose(background, border, layout, position, space, color, typography, display, grid, flexbox, textTransform)
)

export default Box
