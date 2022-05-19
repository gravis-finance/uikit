import React from 'react'
import { getLanguage } from 'react-multi-lang'
import styled from 'styled-components'

import Flex from '../../components/Flex/Flex'
import Link from '../../components/Link/Link'
import { SvgProps } from '../../components/Svg'
import TelegramLinks from '../../components/TelegramLinks'
import { socials } from './config'
import * as IconModule from './icons'
import { PanelProps, PushedProps } from './types'

interface Props extends PanelProps, PushedProps {}

const Icons = IconModule as unknown as { [key: string]: React.FC<SvgProps> }

const Container = styled.div<{ isPushed?: boolean }>`
  flex: none;
  padding: 8px 4px;

  @media screen and (max-width: 967px) {
    position: relative;
    ${({ isPushed }) => (!isPushed ? 'display: none;' : '')}
  }

  @media screen and (max-height: 850px) and (max-width: 968px) {
    padding: 8px 4px 72px 4px;
  }
  @media not all and (min-resolution: 0.001dpcm) {
    padding: 8px 4px 120px 4px;
  }
`

const SocialEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 28px;

  &:not(:last-child) {
    margin-bottom: 50px;
  }
  @media screen and (max-width: 967px) {
    padding: 0;
  }
`

const StyledExternalLink = styled(Link)`
  margin-bottom: 25px;
  svg * {
    fill: #929292;
    transition: fill 100ms ease-in-out;
  }
  :hover {
    svg * {
      stroke: none !important;
      fill: #009ce1;
    }
  }
`

const PanelFooter: React.FC<Props> = ({ isPushed, pushNav }) => {
  // eslint-disable-next-line consistent-return
  const filterHref = (href: string) => {
    if (href.includes('t.me')) {
      if (getLanguage() === 'jp') return 'https://t.me/gravis_finance_jp'
      return 'https://t.me/Gravis_Finance_En'
    }
    return href
  }

  return (
    <Container isPushed={isPushed}>
      <SocialEntry>
        <Flex
          flexWrap="wrap"
          justifyContent="space-evenly"
          style={{ width: '100%' }}
        >
          {socials.map((social) => {
            const Icon = Icons[social.icon]
            const iconProps = {
              width: '16px',
              color: 'textSubtle',
              style: { cursor: 'pointer' }
            }
            if (social.label === 'Telegram')
              return <TelegramLinks pushNav={pushNav} key={social.label} />
            return (
              <StyledExternalLink
                external
                key={social.label}
                href={filterHref(social.href)}
                aria-label={social.label}
              >
                <Icon {...iconProps} />
              </StyledExternalLink>
            )
          })}
        </Flex>
      </SocialEntry>
    </Container>
  )
}

export default PanelFooter
