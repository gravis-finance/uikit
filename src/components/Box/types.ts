import { HTMLAttributes } from "react";
import {
  BackgroundProps,
  BorderProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  ColorProps,
  TypographyProps
} from "styled-system";

export interface BoxProps
  extends BackgroundProps,
    BorderProps,
    LayoutProps,
    PositionProps,
    SpaceProps,
    ColorProps,
    TypographyProps,
    Omit<HTMLAttributes<HTMLDivElement>, 'color'> {}
