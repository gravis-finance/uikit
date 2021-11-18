import React from 'react'
import { useTranslation } from 'react-multi-lang'
import styled from 'styled-components'

import { Button } from '../..'
import { Modal, useModal } from '../Modal'
import { Text } from '../../components/Text'
import { ErrorIcon, AscendingIcon } from '../../components/Svg'
import WalletConnectIcon from './icons/WalletConnect'
import { walletsConfig } from '.'

const CopyContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 20px;

  button {
    width: 50%;
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;

    button {
      width: 100%;

      :not(:first-child) {
        margin-top: 10px;
      }
    }
  }
`

const Container = styled.div`
  max-width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const WalletExtensionInstallModal: React.FC<{ onDismiss?: any, installLink: string, connect: any }> = ({
  installLink,
  connect,
  onDismiss = () => null,
}) => {
  const t = useTranslation()
  const ErrorModal = walletsConfig.walletConnect.connection.errorModal
  const [openModal] = useModal(<ErrorModal />)

  const onConnect = () => {
    if (walletsConfig.walletConnect.connection.disabled) {
      openModal()

      return
    }
    connect(walletsConfig.walletConnect.connectorId)
  }

  const onInstall = () => {
    window.open(installLink, '_blank')
  }

  return (
    <Modal title={t('You do not have extension for your wallet')} onDismiss={onDismiss}>
      <Container>
        <ErrorIcon width={150} height={150} />
        <Text mt="20px">
          {t('If you want to connect with this wallet you should install extension for your browser or use Wallet Connect')}.
        </Text>
        <CopyContainer>
          <Button
            mr="20px"
            data-id="connect-button"
            onClick={onConnect}
          >
            {t('Connect with Wallet Connect')}
            <WalletConnectIcon width="20px" color="primary" ml="10px" />
          </Button>
          <Button
            data-id="install-button"
            onClick={onInstall}
          >
            {t('Install')}
            <AscendingIcon width="20px" color="primary" ml="10px" />
          </Button>
        </CopyContainer>
      </Container>
    </Modal>
  )
}

export default WalletExtensionInstallModal
