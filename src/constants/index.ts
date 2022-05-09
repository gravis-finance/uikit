// eslint-disable-next-line import/prefer-default-export
export const localStorageLanguageItem = 'gravisApplicationsLanguage'
export const urlSearchLanguageParam = 'gravisLanguage'
export const cookiesAcceptedParam = 'cookiesAccepted'

export const comparedNetworksIds = [
  {
    name: 'huobi',
    networks: [128, 256]
  },
  {
    name: 'binance',
    networks: [56, 97]
  },
  {
    name: 'polygon',
    networks: [137, 80001]
  }
]

export const termsOfUseLink =
  'https://drive.google.com/file/d/1p5n2HUo3VNUhhbr60cKkjP_8dBHbMO4h/view?usp=sharing'
export const privacyAndPoliceLink =
  'https://drive.google.com/file/d/1vWi8Zx-TD190to9LT8HP9Dhy5_IIj840/view?usp=sharing'

export enum SocialNetworksType {
  GITHUB = 'github',
  TELEGRAM = 'telegram',
  TWITTER = 'twitter',
  MEDIUM = 'medium',
  DISCORD = 'discord',
  COINGECKO = 'coingecko',
  COINMARKETCAP = 'coinmarketcap',
  EMAIL = 'email'
}

export const socialNetworksLinks = {
  [SocialNetworksType.GITHUB]: 'https://github.com/gravis-finance',
  [SocialNetworksType.TELEGRAM]: 'https://t.me/Gravis_Finance_en',
  [SocialNetworksType.TWITTER]: 'https://twitter.com/GravisFi',
  [SocialNetworksType.MEDIUM]: 'https://medium.com/gravis-finance',
  [SocialNetworksType.DISCORD]: 'https://discord.io/GravisFinance',
  [SocialNetworksType.COINGECKO]:
    'https://www.coingecko.com/en/coins/gravis-finance',
  [SocialNetworksType.COINMARKETCAP]:
    'https://coinmarketcap.com/currencies/gravis-finance/',
  [SocialNetworksType.EMAIL]: 'mailto: info@gravis.finance'
}
