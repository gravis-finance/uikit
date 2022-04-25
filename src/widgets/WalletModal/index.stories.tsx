import React from 'react'

import { NetworksConfigObject, networksName } from '../../config/networks'
import Button from '../../components/Button/Button'
import Flex from '../../components/Flex/Flex'
import useWalletModal from './useWalletModal'

export default {
  title: 'Widgets/WalletModal',
  argTypes: {},
}

NetworksConfigObject.networks = [networksName.BINANCE, networksName.POLYGON, networksName.HUOBI, networksName.AURORA]

export const Wallet: React.FC = () => {
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
