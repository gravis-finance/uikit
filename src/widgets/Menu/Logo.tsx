import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { LogoIcon } from '../../components/Svg'
import Flex from '../../components/Flex/Flex'
import { Text } from '../../components/Text'

interface Props {
  isDark: boolean
  href: string
  isPushed?: boolean
  gravisLogo?: ReactNode
}

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  .mobile-icon {
    width: 32px;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: none;
    }
  }
  .desktop-icon {
    width: 126px;
    height: auto;
    display: none;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: block;
    }
  }
`

const LogoText = styled(Text)`
  font-family: "Gotham Pro", sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 1px;
`

const StyledLogoIcon = styled(LogoIcon)`
  &.desktop-icon {
    width: 41px;
  }
`

const StyledFlex = styled(Flex)`
  @media screen and (max-width: 968px) {
    display: none;
  }
`

const Logo: React.FC<Props> = ({ isDark, href, isPushed, gravisLogo }) => {
  const isAbsoluteUrl = href.startsWith('http')
  const innerLogo = (
    <>
      {gravisLogo}
    </>
  )

  return (
    <Flex>
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label="gravis home page">
          <Flex>
            {innerLogo}
            {isPushed && <StyledFlex flexDirection="column" ml="10px">
              <LogoText>
                Gravis
              </LogoText>
              <LogoText>
                Finance
              </LogoText>
            </StyledFlex>}
          </Flex>
        </StyledLink>
      ) : (
        <StyledLink to={href} aria-label="gravis home page">
          <Flex>
            {innerLogo}
            {isPushed && <StyledFlex flexDirection="column" ml="10px">
              <LogoText>
                Gravis
              </LogoText>
              <LogoText>
                Finance
              </LogoText>
            </StyledFlex>}
          </Flex>
        </StyledLink>
      )}
    </Flex>
  )
}

export default Logo
