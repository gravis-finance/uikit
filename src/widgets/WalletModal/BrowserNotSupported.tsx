import copy from 'copy-to-clipboard'
import React, { useState } from 'react'
import { useTranslation } from 'react-multi-lang'
import styled from 'styled-components'

import { Button } from '../..'
import { alertVariants } from '../../components/Alert'
import { ErrorIcon, InputCopyIcon } from '../../components/Svg'
import { Text } from '../../components/Text'
import { Modal, useModal } from '../Modal'
import { ToastContainer } from '../Toast'
import { useWalletsConfig } from '.'
import WalletConnectIcon from './icons/WalletConnect'

const CopyContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 10px;

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

const BrowserNotSupported: React.FC<{ supportedBrowsers: string[]; onDismiss?: any; connect: any }> = ({
  supportedBrowsers,
  connect,
  onDismiss = () => null,
}) => {
  const t = useTranslation()
  const [toasts, setToasts] = useState<any>([])
  const walletsConfig = useWalletsConfig()
  const ErrorModal = walletsConfig.walletConnect.connection.errorModal
  const [openModal] = useModal(<ErrorModal />)

  const onConnect = () => {
    if (walletsConfig.walletConnect.connection.disabled) {
      openModal()

      return
    }
    connect(walletsConfig.walletConnect.connectorId)
  }

  const copyToClipboard = () => {
    const now = Date.now()
    const toast = {
      id: `id-${now}`,
      title: `Copied`,
      description: 'Page address copied to clipboard.',
      type: alertVariants.SUCCESS,
    }
    setToasts([toast])
    copy(window.location.href)
  }

  const handleRemove = (id: string) => {
    setToasts((prevToasts: any) => prevToasts.filter((prevToast: any) => prevToast.id !== id))
  }

  return (
    <Modal title={t('Your browser does not support the wallet extension')} onDismiss={onDismiss}>
      <Container>
        <ErrorIcon width={150} height={150} />
        <Text mt="20px">
          {t('If you want to connect with this wallet you should use one of this browsers: ')}
          {supportedBrowsers.join(', ')}. {t('Also you can use Wallet Connect')}.
        </Text>
        <CopyContainer>
          <Button mr="20px" data-id="copy-button" onClick={onConnect}>
            {t('Connect with Wallet Connect')}
            <WalletConnectIcon width="20px" color="primary" ml="10px" />
          </Button>
          <Button data-id="copy-button" onClick={copyToClipboard}>
            {t('Copy page address')}
            <InputCopyIcon width="20px" color="primary" ml="10px" />
          </Button>
        </CopyContainer>
      </Container>
      <ToastContainer toasts={toasts} onRemove={handleRemove} />
    </Modal>
  )
}

export default BrowserNotSupported
