import React from 'react'

import { getNetworkLabel, getNetworkSymbol } from '../../util/getNetworkId'
import { useModal } from '../Modal'
import AccountModal from './AccountModal'
import ConnectModal from './ConnectModal'
import { Login } from './types'

interface ReturnType {
  onPresentConnectModal: () => void
  onPresentAccountModal: () => void
}

const useWalletModal = (
  login: Login,
  logout: () => void,
  account?: string,
  balance?: string,
  explorerName?: string,
  explorerLink?: string,
  onTransactionHistoryHandler?: void,
  balanceHook?: void,
  onSelectConnectModal?: () => void,
  gmartProfileLink?: string
): ReturnType => {
  const [onPresentConnectModal] = useModal(
    <ConnectModal onSelect={onSelectConnectModal} login={login} />
  )
  const [onPresentAccountModal] = useModal(
    <AccountModal
      account={account || ''}
      logout={logout}
      balance={balance}
      explorerName={explorerName}
      explorerLink={explorerLink}
      tokenSymbol={getNetworkSymbol()}
      networkName={getNetworkLabel()}
      onTransactionHistoryHandler={onTransactionHistoryHandler}
      balanceHook={balanceHook}
      gmartProfileLink={gmartProfileLink}
    />
  )

  return { onPresentConnectModal, onPresentAccountModal }
}

export default useWalletModal
