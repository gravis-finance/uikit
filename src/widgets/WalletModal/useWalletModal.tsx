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
  title?: string,
  logoutTitle?: string,
  balance?: string,
  explorerName?: string,
  explorerLink?: string,
  onTransactionHistoryHandler?: void,
  balanceHook?: void,
  bscOnly?: boolean,
  ethereum?: boolean
): ReturnType => {

  const [onPresentConnectModal] = useModal(
    <ConnectModal isProduction={isProduction} login={login} title={title} bscOnly={bscOnly} ethereum={ethereum} />
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
    />
  )
  // useEffect(()=>{
  //   onPresentAccountModal()
  // }, [balance])
  return { onPresentConnectModal, onPresentAccountModal }
}

export default useWalletModal
