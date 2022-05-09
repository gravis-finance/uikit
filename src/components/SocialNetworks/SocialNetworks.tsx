import React from 'react'
import styled from 'styled-components'

import { socialNetworksLinks, SocialNetworksType } from '../../constants'
import { getCurrentLanguage } from '../../util/getCurrentLanguage'
import { DiscordIcon,GithubIcon, MediumIcon, TelegramIcon, TwitterIcon } from './social-icons'

const StyledWrapper = styled.div`
  margin-top: 20px;
  @media screen and (max-width: 1024px) {
    margin: 0 auto;
  }
  > *:not(:last-child) {
    margin-right: 10px;
  }
`

const LinkItem = styled.a`
  cursor: pointer;
  background-color: #292929;
  border: 1px solid #2e2e2e;
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.4), -4px -4px 12px rgba(255, 255, 255, 0.05);
  border-radius: 45px;
  padding: 16px 16px 12px 16px;
  transition: background-color 200ms ease-in-out;

  :hover {
    background-color: #242424;
  }
`

const SocialNetworks: React.FC = () => {
  return (
    <StyledWrapper>
      <LinkItem href={socialNetworksLinks[SocialNetworksType.GITHUB]} target="_blank" rel="noopener  noreferrer">
        <GithubIcon />
      </LinkItem>
      <LinkItem href={`${getCurrentLanguage() === 'jp' ? 'https://t.me/gravis_finance_jp' : 'https://t.me/Gravis_Finance_En'}`} target="_blank" rel="noopener  noreferrer">
        <TelegramIcon />
      </LinkItem>
      <LinkItem href={socialNetworksLinks[SocialNetworksType.TWITTER]} target="_blank" rel="noopener  noreferrer">
        <TwitterIcon />
      </LinkItem>
      <LinkItem href={socialNetworksLinks[SocialNetworksType.MEDIUM]} target="_blank" rel="noopener  noreferrer">
        <MediumIcon />
      </LinkItem>
      <LinkItem href={socialNetworksLinks[SocialNetworksType.DISCORD]} target="_blank" rel="noopener  noreferrer" style={{ padding: '16px 13.5px 12px 13.5px' }}>
        <DiscordIcon/>
      </LinkItem>
    </StyledWrapper>
  )
}

export default SocialNetworks
