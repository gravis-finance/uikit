import { Colors } from './types'

export const baseColors = {
  failure: '#EB9500',
  primary: '#009CE1',
  primaryBright: '#14B7FF',
  primaryDark: '#5849BD',
  secondary: '#7645D9',
  success: '#1EA76D',
  warning: '#FFB237',
  basic: '#8990A5',
  heading: '#0B1359',
  default: '#ffffff',
  dark: 'blue',
  light: 'red',
}

export const brandColors = {
  binance: '#F0B90B',
}

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: '#F4F5FA',
  backgroundDisabled: '#303030',
  contrast: '#191326',
  invertedContrast: '#FFFFFF',
  input: 'none',
  tertiary: '#EBEDF9',
  text: '#FFFFFF', // изменяет также цвет иконок
  textDisabled: 'rgba(255, 255, 255, 0.4)',
  textSubtle: '#ffffff',
  borderColor: '#E9EAEB',
  card: '#FFFFFF',
  gradients: {
    bubblegum: 'linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)',
  },
}

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: '#9A6AFF',
  background: '#100C18',
  backgroundDisabled: '#3c3742',
  contrast: '#FFFFFF',
  invertedContrast: '#191326',
  input: '#483f5a',
  primaryDark: '#0098A1',
  tertiary: '#353547',
  text: '#EAE2FC',
  textDisabled: '#666171',
  textSubtle: '#A28BD4',
  borderColor: '#524B63',
  card: '#27262c',
  gradients: {
    bubblegum: 'linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)',
  },
}
