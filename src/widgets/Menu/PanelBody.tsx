import React, { ReactNode } from 'react'
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
import { ChipContainer, SubitemsChipContainer } from './Chip'

interface Props extends PanelProps, PushedProps {
  isMobile?: boolean
  togglePush?: () => void
  gravisLogo?: ReactNode
  gravisLogoText?: string
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

const PanelBody: React.FC<Props> = ({ isPushed, pushNav, isMobile, links, togglePush, isDark, gravisLogo, gravisLogoText}) => {
  const location = useLocation()
  const t = useTranslation()

  // Close the menu when a user clicks a link on mobile
  const handleClick = isMobile ? () => pushNav(false) : undefined
  const homeLink = links?.find((link) => link.label === 'Home')

  const fillStokeIcons = [
    'HomeIcon',
    'BridgeIcon',
    'TeamsIcon',
    'InfoIcon',
    'BigBangIcon',
    'AsteroidMiningIcon',
    'NFTFarmingIcon'
  ]

  return (
    <Container>
      <StyledLogoIcon>
        <Logo isDark={isDark} href={homeLink?.href ?? '/'} isPushed={isPushed} gravisLogo={gravisLogo} gravisLogoText={gravisLogoText}/>
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
                      fillStroke={fillStokeIcons.includes(entry.icon)}
                      isPushed={isPushed}
                      pushNav={pushNav}
                      icon={iconElement}
                      label={entry.label}
                      initialOpenState={initialOpenState}
                      className={calloutClass}
                      blink={entry.blink}
                      chip={entry.chip}
                    >
                      {isPushed &&
                        entry.items.map((item) => (
                          <MenuEntry
                            key={item.href}
                            secondary
                            isactive={item.href === location.pathname}
                            onClick={handleClick}
                          >
                            <MenuLink href={item.href} target={item.external ? '_blank' : ''}>
                              {item.label}
                            </MenuLink>
                            {item.chip && (
                              <SubitemsChipContainer animation={item.chip.animation} color={item.chip.color}>
                                {t(item.chip.title)}
                              </SubitemsChipContainer>
                            )}
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
                    fillStroke={fillStokeIcons.includes(entry.icon)}
                    isPushed={isPushed}
                    single
                  >
                    <MenuLink href={entry.href} onClick={handleClick} target={entry.external ? '_blank' : ''}>
                      {iconElement}
                      <LinkLabel isPushed={isPushed}>{entry.label}</LinkLabel>
                      {entry.chip && <ChipContainer color={entry.chip.color}>{t(entry.chip.title)}</ChipContainer>}
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
