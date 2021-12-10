import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Button } from '../Button'
import { cookiesAcceptedParam } from '../../constants'

const Wrapper = styled.div<{ isPushed: boolean, isHidden: boolean }>`
  position: fixed;
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
  padding: 24px;
  align-items: center;
  transition: visibility 300ms ease-in-out, opacity 300ms ease-in-out;
  
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

  return (
    <Wrapper isPushed={isPushed} isHidden={isHidden}>
      <Info>
        <Title>This website uses cookies</Title>
        <Description>We use cookies and similar technologies on our website and process personal data about you, such as your IP address.
          We also share this data with third parties. <Link href="https://en.wikipedia.org/wiki/HTTP_cookie" target="_blank">Learn more</Link></Description>
      </Info>
      <Button variant="primary" style={{ whiteSpace: 'pre', marginLeft: 16 }} onClick={acceptCookies}>
        Accept all and close
      </Button>
    </Wrapper>
  )
}

export default CookiePlaceholder
