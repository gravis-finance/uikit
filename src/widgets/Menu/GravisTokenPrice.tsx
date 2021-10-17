import React from 'react'
import styled from 'styled-components'
import { Flex } from '../../components/Flex'
import grvxImage from '../../assets/images/GRVX.png'
import { TokenConfig } from '../../config/tokenPrice'

const StyledFlex = styled(Flex)<{ mobile?: boolean }>`
  margin-right: 16px;
  background: #1c1c1c;
  padding: 10px;
  border-radius: 20px;
  position: relative;
  @media screen and (max-width: 700px) {
    ${({ mobile }) => mobile ? 'display: none;' : ''}
  }
`

const GravisLogo = styled.img`
  width: 28px;
`

const Price = styled.p`
  margin-left: 8px;
  color: white;
  max-width: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
`

const GravisTokenPrice: React.FC = ({ mobile }) => {

  return (
    <StyledFlex alignItems="center" title={TokenConfig.tokenPrice} mobile={mobile}>
      <GravisLogo src={grvxImage} />
      <Price>{TokenConfig.tokenPrice ? `${TokenConfig.tokenPrice}` : 'Loading...'}</Price>
    </StyledFlex>
  )
}

export default GravisTokenPrice
