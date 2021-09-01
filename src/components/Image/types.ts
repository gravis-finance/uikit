import { SpaceProps } from 'styled-system'

export interface ContainerProps {
  width: number
  height: number
  responsive?: boolean
}

export interface ImageProps extends ContainerProps, SpaceProps {
  src: string
  alt?: string
}

export const variants = {
  DEFAULT: 'default',
  INVERTED: 'inverted',
  EQUIVAlENT: 'equivalent',
} as const

export type Variant = typeof variants[keyof typeof variants]

export interface TokenPairImageProps extends ContainerProps {
  primarySrc: string
  secondarySrc: string
  variant?: Variant
  height: number
  width: number
  primaryImageProps?: Omit<ImageProps, 'width' | 'height'>
  secondaryImageProps?: Omit<ImageProps, 'width' | 'height'>
}
