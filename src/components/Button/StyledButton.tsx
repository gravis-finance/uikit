import styled, { DefaultTheme } from 'styled-components'
import { space } from 'styled-system'
import { ButtonProps, ButtonThemeVariant, variants } from './types'

type ThemedProps = {
  theme: DefaultTheme
} & ButtonProps

const getDisabledStyles = ({ isloading, theme }: ThemedProps) => {
  if (isloading === true) {
    return `
      &:disabled,
      &.button--disabled {
        cursor: default;
      }
    `
  }

  return `
    &:disabled,
    &.button--disabled {
      background: ${theme.colors.backgroundDisabled};
      border-color: ${theme.colors.backgroundDisabled};
      box-shadow: none;
      color: ${theme.colors.textDisabled};
      cursor: default;
    }
  `
}

const removePointerEvents = ({ disabled, as }: ThemedProps) => {
  if (disabled && as && as !== 'button') {
    return `
      pointer-events: none;
    `
  }

  return ''
}

const getButtonVariantProp = (prop: keyof ButtonThemeVariant) => ({
  theme,
  variant = variants.PRIMARY,
}: ThemedProps) => {
  return theme.button[variant][prop]
}

const StyledButton = styled.button<ButtonProps>`
  user-select: none;
  align-items: center;
  background: ${getButtonVariantProp('background')};
  border: ${getButtonVariantProp('border')};
  border-radius: 41px;
  color: ${getButtonVariantProp('color')};
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  /* max-content instead of auto for Safari fix */
  width: ${({ fullwidth }) => (fullwidth ? '100%' : 'max-content')};
  height: ${({ size }) => (size === 'sm' ? '32px' : '48px')};
  line-height: 1;
  letter-spacing: 0.03em;
  justify-content: center;
  outline: 0;
  padding: ${({ size }) => (size === 'sm' ? '0 16px' : '0 24px')};
  transition: background 0.2s ease-in-out, box-shadow 0.2s ease-in-out, border 0.2s ease-in-out;
  opacity: ${({ isloading }) => (isloading ? 0.5 : 1)};
  box-shadow: ${getButtonVariantProp('boxShadow')};

  &:hover:not(:disabled):not(.button--disabled):not(:active) {
    background: ${getButtonVariantProp('backgroundHover')};
    border-color: ${getButtonVariantProp('borderColorHover')};
  }
  &:hover {
    &,
    & > div,
    & p,
    & span {
      color: ${getButtonVariantProp('colorHover')};
    }
    & svg {
      fill: ${getButtonVariantProp('colorHover')};
    }
  }

  &:focus:not(:active) {
    color: ${getButtonVariantProp('colorPressed')};
    // box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.secondary};
  }

  &:active {
    background: ${getButtonVariantProp('backgroundActive')};
    box-shadow: ${getButtonVariantProp('boxShadowActive')};
  }

  &:focus {
    border-color: ${getButtonVariantProp('focusBorderColor')};
  }

  ${({ isactive }) =>
    isactive
      ? `
       background: linear-gradient(90.28deg, #292929 0%, #242424 100%);
       box-shadow: inset 0px -1px 0px rgba(129, 129, 129, 0.15), inset 0px 4px 25px rgba(0, 0, 0, 0.25), inset 0px -1px 0px rgba(129, 129, 129, 0.15), inset 0px 4px 25px rgba(0, 0, 0, 0.25);
    `
      : ''}

  ${({ buttonType }) =>
    buttonType === 'close' &&
    `
    background-color: #292929;
    border: 1px solid #2E2E2E;
    box-sizing: border-box;
    box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.4), -4px -4px 12px rgba(255, 255, 255, 0.05);
    border-radius: 45px;
    :hover {
      background-color: #242424 !important;
      border: 1px solid #2E2E2E !important;
    }
    :active {
      background-color: #242424 !important;
      border: 1px solid #2E2E2E !important;
      box-shadow: inset 0px -1px 0px rgba(129, 129, 129, 0.15), inset 0px 4px 25px rgba(0, 0, 0, 0.25) !important;
    }
    :focus {
      border-color: #393939;
    }
  `}

  ${({ buttonType }) =>
    buttonType === 'max' &&
    `
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 7px 8px;
    width: 40px;
    height: 24px;
    background: #2D4F5D;
    border-radius: 30px;
    font-size: 10px;
    box-shadow: none;
    color: #73D3FE;
    border: none;
    
    :hover {
      background: #3E6C7F !important;
    }
    :active, :focus {
      box-shadow: inset 0px 2px 0px #345A6A;
      background: #3E6C7F !important;
    }
  `}

  ${getDisabledStyles}
  ${removePointerEvents}
  ${space}
`

StyledButton.defaultProps = {
  fullwidth: false,
  type: 'button',
}

export default StyledButton
