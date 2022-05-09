import { socialNetworksLinks, SocialNetworksType } from '../../constants'
import { ChineseIcon, EnglishIcon, JapaneseIcon, RussianIcon, SpanishIcon, VietnameseIcon } from './icons'

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
    items: [{ label: 'Big Bang Round', href: 'https://gravis.finance', external: true }],
  },
  {
    label: 'Public Round',
    icon: 'TeamsIcon',
    items: [
      {
        label: 'Staking',
        href: 'https://public.gravis.finance/staking',
      },
      {
        label: 'Sale',
        href: 'https://public.gravis.finance/sale',
      },
    ]
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/gravis',
        external: true,
      },
      {
        label: 'Docs',
        href: 'https://docs.gravis.finance',
        external: true,
      },
      {
        label: 'Blog',
        href: 'https://gravis-finance.medium.com/',
        external: true,
      },
    ],
  },
]

export const socials = [
  {
    label: 'GitHub',
    icon: 'GitHubIcon',
    href: socialNetworksLinks[SocialNetworksType.GITHUB],
  },
  {
    label: 'Telegram',
    icon: 'TelegramIcon',
    href: socialNetworksLinks[SocialNetworksType.TELEGRAM],
  },
  {
    label: 'Twitter',
    icon: 'TwitterIcon',
    href: socialNetworksLinks[SocialNetworksType.TWITTER],
  },
  {
    label: 'Medium',
    icon: 'MediumIcon',
    href: socialNetworksLinks[SocialNetworksType.MEDIUM],
  },
  {
    label: 'Discord',
    icon: 'DiscordIcon',
    href: socialNetworksLinks[SocialNetworksType.DISCORD],
  },
]

export const availableLanguages = [
  {
    name: 'EN',
    icon: EnglishIcon,
  },
  {
    name: 'JP',
    icon: JapaneseIcon,
  },
  {
    name: 'CN',
    icon: ChineseIcon,
  },
  {
    name: 'RU',
    icon: RussianIcon,
  },
  {
    name: 'ES',
    icon: SpanishIcon,
  },
  {
    name: 'VIE',
    icon: VietnameseIcon,
  },
]

export const MENU_HEIGHT = 97
export const MENU_ENTRY_HEIGHT = 44
export const SIDEBAR_WIDTH_FULL = 258
export const SIDEBAR_WIDTH_REDUCED = 88
