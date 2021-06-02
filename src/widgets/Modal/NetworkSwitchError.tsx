import React from 'react'
import styled from 'styled-components'
import { Button } from '../../components/Button'
import Modal from './Modal'
import { Text } from '../../components/Text'
import NetworkSwitch from '../Menu/NetworkSwitch'

interface Props {
  onDismiss?: () => void
  isProduction?: boolean
  isSupportedChain?: boolean
  changeNetwork?: () => void
}

const StyledNetworkSwitch = styled.div`
  > * {
    width: 100%;
  }

  > * > div:last-child {
    position: fixed;
    width: 429px;
    @media screen and (max-width: 380px) {
      width: calc(100% - 49px);
    }
  }
`

const StyledText = styled(Text)`
  padding-right: 96px;
  @media screen and (max-width: 480px) {
    padding-right: 0px;
  }
`

const NetworkSwitchError: React.FC<Props> = ({
  onDismiss,
  isProduction = false,
  isSupportedChain = true,
  changeNetwork,
}) => {
  const handleClick = () => {
    if (changeNetwork) changeNetwork()
  }

  return (
    <Modal title="Network switching error" onDismiss={onDismiss} hideCloseButton>
      <StyledText style={{ marginTop: '-6px', marginBottom: '24px' }}>
        We found that you have different networks <br />
        selected in your wallet and on our site.
        {isSupportedChain ? (
          <>
            <br /> Please choose what to do.
          </>
        ) : (
          <>
            <br /> Change network in your wallet manually or use the button below
          </>
        )}
      </StyledText>
      <Button onClick={handleClick} fullwidth data-id="change-network-button">
        Change network in the wallet
      </Button>
      {isSupportedChain && (
        <>
          <Text style={{ marginTop: '36px', marginBottom: '24px' }}>Or change network on our site</Text>
          <StyledNetworkSwitch>
            <NetworkSwitch isProduction={isProduction} toggleMobile={false} />
          </StyledNetworkSwitch>
        </>
      )}
    </Modal>
  )
}

export default NetworkSwitchError
