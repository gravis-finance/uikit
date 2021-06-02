import React from 'react'
import styled from 'styled-components'
import { CheckmarkCircleIcon } from '../../components/Svg'
import Flex from '../../components/Flex/Flex'
import Text from '../../components/Text/Text'
import Button from '../../components/Button/Button'
import { NetworksConfig } from './types'
import switchNetwork from '../../util/switchNetwork'
import { getNetworkId } from '../../util/getNetworkId'

const StyledNetworkSelector = styled(Button)`
  position: relative;
  width: 48px;
  height: 48px;
  background: #353535;
  border-radius: 43px;
  display: flex;
  padding: 0;

  > * {
    margin: auto;
  }
`

const StyledCheckMarkInCircle = styled(CheckmarkCircleIcon)`
  position: absolute;
  right: -5px;
  top: -5px;
  width: 16px;
  height: 16px;
`

const StyledFlex = styled(Flex)`
  > div {
    transition: color 200ms ease-in-out;
  }

  > button {
    border: 1px solid transparent !important;
    transition: border 200ms ease-in-out;
    background: #353535 !important;
  }

  > button:active,
  button:hover {
    border: none !important;
    box-shadow: none !important;
    background: #353535 !important;
  }
  :hover {
    > button {
      background: #353535 !important;
      border: 1px solid #009ce1 !important;
    }

    > div {
      color: #009ce1;
    }
  }
`

interface Props {
  selected?: boolean
  title?: string
  setSelectedNetwork: (arg0: string) => void
  networkConfig: NetworksConfig
  chainId: string
}

const NetworkSelector: React.FC<Props> = ({ chainId, selected, networkConfig, setSelectedNetwork }) => {
  const { title, icon: Icon } = networkConfig
  const id: string = getNetworkId()
  if (selected && id !== chainId) switchNetwork(chainId, false)

  const handleClick = () => {
    setSelectedNetwork(title)
    switchNetwork(chainId, false)
  }

  return (
    <StyledFlex flexDirection="column" alignItems="center" onClick={handleClick}>
      <StyledNetworkSelector>
        {selected && <StyledCheckMarkInCircle />}
        <Icon />
      </StyledNetworkSelector>
      <Text color="rgba(255, 255, 255, 0.5)" fontSize="11px" mt="8px" style={{ userSelect: 'none' }}>
        {title}
      </Text>
    </StyledFlex>
  )
}

export default NetworkSelector
