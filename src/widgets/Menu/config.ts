import { EnglishIcon, JapaneseIcon } from './icons'

export const links = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.gravis.finance',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.gravis.finance/#/pool',
      },
    ],
  },
  // {
  //   label: 'Private Round NFTs',
  //   icon: 'PrivateRoundIcon',
  //   href: '/account'
  // },
  {
    label: 'Analytics',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/gravis',
      },
      {
        label: 'Docs',
        href: 'https://docs.gravis.finance',
      },
      {
        label: 'Blog',
        href: 'https://gravis-finance.medium.com/',
      },
    ],
  },
  {
    label: 'INO',
    icon: 'BigBangIcon',
    items: [{ label: 'Big Bang Round', href: 'https://gravis.finance' }],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/gravis',
      },
      {
        label: 'Docs',
        href: 'https://docs.gravis.finance',
      },
      {
        label: 'Blog',
        href: 'https://gravis-finance.medium.com/',
      },
    ],
  },
]

export const socials = [
  {
    label: 'GitHub',
    icon: 'GitHubIcon',
    href: 'https://github.com/gravis-finance',
  },
  {
    label: 'Telegram',
    icon: 'TelegramIcon',
    href: 'https://t.me/gravis_finance',
  },
  {
    label: 'Twitter',
    icon: 'TwitterIcon',
    href: 'https://twitter.com/gravis_finance',
  },
  {
    label: 'Medium',
    icon: 'MediumIcon',
    href: 'https://gravis-finance.medium.com/',
  },
]

export const availableLanguages = [
  {
    name: 'EN',
    icon: EnglishIcon
  },
  {
    name: 'JP',
    icon: JapaneseIcon
  }
]

export const MENU_HEIGHT = 97
export const MENU_ENTRY_HEIGHT = 44
export const SIDEBAR_WIDTH_FULL = 258
export const SIDEBAR_WIDTH_REDUCED = 88
