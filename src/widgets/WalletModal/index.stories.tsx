import React from 'react'

import Button from '../../components/Button/Button'
import Flex from '../../components/Flex/Flex'
import useWalletModal from './useWalletModal'

export default {
  title: 'Widgets/WalletModal',
  argTypes: {},
}

export const Wallet: React.FC = () => {
  function later() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(100)
      }, 3000)
    })
  }
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(
    false,
    () => null,
    () => null,
    '0xBbA33901Db9Ce3B18578799bde301Ef02CF5D263',
    '',
    '',
    '',
    null,
    null,
    async () => null
  )
  return (
    <Flex>
      <Button onClick={onPresentConnectModal}>Open connect modal</Button>
      <Button onClick={onPresentAccountModal}>Open account modal</Button>
    </Flex>
  )
}
