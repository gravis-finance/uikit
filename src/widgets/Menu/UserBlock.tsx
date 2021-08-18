import React from 'react'
import styled from 'styled-components'
import Button from '../../components/Button/Button'
import { useWalletModal } from '../WalletModal'
import { Login } from '../WalletModal/types'
import { AddIcon } from '../../components/Svg'
import NetworkSwitch from './NetworkSwitch'
import Flex from '../../components/Flex/Flex'
import { networks as NETWORKS } from '../WalletModal/config'

interface Props {
  networks?: typeof NETWORKS
  isProduction: boolean
  account?: string
  login: Login
  logout: () => void
  buttonTitle?: string
  modalTitle?: string
  modelLogout?: string
  balance?: string
  explorerName?: string
  explorerLink?: string
  onTransactionHistoryHandler?: any
  balanceHook?: any
  networkSwitchVisible?: boolean
  bscOnly?: boolean
  ethereum?: boolean
  disableEthereum?: boolean
  bscAndPoly?: boolean
}

const StyledConnectButton = styled.div`
  margin-right: 10px;
`

const StyledAddIcon = styled.div`
  margin-right: 16px;
  @media screen and (max-width: 480px) {
    display: none;
  }
`

const StyledButtonTitle = styled.div`
  font-size: 14px;
`

const StyledFlex = styled(Flex)`
  @media screen and (max-width: 968px) {
    > *:last-child {
      margin-right: 60px;
    }
  }
`

const UserBlock: React.FC<Props> = (props) => {
  const {
    networks,
    isProduction,
    account,
    login,
    logout,
    buttonTitle,
    modalTitle,
    modelLogout,
    balance,
    explorerName,
    explorerLink,
    onTransactionHistoryHandler,
    balanceHook,
    networkSwitchVisible,
    bscOnly,
    ethereum,
    disableEthereum,
    bscAndPoly
  } = props

  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(
    isProduction,
    login,
    logout,
    account,
    modalTitle,
    modelLogout,
    balance,
    explorerName,
    explorerLink,
    onTransactionHistoryHandler,
    balanceHook,
    bscOnly,
    ethereum,
    bscAndPoly
  )
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null

  return (
    <StyledFlex alignItems="center" style={{ pointerEvents: 'all' }}>
      {networkSwitchVisible && <NetworkSwitch networks={networks} isProduction={isProduction} ethereum={ethereum} disableEthereum={disableEthereum} />}
      {account ? (
        <Button
          size="md"
          onClick={() => {
            onPresentAccountModal()
          }}
          data-id="account-button"
        >
          {accountEllipsis}
        </Button>
      ) : (
        <StyledConnectButton>
          <Button
            size="md"
            onClick={() => {
              onPresentConnectModal()
            }}
            data-id="connect-button"
          >
            <StyledAddIcon>
              <AddIcon />
            </StyledAddIcon>
            <StyledButtonTitle>{buttonTitle}</StyledButtonTitle>
          </Button>
        </StyledConnectButton>
      )}
    </StyledFlex>
  )
}

export default UserBlock
