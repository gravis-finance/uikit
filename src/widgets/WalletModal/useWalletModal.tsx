import React from 'react'

import { useModal } from '../Modal'
import ConnectModal from './ConnectModal'
import AccountModal from './AccountModal'
import { Login } from './types'
import { getNetworkLabel, getNetworkSymbol } from '../../util/getNetworkId'

interface ReturnType {
  onPresentConnectModal: () => void
  onPresentAccountModal: () => void
}

const useWalletModal = (
  isProduction: boolean,
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
    <ConnectModal onSelect={onSelectConnectModal} isProduction={isProduction} login={login} />
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
  // useEffect(()=>{
  //   onPresentAccountModal()
  // }, [balance])
  return { onPresentConnectModal, onPresentAccountModal }
}

export default useWalletModal
