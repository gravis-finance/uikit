import styled from "styled-components";
import { variant as StyledSystemVariant } from "styled-system";
import { ImageProps, Variant, variants } from "./types";
import TokenImage from "./TokenImage";

interface StyledImageProps extends ImageProps {
  variant: Variant;
}

export const StyledPrimaryImage = styled(TokenImage) <StyledImageProps>`
  position: absolute;
  width: ${({ variant }) => {
    switch (variant) {
      case variants.DEFAULT:
        return "92%"
      case variants.EQUIVAlENT:
        return "100%"
      default:
        return "82%"
    }
  }} // 92, 82 are arbitrary numbers to fit the variant
  height: ${({ variant }) => {
    switch (variant) {
      case variants.DEFAULT:
        return "92%"
      case variants.EQUIVAlENT:
        return "100%"
      default:
        return "82%"
    }
  }}

  ${StyledSystemVariant({
    variants: {
      [variants.DEFAULT]: {
        bottom: "auto",
        left: 0,
        right: "auto",
        top: 0,
        zIndex: 5,
      },
      [variants.INVERTED]: {
        bottom: 0,
        left: "auto",
        right: 0,
        top: "auto",
        zIndex: 6,
      },
      [variants.EQUIVAlENT]: {
        bottom: "auto",
        left: 0,
        right: "auto",
        top: 0,
        zIndex: 5,
      },
    },
  })}
`;

export const StyledSecondaryImage = styled(TokenImage) <StyledImageProps>`
  position: absolute;
  width: 50%;
  height: 50%;

  ${StyledSystemVariant({
  variants: {
    [variants.DEFAULT]: {
      bottom: 0,
      left: "auto",
      right: 0,
      top: "auto",
      zIndex: 6,
    },
    [variants.INVERTED]: {
      bottom: "auto",
      left: 0,
      right: "auto",
      top: 0,
      zIndex: 5,
    },
    [variants.EQUIVAlENT]: {
      maskImage: "radial-gradient(circle at left, transparent 40%, black 55%)",
      width: "100%",
      height: "100%",
      bottom: "auto",
      left: "67%",
      right: 0,
      top: 0,
      zIndex: 6,
    },
  },
})}
`;
