// eslint-disable-next-line import/prefer-default-export
export const localStorageLanguageItem = 'gravisApplicationsLanguage'
export const urlSearchLanguageParam = 'gravisLanguage'
export const cookiesAcceptedParam = 'cookiesAccepted'

export const comparedNetworksIds = [
  {
    name: 'huobi',
    networks: [128, 256],
  },
  {
    name: 'binance',
    networks: [56, 97],
  },
  {
    name: 'polygon',
    networks: [137, 80001],
  },
]

export const termsOfUseLink = 'https://drive.google.com/file/d/1p5n2HUo3VNUhhbr60cKkjP_8dBHbMO4h/view?usp=sharing'
export const privacyAndPoliceLink = 'https://drive.google.com/file/d/1vWi8Zx-TD190to9LT8HP9Dhy5_IIj840/view?usp=sharing'

export enum SocialNetworksType {
  GITHUB = 'github',
  TELEGRAM = 'telegram',
  TWITTER = 'twitter',
  MEDIUM = 'medium',
  DISCORD = 'discord',
}

export const socialNetworksLinks = {
  [SocialNetworksType.GITHUB]: 'https://github.com/gravis-finance',
  [SocialNetworksType.TELEGRAM]: 'https://t.me/Gravis_Finance_News',
  [SocialNetworksType.TWITTER]: 'https://twitter.com/GravisFi',
  [SocialNetworksType.MEDIUM]: 'https://medium.com/gravis-finance',
  [SocialNetworksType.DISCORD]: 'https://discord.io/GravisFinance',
}
