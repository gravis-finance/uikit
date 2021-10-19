import React from 'react'
import styled from 'styled-components'
import { Flex } from '../../components/Flex'
import { GRVXIcon, TokenConfig } from '../..'

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

const Price = styled.p`
  margin-left: 8px;
  color: white;
  max-width: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
`

interface Props {
  mobile?: boolean;
}

const GravisTokenPrice: React.FC<Props> = ({ mobile }) => {

  return (
    <StyledFlex alignItems="center" title={TokenConfig.tokenPrice ? TokenConfig.tokenPrice : ''} mobile={mobile}>
       <GRVXIcon width="28px" height="28px"/>
      <Price>{TokenConfig.tokenPrice ? `${TokenConfig.tokenPrice}` : 'Loading...'}</Price>
    </StyledFlex>
  )
}

export default GravisTokenPrice
