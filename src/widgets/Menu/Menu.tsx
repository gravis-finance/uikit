import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { setDefaultLanguage, setLanguage, setTranslations } from 'react-multi-lang'
import Overlay from '../../components/Overlay/Overlay'
import { Flex } from '../../components/Flex'
import { Text } from '../../components/Text'
import { useMatchBreakpoints } from '../../hooks'
import Panel from './Panel'
import UserBlock from './UserBlock'
import { NavProps } from './types'
import { MENU_HEIGHT, SIDEBAR_WIDTH_FULL, SIDEBAR_WIDTH_REDUCED } from './config'
import { LogoIcon as LogoWithText } from './icons'
import MenuButton from './MenuButton'
import { BurgerIcon, CloseIcon } from '../../components/Svg'
// import BetaIcon from '../../components/Svg/Icons/Beta'
import Logo from '../../components/Svg/Icons/Logo'
import en from '../../locales/en.json'
import jp from '../../locales/jp.json'
import cn from '../../locales/cn.json'
import ru from '../../locales/ru.json'
import { localStorageLanguageItem } from '../../constants'
import LanguageSwitch from './LanguageSwitch'
import { getDefaultLanguage, getLanguageSearchParam } from '../..'

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
    margin-left: ${({ isPushed }) => `${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px`};
    max-width: ${({ isPushed }) => `calc(100% - ${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px)`};
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
   {
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
    box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.4), -4px -4px 12px rgba(255, 255, 255, 0.05);
    border-radius: 34px;
  }

  :hover {
    background: linear-gradient(90.28deg, #242424 0%, #202020 100%), linear-gradient(90.28deg, #292929 0%, #242424 100%),
      #303030;
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
  ${({ theme }) => theme.mediaQueries.nav} {
    opacity: 0;
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

const StyledBetaIcon = styled.div<{ isPushed?: boolean }>`
  display: flex;
  align-items: center;
  margin-left: -20px;
  ${({ isPushed }) => isPushed && 'margin-left: 152px;'}

  @media screen and (max-width: 968px) {
    position: relative;
    margin-left: 8px;
    > div {
      display: none;
    }
    :hover {
      > div {
        display: block;
      }
    }
  }
  @media screen and (max-width: 575px) {
    margin-left: 20px;
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

const StyledText = styled(Text)`
  font-size: 14px;
  font-weight: 500;
  @media screen and (max-width: 968px) {
    position: absolute;
    width: 142px;
    background: #ffffff;
    box-shadow: 0px 2px 16px rgba(185, 189, 208, 0.48);
    border-radius: 6px;
    font-size: 11px;
    text-align: center;
    top: 40px;
    left: -50px;
    padding: 14px;
    :before {
      content: '\\A';
      border-style: solid;
      border-width: 15px 15px 15px 0;
      border-color: transparent white transparent transparent;
      position: absolute;
      top: -15px;
      left: 65px;
      transform: rotate(90deg);
    }
  }
`

const StyledClickableLink = styled.a`
  color: #6c5dd3;
  cursor: pointer;

  :hover {
    color: #8677f0;
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

setTranslations({ en, jp, cn, ru })
setDefaultLanguage('en')

const Menu: React.FC<NavProps> = ({
                                    networks,
                                    isProduction,
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
                                    betaText = 'This is the Beta version. You can\'t add liquidity here anymore. Press here to switch to the main version.',
                                    betaLink,
                                    balanceHook = defaultBalanceHook,
                                    setSelectedLanguage = defaultSetSelectedLanguage, customLanguage, networkSwitchVisible = true, bscOnly, ethereum, subscribePushEvent
                                  }) => {
  const { isXl } = useMatchBreakpoints()
  const isMobile = isXl === false
  const [isPushed, setIsPushed] = useState(!isMobile)
  // const [showMenu, setShowMenu] = useState(true)
  const showMenu = true

  useEffect(()=>{
    if(subscribePushEvent)
      subscribePushEvent(isPushed)
  }, [isPushed, subscribePushEvent])

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    localStorage.setItem(localStorageLanguageItem, getDefaultLanguage() ? getDefaultLanguage().toUpperCase() : 'EN')
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setSelectedLanguage(getDefaultLanguage())
    setLanguage(getDefaultLanguage() as string)
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (customLanguage)
      setLanguage(customLanguage.toLowerCase())
  }, [customLanguage])

  return (
    <Wrapper>
      <StyledNav showMenu={showMenu}>
        <Flex>
          <StyledLogoWithText>
            <LogoWithText className="desktop-icon" isDark={isDark} withText />
          </StyledLogoWithText>
          <StyledLogoWithoutText>
            <Logo width="40px" height="40px" />
          </StyledLogoWithoutText>
          {betaText && (
            <StyledBetaIcon isPushed={isPushed}>
              {/* <BetaIcon height="28px" width="43px" /> */}
              <StyledText color="#8990A5">
                {betaText.slice(0, betaText?.lastIndexOf('here'))}
                <StyledClickableLink href={betaLink}>here</StyledClickableLink>
                {betaText.slice(betaText?.lastIndexOf('here') + 4)}
              </StyledText>
            </StyledBetaIcon>
          )}
          <LanguageContainer isPushed={isPushed}>
            <LanguageSwitch setSelectedLanguage={setSelectedLanguage} />
          </LanguageContainer>
        </Flex>
        <Flex alignItems="center">
          {loginBlockVisible && (
            <UserBlock
              networks={networks}
              isProduction={isProduction as boolean}
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
              bscOnly={bscOnly}
              ethereum={ethereum}
              {...options}
            />
          )}
        </Flex>
      </StyledNav>
      <BodyWrapper>
        <Panel
          isPushed={isPushed}
          isMobile={isMobile}
          showMenu={showMenu}
          isDark={isDark}
          toggleTheme={toggleTheme}
          pushNav={setIsPushed}
          links={links}
          togglePush={() => setIsPushed((prevState: boolean) => !prevState)}
        />
        <Inner isPushed={isPushed} showMenu={showMenu}>
          {children}
        </Inner>
        <MobileOnlyOverlay show={isPushed} onClick={() => setIsPushed(false)} role="presentation" />
      </BodyWrapper>
      {/* HERE */}
      <MenuButton aria-label="Toggle menu" onClick={() => setIsPushed((prevState: boolean) => !prevState)} mobile>
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
      {/* position: fixed; */}
    </Wrapper>
  )
}

export default Menu
