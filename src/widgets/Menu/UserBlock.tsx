import React from 'react'
import styled from 'styled-components'
import Button from '../../components/Button/Button'
import { useWalletModal } from '../WalletModal'
import { Login } from '../WalletModal/types'
import { AddIcon } from '../../components/Svg'
import NetworkSwitch from './NetworkSwitch'
import Flex from '../../components/Flex/Flex'
import LanguageSwitch from './LanguageSwitch'

interface Props {
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
  setSelectedLanguage: (name: string) => void
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

const StyledButton = styled(Button)`
  @media screen and (max-width: 968px) {
    margin-right: 60px;
  }
`

const UserBlock: React.FC<Props> = (props) => {
  const {
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
    setSelectedLanguage
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
    balanceHook
  )
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null
  return (
    <Flex alignItems="center" style={{ pointerEvents: 'all' }}>
      <LanguageSwitch setSelectedLanguage={setSelectedLanguage} />
      <NetworkSwitch isProduction={isProduction} />
      {account ? (
        <StyledButton
          size="md"
          onClick={() => {
            onPresentAccountModal()
          }}
          data-id="account-button"
        >
          {accountEllipsis}
        </StyledButton>
      ) : (
        <StyledConnectButton>
          <StyledButton
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
          </StyledButton>
        </StyledConnectButton>
      )}
    </Flex>
  )
}

export default UserBlock