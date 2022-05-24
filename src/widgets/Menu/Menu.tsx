import React, { useEffect, useState } from 'react'
import { setLanguage } from 'react-multi-lang'
import styled from 'styled-components'

import { getDefaultLanguage } from '../..'
import CookiePlaceholder from '../../components/CookiePlaceholder'
import { Flex } from '../../components/Flex'
import Overlay from '../../components/Overlay/Overlay'
import { BurgerIcon, CloseIcon } from '../../components/Svg'
import Logo from '../../components/Svg/Icons/Logo'
import { TokenConfig } from '../../config/tokenPrice'
import { localStorageLanguageItem } from '../../constants'
import { useMatchBreakpoints } from '../../hooks'
import useGetMenuLinks from '../../util/useGetMenuLinks'
import {
  MENU_HEIGHT,
  SIDEBAR_WIDTH_FULL,
  SIDEBAR_WIDTH_REDUCED
} from './config'
import GravisTokenPrice from './GravisTokenPrice'
import LanguageSwitch from './LanguageSwitch'
import MenuButton from './MenuButton'
import Panel from './Panel'
import { NavProps } from './types'
import UserBlock from './UserBlock'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`

const StyledNav = styled.nav<{ showMenu: boolean }>`
  position: fixed;
  top: ${({ showMenu }) => (showMenu ? 0 : `-${MENU_HEIGHT}px`)};
  pointer-events: none;
  left: 0;
  transition: top 0.2s;
  width: 240px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 8px;
  padding-right: 16px;
  width: 100%;
  height: ${MENU_HEIGHT}px;
  z-index: 20;
  transform: translate3d(0, 0, 0);
  background-color: transparent;

  @media screen and (max-width: 968px) {
    position: absolute;
    margin-top: -3px;
  }
`

const BodyWrapper = styled.div`
  position: relative;
  display: flex;
  background: #1c1c1c;
  overflow: auto;
`

const Inner = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  flex-grow: 1;
  margin-top: ${MENU_HEIGHT}px;
  transition: margin-top 0.2s;
  transform: translate3d(0, 0, 0);
  max-width: 100%;

  ${({ theme }) => theme.mediaQueries.nav} {
    margin-left: ${({ isPushed }) =>
      `${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px`};
    max-width: ${({ isPushed }) =>
      `calc(100% - ${
        isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED
      }px)`};
  }
`

const MobileOnlyOverlay = styled(Overlay)`
  position: fixed;
  height: 100%;
  display: none;

  ${({ theme }) => theme.mediaQueries.nav} {
    display: none;
  }
`

const StyledIcon = styled.div<{ reverse?: boolean }>`
  margin-left: 20px;
  cursor: pointer;
  outline: none;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90.28deg, #292929 0%, #242424 100%);
  border: 1px solid #2e2e2e;
  box-sizing: border-box;
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.4),
    -4px -4px 12px rgba(255, 255, 255, 0.05);
  border-radius: 34px;

  :hover {
    background: linear-gradient(90.28deg, #242424 0%, #202020 100%),
      linear-gradient(90.28deg, #292929 0%, #242424 100%), #303030;
  }

  @media screen and (max-width: 968px) {
    margin-left: 0px;
    width: 40px;
    height: 40px;
    padding: 0;
  }

  > * {
    margin: auto;
    transition: transform 200ms ease-in-out;
    transform: ${({ reverse }) => (reverse ? 'rotate(180deg)' : '')};
  }
`

const StyledLogoWithText = styled.div`
  opacity: 1;
  margin-left: 8px;
  margin-right: 72px;
  ${({ theme }) => theme.mediaQueries.nav} {
    opacity: 0;
  }

  @media screen and (max-width: 968px) {
    margin-right: 0;
  }

  @media screen and (max-width: 575px) {
    display: none;
  }
`

const StyledLogoWithoutText = styled.div`
  opacity: 1;
  ${({ theme }) => theme.mediaQueries.nav} {
    opacity: 0;
  }
  display: none;
  @media screen and (max-width: 575px) {
    display: block;
  }
`

const LanguageContainer = styled.div<{ isPushed?: boolean }>`
  display: flex;
  align-items: center;
  margin-left: -20px;
  pointer-events: all;
  ${({ isPushed }) => isPushed && 'margin-left: 152px;'}

  @media screen and (max-width: 968px) {
    position: relative;
    margin-left: 16px;
  }
  @media screen and (max-width: 575px) {
    margin-left: 20px;
  }
`

function defaultBalanceHook() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(100)
    }, 3000)
  })
}

