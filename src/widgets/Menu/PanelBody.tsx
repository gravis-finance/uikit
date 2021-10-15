import React from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-multi-lang'
import { SvgProps } from '../../components/Svg'
import * as IconModule from './icons'
import Accordion from './Accordion'
import { MenuEntry, LinkLabel } from './MenuEntry'
import MenuLink from './MenuLink'
import { PanelProps, PushedProps } from './types'
import MenuButton from './MenuButton'
import { HamburgerCloseIcon } from './icons'
import Logo from './Logo'
import { Tooltip } from '../../components/Tooltip'
import { Spinner } from '../../components/Spinner'

interface Props extends PanelProps, PushedProps {
  isMobile?: boolean
  togglePush?: () => void
}

const Icons = IconModule as unknown as { [key: string]: React.FC<SvgProps> }

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;

  @media screen and (max-height: 900px) {
    ::-webkit-scrollbar {
      -webkit-appearance: none;
      width: 0;
      height: 0;
    }
    scrollbar-width: none;
  }
`

interface StyledIconProps {
  reverse?: boolean
}

const StyledIcon = styled.div`
   {
    height: 40px;
    width: 40px;
    display: flex;
    position: absolute;
    right: -14px;
    top: 44%;
    transition: background-color 150ms ease-in-out;
    box-sizing: content-box;
  }
  > * {
    margin: auto;
    transition: transform 200ms ease-in-out;
  }
  ${(props: StyledIconProps) =>
    props.reverse
      ? `> svg *:last-child {
    transform: rotate(180deg) translate(-44px, -135px);
  }`
      : ''}
`

const StyledLinksPanel = styled.div<{ isPushed?: boolean }>`
  padding: 18px;
 
  > div:not(:last-child) {
    margin-bottom: 16px;
  }
  @media screen and (max-width: 967px) {
    > div:not(:last-child) {
      margin-bottom: 0;
    }
  }
  
  ${({ theme }) => theme.mediaQueries.nav} {
      padding: 25px 18px;
      ${({ isPushed }) => (!isPushed ? 'padding: 25px 21px;' : '')}
    }
    @media screen and (max-width: 967px) {
        overflow-y: scroll;
        ::-webkit-scrollbar {
            -webkit-appearance: none;
            width: 0;
            height: 0;
        }
        scrollbar-width: none;
        margin-top: 40px;
      > div:not(:last-child) {
        border-bottom: 1px solid #313131;
        border-radius: 0;
      }
      > div > a {
        font-weight: 500;
      }
      > div > div:first-child {
        font-weight: 500;
      }
    }
  }
  
  @media screen and (max-height: 650px) {
    ${({ isPushed }) =>
      !isPushed
        ? `
      display: flex;
      flex-direction: column;
      align-items: center;
      > div:not(:last-child) {
        margin-bottom: 8px;
      }
      > div {
        width: 30px;
        height: 33px;
        > div {
          width: 30px;
          height: 33px;
        }
        svg {
          width: 18px;
        }
      }
    `
        : ''}
  }
`

const StyledLogoIcon = styled.div`
  display: none;
  margin-left: 24px;
  ${({ theme }) => theme.mediaQueries.nav} {
    display: block;
  }
`

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
`

const HotContainer = styled.div`
  height: auto;
  padding: 0px 4px;
  color: white;
  align-items: center;
  background-color: transparent;
  border: 2px solid rgb(235, 149, 0);
  border-radius: 16px;
  display: inline-flex;
  font-size: 11px;
  font-weight: 400;
  height: 22px;
  line-height: 1.5;
  padding: 0px 8px;
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  width: 50px;
  // margin-left: 8px;
  
  :after {
    content: '';
    position: absolute;
    left: -12px;
    top: -1px;
    width: 10px;
    height: 22px;
    background: rgba(255, 255, 255, 0.5);
    transform: skew(-30deg);
    animation: shine-hot 2s ease-in-out infinite;
  }
  
  @keyframes shine-hot {
    0% {
      left: -12px;
    }
    50% {
      left: 100%;
    }
    100% {
      left: 100%;
    }
  }
`

const PanelBody: React.FC<Props> = ({ isPushed, pushNav, isMobile, links, togglePush, isDark }) => {
  const location = useLocation()
  const t = useTranslation()

  // Close the menu when a user clicks a link on mobile
  const handleClick = isMobile ? () => pushNav(false) : undefined
  const homeLink = links?.find((link) => link.label === 'Home')

  const fillStokeTranslations = [t('mainMenu.home'), t('mainMenu.bridge')]

  return (
    <Container>
      <StyledLogoIcon>
        <Logo isDark={isDark} href={homeLink?.href ?? '/'} isPushed={isPushed} />
      </StyledLogoIcon>
      <MenuButton aria-label="Toggle menu" onClick={togglePush}>
        {isPushed ? (
          <StyledIcon>
            <HamburgerCloseIcon />
          </StyledIcon>
        ) : (
          <StyledIcon reverse>
            <HamburgerCloseIcon />
          </StyledIcon>
        )}
      </MenuButton>
      <StyledLinksPanel isPushed={isPushed}>
        {links ? (
          links
            .filter((entry) => entry.label !== 'Test')
            .map((entry) => {
              const Icon = Icons[entry.icon]
              const iconElement = <Icon width="24px" mr="10px" />
              const calloutClass = entry.calloutClass ? entry.calloutClass : undefined
              const title = !isPushed ? entry.label : ''

              if (entry.items) {
                const itemsMatchIndex = entry.items.findIndex((item) => item.href === location.pathname)
                const initialOpenState = entry.initialOpenState === true ? entry.initialOpenState : itemsMatchIndex >= 0

                return (
                  <Tooltip placement="left" title={title} key={entry.label}>
                    <Accordion
                      isPushed={isPushed}
                      pushNav={pushNav}
                      icon={iconElement}
                      label={entry.label}
                      initialOpenState={initialOpenState}
                      className={calloutClass}
                      blink={entry.blink}
                    >
                      {isPushed &&
                        entry.items.map((item) => (
                          <MenuEntry
                            key={item.href}
                            secondary
                            isactive={item.href === location.pathname}
                            onClick={handleClick}
                            hot={item.hot}
                          >
                            <MenuLink href={item.href} target={item.external ? '_blank' : ''}>
                              {item.label}
                            </MenuLink>
                            {item.hot && <HotContainer>HOT</HotContainer>}
                          </MenuEntry>
                        ))}
                    </Accordion>
                  </Tooltip>
                )
              }
              return (
                <Tooltip placement="left" title={title} key={entry.label}>
                  <MenuEntry
                    isactive={entry.href === location.pathname}
                    className={calloutClass}
                    fillStroke={fillStokeTranslations.includes(entry.label)}
                    isPushed={isPushed}
                    single
                  >
                    <MenuLink href={entry.href} onClick={handleClick}>
                      {iconElement}
                      <LinkLabel isPushed={isPushed}>{entry.label}</LinkLabel>
                    </MenuLink>
                  </MenuEntry>
                </Tooltip>
              )
            })
        ) : (
          <SpinnerContainer>
            <Spinner size={100} />
          </SpinnerContainer>
        )}
      </StyledLinksPanel>
    </Container>
  )
}

export default PanelBody
