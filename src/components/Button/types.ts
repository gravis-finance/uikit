import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import { SpaceProps } from 'styled-system'

export const sizes = {
  SM: 'sm',
  MD: 'md',
} as const

export const types = {
  MAX: 'max',
  CLOSE: 'close',
} as const

export const variants = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
  TEXT: 'text',
  DANGER: 'danger',
  SUBTLE: 'subtle',
  SUCCESS: 'success',
  DEFAULT: 'default',
  DARK: 'dark',
  LIGHT: 'light',
  BLUE: 'blue',
  DARKENED: 'darkened',
} as const

export type Sizes = typeof sizes[keyof typeof sizes]
export type Types = typeof types[keyof typeof types]
export type Variants = typeof variants[keyof typeof variants]

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement> | AnchorHTMLAttributes<HTMLAnchorElement> | LinkProps

export type ButtonProps = {
  variant?: Variants
  size?: Sizes
  startIcon?: ReactNode
  endIcon?: ReactNode
  fullwidth?: boolean
  as?: 'a' | 'button' | typeof Link
  href?: string
  external?: boolean
  isloading?: boolean
  disabled?: boolean
  buttonType?: Types
  buttonSize?: string
  isactive?: boolean
} & ButtonTypes &
  SpaceProps

export type ButtonThemeVariant = {
  background: string
  backgroundActive: string
  backgroundHover: string
  border: string | number
  borderColorHover: string
  boxShadow: string
  boxShadowActive: string
  color: string
  colorHover?: string
  colorPressed?: string
  focusBorderColor?: string
}

export type ButtonTheme = {
  [key in Variants]: ButtonThemeVariant
}
