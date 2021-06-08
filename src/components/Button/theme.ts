import { ButtonTheme, variants } from './types'
import { lightColors, darkColors } from '../../theme/colors'

const { PRIMARY, SECONDARY, TERTIARY, TEXT, DANGER, SUBTLE, SUCCESS, DEFAULT, DARK, LIGHT } = variants

export const light: ButtonTheme = {
  [PRIMARY]: {
    background: '#242424',
    backgroundActive: lightColors.primary,
    backgroundHover: lightColors.primaryBright,
    border: `2px solid #009CE1`,
    borderColorHover: lightColors.primaryBright,
    boxShadow:
      '4px 4px 12px rgba(0, 0, 0, 0.4), -4px -4px 12px rgba(255, 255, 255, 0.05), 4px 4px 12px rgba(0, 0, 0, 0.4), -4px -4px 12px rgba(255, 255, 255, 0.05)',
    boxShadowActive: 'none',
    focusBorderColor: '#8EDCFF',
    color: '#FFFFFF',
  },
  [SECONDARY]: {
    background: 'transparent',
    backgroundActive: lightColors.primary,
    backgroundHover: lightColors.primaryBright,
    border: `1px solid ${lightColors.primary}`,
    borderColorHover: lightColors.primaryBright,
    boxShadow: 'none',
    boxShadowActive: 'none',
    color: lightColors.primary,
    focusBorderColor: '',
    colorHover: '#fff',
  },
  [TERTIARY]: {
    background: lightColors.tertiary,
    backgroundActive: lightColors.primaryBright,
    backgroundHover: lightColors.primary,
    border: '2px solid transparent',
    borderColorHover: 'none',
    boxShadow: 'none',
    boxShadowActive: 'none',
    color: lightColors.primary,
    focusBorderColor: '',
    colorHover: '#fff',
  },
  [TEXT]: {
    background: 'transparent',
    backgroundActive: 'transparent',
    backgroundHover: lightColors.tertiary,
    border: '2px solid transparent',
    borderColorHover: 'none',
    boxShadow: 'none',
    boxShadowActive: 'none',
    focusBorderColor: '',
    color: lightColors.primary,
  },
  [DANGER]: {
    background: 'linear-gradient(90.28deg, #292929 0%, #242424 100%)',
    backgroundActive: '#FFA100', // darkten 10%
    backgroundHover: '#FFA100', // lighten 10%
    border: '2px solid #FFA100',
    borderColorHover: '#FFA100',
    boxShadow: 'none',
    boxShadowActive: 'none',
    focusBorderColor: '#FFE8BF',
    color: '#FFFFFF',
  },
  [SUBTLE]: {
    background: lightColors.textSubtle,
    backgroundActive: `${lightColors.textSubtle}D9`, // 70% opacity
    backgroundHover: `${lightColors.textSubtle}B3`, // 85% opacity
    border: '2px solid transparent',
    borderColorHover: 'none',
    boxShadow: 'none',
    boxShadowActive: 'none',
    color: '#FFFFFF',
  },
  [SUCCESS]: {
    background: lightColors.success,
    backgroundActive: `${lightColors.success}D9`, // 70% opacity
    backgroundHover: `${lightColors.success}B3`, // 85% opacity
    border: '2px solid transparent',
    borderColorHover: 'none',
    boxShadow: 'none',
    boxShadowActive: 'none',
    color: '#FFFFFF',
  },
  [DEFAULT]: {
    background: 'white',
    backgroundActive: `${lightColors.success}D9`, // 70% opacity
    backgroundHover: `${lightColors.success}B3`, // 85% opacity
    border: '2px solid transparent',
    borderColorHover: 'none',
    boxShadow: 'none',
    boxShadowActive: 'none',
    color: '#24BA7B',
  },
  [DARK]: {
    background: 'linear-gradient(90.28deg, #292929 0%, #242424 100%)',
    backgroundActive:
      'linear-gradient(90.28deg, #242424 0%, #1F1F1F 100%), linear-gradient(90.28deg, #242424 0%, #202020 100%)', // 70% opacity
    backgroundHover: 'linear-gradient(90.28deg, #242424 0%, #202020 100%)', // 85% opacity
    border: 'none',
    borderColorHover: 'transparent',
    boxShadow: '4px 4px 12px rgba(0, 0, 0, 0.4), -4px -4px 12px rgba(255, 255, 255, 0.05)',
    boxShadowActive:
      'inset 0px -1px 0px rgb(129 129 129 / 15%), inset 0px 4px 25px rgb(0 0 0 / 25%), inset 0px -1px 0px rgb(129 129 129 / 15%), inset 0px 4px 25px rgb(0 0 0 / 25%)',
    focusBorderColor: '#393939',
    color: '#fff',
  },
  [LIGHT]: {
    background: 'white',
    backgroundActive: `white`, // 70% opacity
    backgroundHover: `white`, // 85% opacity
    border: '2px solid transparent',
    borderColorHover: 'transparent',
    boxShadow: 'none',
    boxShadowActive: 'none',
    color: '#000',
  },
}

export const dark: ButtonTheme = {
  [PRIMARY]: {
    ...light.primary,
  },
  [SECONDARY]: {
    ...light.secondary,
  },
  [TERTIARY]: {
    ...light.tertiary,
    background: darkColors.tertiary,
    backgroundActive: darkColors.tertiary,
    backgroundHover: darkColors.tertiary,
    color: darkColors.primary,
  },
  [TEXT]: {
    ...light.text,
    backgroundHover: darkColors.tertiary,
  },
  [DANGER]: {
    ...light.danger,
  },
  [SUBTLE]: {
    ...light.subtle,
  },
  [SUCCESS]: {
    ...light.success,
  },
  [DEFAULT]: {
    ...light.default,
  },
  [DARK]: {
    ...light.default,
  },
  [LIGHT]: {
    ...light.default,
  },
}
