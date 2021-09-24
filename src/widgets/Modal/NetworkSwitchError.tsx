import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-multi-lang'
import { Button } from '../../components/Button'
import Modal from './Modal'
import { Text } from '../../components/Text'
import NetworkSwitch from '../Menu/NetworkSwitch'

interface Props {
  onDismiss?: () => void
  isProduction?: boolean
  isSupportedChain?: boolean
  changeNetwork?: () => void
  ethereum?: boolean
  disableEthereum?: boolean
  networkSwitchItemCallback?: (chainId: string) => void
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
  ethereum = false,
  disableEthereum,
  networkSwitchItemCallback
}) => {
  const handleClick = () => {
    if (changeNetwork) changeNetwork()
  }

  const t = useTranslation()

  // const networkSwitchItemCallback = (item: string): void => {
  //   console.log('item', item)
  // }

  return (
    <Modal title={t('networkSwitchingError')} onDismiss={onDismiss} hideCloseButton>
      <StyledText style={{ marginTop: '-6px', marginBottom: '24px', maxWidth: '430px' }}>
        {t('differentNetworks')}
        {isSupportedChain ? (
          <>
            <br /> {t('pleaseChoose')}
          </>
        ) : (
          <>
            <br /> {t('changeNetworkInTheWallet')}
          </>
        )}
      </StyledText>
      <Button onClick={handleClick} fullwidth data-id="change-network-button">
        {t('changeNetworkInTheWallet')}
      </Button>
      {isSupportedChain && (
        <>
          <Text style={{ marginTop: '36px', marginBottom: '24px' }}>{t('orChangeNetwork')}</Text>
          <StyledNetworkSwitch>
            <NetworkSwitch
              isProduction={isProduction}
              toggleMobile={false}
              ethereum={ethereum}
              disableEthereum={disableEthereum}
              networkSwitchItemCallback={networkSwitchItemCallback}
            />
          </StyledNetworkSwitch>
        </>
      )}
    </Modal>
  )
}

export default NetworkSwitchError
