import styled from 'styled-components'
import { background, border, layout, position, space, typography, color, compose } from 'styled-system'
import { BoxProps } from './types'

const Box = styled.div<BoxProps>(compose(background, border, layout, position, space, color, typography))

export default Box
