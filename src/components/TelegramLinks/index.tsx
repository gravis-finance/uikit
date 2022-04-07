import React from 'react'
import styled from 'styled-components'
import {
  ChineseIcon,
  EnglishIcon,
  IndonesiaIcon,
  JapaneseIcon,
  PhilippinesIcon,
  RussianIcon,
  SpanishIcon,
  TelegramIcon,
  TurkishIcon,
  VietnameseIcon,
} from '../../widgets/Menu/icons'
import { Text } from '../Text'
import { Flex } from '../Flex'
import { GravisDarkIcon } from '../Svg'

const Container = styled.div`
  position: relative;
  margin-bottom: 25px;

  > svg * {
    fill: #929292;
    transition: fill 100ms ease-in-out;
  }

  :hover {
    > svg * {
      stroke: none !important;
      fill: #009ce1;
    }
  }

  :hover {
    > div:last-child {
      opacity: 1;
      pointer-events: all;
    }
  }
`

const LinksContainer = styled.div`
  position: absolute;
  bottom: 40px;
  background-color: #3d3d3d;
  z-index: 3;
  border-radius: 8px;
  width: 150px;
  left: -65px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 200ms ease-in-out;

  > a {
    position: relative;
    padding: 8px;
    z-index: 3;
    :hover {
      background-color: #343434;
    }
  }

  > a:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }

  > a:first-child {
    border-radius: 8px 8px 0 0;
  }

  > a:last-child {
    border-radius: 0 0 8px 8px;
  }

  ::before {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    z-index: 2;
    border: 1px solid #3d3d3d;
    transform: rotate(45deg);
    background: #3d3d3d;
    bottom: -6px;
    left: 69px;
  }

  ::after {
    content: '';
    position: absolute;
    height: 64px;
    z-index: 2;
    width: 90px;
    bottom: -64px;
    left: 30px;
  }
`

const links = [
  {
    label: 'English',
    href: 'https://t.me/Gravis_Finance_En',
    icon: <EnglishIcon />,
  },
  {
    label: 'Русский',
    href: 'https://t.me/Gravis_Finance_Ru',
    icon: <RussianIcon />,
  },
  {
    label: 'Philippines',
    href: 'https://t.me/Gravis_Finance_PH',
    icon: <PhilippinesIcon width={24} height={24} />,
  },
  {
    label: 'Tiếng Việt',
    href: 'https://t.me/Gravisfinance_vn',
    icon: <VietnameseIcon width={24} height={24} />,
  },
  {
    label: '中文',
    href: 'https://t.me/Gravis_Finance_CN',
    icon: <ChineseIcon width={24} height={24} />,
  },
  {
    label: '日本語',
    href: 'https://t.me/Gravis_Finance_JP',
    icon: <JapaneseIcon width={24} height={24} />,
  },
  {
    label: 'Español',
    href: 'https://t.me/Gravis_Finance_ES',
    icon: <SpanishIcon width={24} height={24} />,
  },
  {
    label: 'Türkçe',
    href: 'https://t.me/GravisFinanceTR',
    icon: <TurkishIcon width={24} height={24} />,
  },
  {
    label: 'Indonesian',
    href: 'https://t.me/gravisfinanceindonesia',
    icon: <IndonesiaIcon width={24} height={24} />,
  },
]

type Props = {
  pushNav: (isPushed: boolean) => void
}

const TelegramLinks: React.FC<Props> = ({ pushNav }) => {
  return (
    <Container onMouseOver={() => pushNav(true)}>
      <TelegramIcon />
      <LinksContainer>
        <Flex alignItems="center" as="a" href="https://t.me/Gravis_Finance_News" target="_blank">
          <GravisDarkIcon width={24} height={24} />
          <Text ml="8px" color="rgba(255, 255, 255, 0.5)">
            Channel
          </Text>
        </Flex>
        <Text ml="8px" p="8px 0 2px 0">
          Chats:
        </Text>
        {links.map((link) => (
          <Flex alignItems="center" as="a" href={link.href} target="_blank">
            {link.icon}
            <Text ml="8px" color="rgba(255, 255, 255, 0.5)">
              {link.label}
            </Text>
          </Flex>
        ))}
      </LinksContainer>
    </Container>
  )
}

export default TelegramLinks
