import { HTMLAttributes } from 'react'
import {
  BackgroundProps,
  BorderProps,
  ColorProps,
  DisplayProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  TypographyProps,
} from 'styled-system'

export interface BoxProps
  extends BackgroundProps,
    BorderProps,
    LayoutProps,
    PositionProps,
    SpaceProps,
    ColorProps,
    TypographyProps,
    DisplayProps,
    FlexboxProps,
    GridProps,
    Omit<HTMLAttributes<HTMLDivElement>, 'color'> {
  textTransform?: 'capitalize' | 'uppercase' | 'lowercase' | 'none'
}
