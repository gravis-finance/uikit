import { CSSProperties } from 'styled-components'
import { ButtonProps, Sizes, variants } from '../Button/types'

export type ButtonMenuItemProps = {
  isactive?: boolean
  size?: Sizes
} & ButtonProps

export interface ButtonMenuProps {
  variant?: typeof variants.PRIMARY | typeof variants.SUBTLE | typeof variants.DARK
  activeIndex?: number
  onClick?: (index: number) => void
  size?: Sizes
  children: React.ReactElement[],
  style?: CSSProperties,
}
