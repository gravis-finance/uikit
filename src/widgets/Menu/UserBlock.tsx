import React from 'react'
import styled, { css } from 'styled-components'

import Button from '../../components/Button/Button'
import Flex from '../../components/Flex/Flex'
import { AddIcon } from '../../components/Svg'
import { useWalletModal } from '../WalletModal'
import { AccountModalProps } from '../WalletModal/AccountModal'
import { Login } from '../WalletModal/types'
import NetworkSwitch from './NetworkSwitch'

export type UserBlockProps = {
  account?: string
  login: Login
  logout: () => void
  buttonTitle?: string
  balance?: string
  explorerName?: string
  explorerLink?: string
  onTransactionHistoryHandler?: any
  balanceHook?: any
  networkSwitchVisible?: boolean
  networkSwitchItemCallback?: (chainId: string) => void
  isShowMenuPanel: boolean
} & Pick<AccountModalProps, 'gmartProfileLink'>

const StyledConnectButton = styled.div<{ isShowMenuPanel: boolean }>`
  ${({ isShowMenuPanel }) =>
    isShowMenuPanel
      ? css`
          margin-right: 10px;
        `
      : ''}
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

const StyledFlex = styled(Flex)<{ isShowMenuPanel: boolean }>`
  ${({ isShowMenuPanel }) =>
    isShowMenuPanel
      ? css`
          @media screen and (max-width: 968px) {
            > *:last-child {
              margin-right: 60px;
            }
          }
        `
      : ''}
`

const UserBlock: React.FC<UserBlockProps> = (props) => {
  const {
    account,
    login,
    logout,
    buttonTitle,
    balance,
    explorerName,
    explorerLink,
    onTransactionHistoryHandler,
    balanceHook,
    networkSwitchVisible,
    networkSwitchItemCallback,
    gmartProfileLink,
    isShowMenuPanel
  } = props

  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(
    login,
    logout,
    account,
    balance,
    explorerName,
    explorerLink,
    onTransactionHistoryHandler,
    balanceHook,
    undefined,
    gmartProfileLink
  )
  const accountEllipsis = account
    ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}`
    : null

  return (
    <StyledFlex
      isShowMenuPanel={isShowMenuPanel}
      alignItems="center"
      style={{ pointerEvents: 'all' }}
    >
      {networkSwitchVisible && (
        <NetworkSwitch networkSwitchItemCallback={networkSwitchItemCallback} />
      )}
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
        <StyledConnectButton isShowMenuPanel={isShowMenuPanel}>
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
