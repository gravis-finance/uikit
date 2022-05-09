import { ChainId } from '@gravis.finance/sdk'
import React from 'react'

import Button from '../../components/Button/Button'
import Flex from '../../components/Flex/Flex'
import { NETWORK_NAMES } from '../../config/networks'
import { WidgetsProvider } from '../../WidgetsContext'
import useWalletModal from './useWalletModal'

export default {
  title: 'Widgets/WalletModal',
  argTypes: {}
}

const WalletInstance: React.FC = () => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(
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

const contextValue = {
  networks: [
    NETWORK_NAMES.BINANCE,
    NETWORK_NAMES.POLYGON,
    NETWORK_NAMES.HUOBI,
    NETWORK_NAMES.AURORA,
    NETWORK_NAMES.NEAR
  ],
  chainId: ChainId.MAINNET
}

export const Wallet = () => {
  return (
    <WidgetsProvider {...contextValue}>
      <WalletInstance />
    </WidgetsProvider>
  )
}
