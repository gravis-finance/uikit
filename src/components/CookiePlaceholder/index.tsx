import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Button } from '../Button'
import { cookiesAcceptedParam } from '../../constants'
import { useTranslation } from 'react-multi-lang'

const Wrapper = styled.div<{ isPushed: boolean, isHidden: boolean }>`
  position: fixed;
  z-index: 123;
  bottom: 20px;
  left: 0;
  width: 100%;
  background: linear-gradient(90.28deg, #292929 0%, #242424 100%);
  border-radius: 12px;
  ${({ isPushed }) => isPushed ? `
    margin-left: 278px;
    width: calc(100% - 298px);
  ` : `
    margin-left: 108px;
    width: calc(100% - 128px);
  `}
  display: flex;
  justify-content: space-between;
  padding: 24px;
  align-items: center;
  transition: visibility 300ms ease-in-out, opacity 300ms ease-in-out;
  
  @media screen and (max-width: 968px) {
    margin-left: 20px;
    ${({ isPushed }) => isPushed ? `
    width: calc(100% - 348px);
  ` : `
    width: calc(100% - 40px);
  `}
  }
  
  @media screen and (max-width: 890px) {
    flex-direction: column;
    > div {
      margin-bottom: 12px;
    }
  }
  
  ${({ isHidden }) => isHidden ? `
    visibility: hidden;
    opacity: 0;
  ` : ''}
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.div`
  color: white;
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 8px;
`

const Description = styled.div`
  font-size: 13px;
  line-height: 19px;
  color: rgba(255, 255, 255, 0.5);
`

const Link = styled.a`
  color: #009CE1;
  transition: color 200ms ease-in-out;
  display: inline-block;
  cursor: pointer;
  
  :hover {
    color: white;
  }
`

interface Props {
  isPushed: boolean
}

const CookiePlaceholder: React.FC<Props> = ({ isPushed }) => {

  const [isHidden, setIsHidden] = useState(true)

  const getLocalStorageCookiesAccepted = () => {
    return localStorage.getItem(cookiesAcceptedParam)
  }

  const acceptCookies = () => {
    localStorage.setItem(cookiesAcceptedParam, 'true')
    setIsHidden(true)
  }

  useEffect(() => {
    if(getLocalStorageCookiesAccepted()) {
      setIsHidden(true)
    }
    else setIsHidden(false)
  }, [])

  const t = useTranslation()

  return (
    <Wrapper isPushed={isPushed} isHidden={isHidden}>
      <Info>
        <Title>{t('This website uses cookies')}</Title>
        <Description>{t('cookiesDescription')} <Link href="https://en.wikipedia.org/wiki/HTTP_cookie" target="_blank">{t('Learn more')}</Link></Description>
      </Info>
      <Button variant="primary" style={{ whiteSpace: 'pre', marginLeft: 16 }} onClick={acceptCookies}>
        {t('Accept all and close')}
      </Button>
    </Wrapper>
  )
}

export default CookiePlaceholder