const defaultSetSelectedLanguage = (name: string) => {
  setLanguage(name.toLowerCase())
}

const Menu: React.FC<NavProps> = ({
  account,
  login,
  logout,
  isDark,
  toggleTheme,
  links,
  loginBlockVisible = true,
  buttonTitle = 'Connect',
  options,
  children,
  balance,
  explorerName,
  explorerLink,
  onTransactionHistoryHandler,
  balanceHook = defaultBalanceHook,
  setSelectedLanguage = defaultSetSelectedLanguage,
  customLanguage,
  networkSwitchVisible = true,
  subscribePushEvent,
  networkSwitchItemCallback,
  gravisLogo = <Logo />,
  gravisLogoText,
  providedLogoLink,
  isShowMenuPanel = true
}) => {
  const { isXl } = useMatchBreakpoints()
  const isMobile = isXl === false
  const [isPushed, setIsPushed] = useState(!isMobile)
  const showMenu = true

  useEffect(() => {
    if (subscribePushEvent) subscribePushEvent(isPushed)
  }, [isPushed, subscribePushEvent])

  useEffect(() => {
    localStorage.setItem(
      localStorageLanguageItem,
      getDefaultLanguage() ? getDefaultLanguage().toUpperCase() : 'EN'
    )
    setSelectedLanguage(getDefaultLanguage())
    setLanguage(getDefaultLanguage() as string)
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (customLanguage) setLanguage(customLanguage.toLowerCase())
  }, [customLanguage])

  const parsedLinks = useGetMenuLinks(links)

  return (
    <Wrapper>
      <StyledNav showMenu={showMenu}>
        <Flex>
          <StyledLogoWithText>{gravisLogo}</StyledLogoWithText>
          <StyledLogoWithoutText>{gravisLogo}</StyledLogoWithoutText>
          <LanguageContainer isPushed={isPushed}>
            <LanguageSwitch setSelectedLanguage={setSelectedLanguage} />
          </LanguageContainer>
        </Flex>
        <Flex alignItems="center">
          {TokenConfig.showToken && <GravisTokenPrice mobile />}
          {loginBlockVisible && (
            <UserBlock
              account={account}
              login={login}
              logout={logout}
              buttonTitle={buttonTitle}
              balance={balance}
              explorerName={explorerName}
              explorerLink={explorerLink}
              onTransactionHistoryHandler={onTransactionHistoryHandler}
              balanceHook={balanceHook}
              networkSwitchVisible={networkSwitchVisible}
              networkSwitchItemCallback={networkSwitchItemCallback}
              isShowMenuPanel={isShowMenuPanel}
              {...options}
            />
          )}
        </Flex>
      </StyledNav>
      <BodyWrapper>
        {isShowMenuPanel ? (
          <>
            <Panel
              isPushed={isPushed}
              isMobile={isMobile}
              showMenu={showMenu}
              isDark={isDark}
              toggleTheme={toggleTheme}
              pushNav={setIsPushed}
              links={parsedLinks}
              gravisLogo={gravisLogo}
              gravisLogoText={gravisLogoText}
              providedLogoLink={providedLogoLink}
              togglePush={() => setIsPushed((prevState: boolean) => !prevState)}
            />
            <Inner isPushed={isPushed} showMenu={showMenu}>
              {children}
            </Inner>
          </>
        ) : (
          children
        )}

        <CookiePlaceholder isPushed={isPushed} />
        {isShowMenuPanel ? (
          <MobileOnlyOverlay
            show={isPushed}
            onClick={() => setIsPushed(false)}
            role="presentation"
          />
        ) : null}
      </BodyWrapper>
      {isShowMenuPanel ? (
        <MenuButton
          aria-label="Toggle menu"
          onClick={() => setIsPushed((prevState: boolean) => !prevState)}
          mobile
        >
          {isPushed ? (
            <StyledIcon>
              <CloseIcon color="primary" width="24" height="24" />
            </StyledIcon>
          ) : (
            <StyledIcon>
              <BurgerIcon width="24" height="24" />
            </StyledIcon>
          )}
        </MenuButton>
      ) : null}
    </Wrapper>
  )
}

export default Menu
