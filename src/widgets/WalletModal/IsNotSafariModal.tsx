import copy from 'copy-to-clipboard'
import React, { useState } from 'react'
import { useTranslation } from 'react-multi-lang'
import styled from 'styled-components'

import { Button } from '../..'
import { alertVariants } from '../../components/Alert'
import { ErrorIcon, InputCopyIcon } from '../../components/Svg'
import { Text } from '../../components/Text'
import { Modal } from '../Modal'
import { ToastContainer } from '../Toast'

const CopyContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 10px;
`

const Container = styled.div`
  max-width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const IsNotSafariModal: React.FC<{ onDismiss?: any }> = ({
  onDismiss = () => null,
}) => {
  const t = useTranslation()
  const [toasts, setToasts] = useState<any>([])

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
    <Modal title={t('Incorrect browser')} onDismiss={onDismiss}>
      <Container>
        <ErrorIcon width={150} height={150} />
        <Text mt="20px">
          {t(`Sorry, due to Apple restrictions you can't open other apps from a browser other than Safari`)}.{' '}
          {t(`Please open this page in Safari or in your wallet's built-in browser`)}.
        </Text>
        <CopyContainer>
          <Button
            data-id="copy-button"
            onClick={copyToClipboard}
          >
            {t('Copy page address')}
            <InputCopyIcon width="20px" color="primary" ml="10px" />
          </Button>
        </CopyContainer>
      </Container>
      <ToastContainer toasts={toasts} onRemove={handleRemove} />
    </Modal>
  )
}

export default IsNotSafariModal
