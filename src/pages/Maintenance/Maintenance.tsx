import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-multi-lang'
import { Text } from '../../components/Text'
import { Heading } from '../../components/Heading'
import { SocialNetworks } from '../../components/SocialNetworks'

const StyledWrapper = styled.div`
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 32px;
  box-sizing: border-box;
  overflow: auto;
  overflow-x: hidden;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column-reverse;
  }
  @media screen and (max-width: 768px) {
    padding: 8px;
  }
`

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 2;
  width: 40%;
  margin: auto 0;

  @media screen and (max-width: 1024px) {
    width: 80%;
    margin: auto 0;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`

const ImageWrapper = styled.div`
  & > svg {
    width: 100%;
    height: auto;
  }
`

const StyledHeading = styled(Heading)`
  font-weight: bold;
  font-size: 64px;
  line-height: 72px;

  @media screen and (max-width: 1024px) {
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    font-size: 56px;
    line-height: 64px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
    line-height: 40px;
  }
`

const StyledText = styled(Text)`
  width: 70%;
  font-size: 24px;
  line-height: 30px;
  margin: 24px 0 30px 0;
  letter-spacing: 0.3px;
  color: rgba(255, 255, 255, 0.5);
  @media screen and (max-width: 1024px) {
    text-align: center;
    margin: 24px auto 32px auto;
    width: 90%;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
    line-height: 20px;
    width: 100%;
  }
`

const Maintenance: React.FC = () => {
  const t = useTranslation()

  return (
    <StyledWrapper>
      <InfoWrapper>
        <StyledHeading>{t('maintenance.title')}</StyledHeading>
        <StyledText>{t('maintenance.text')}</StyledText>
        <SocialNetworks />
      </InfoWrapper>
    </StyledWrapper>
  )
}

export default Maintenance
