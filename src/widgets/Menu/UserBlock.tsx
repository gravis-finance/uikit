import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-multi-lang'
import Button from '../../components/Button/Button'
import { useWalletModal } from '../WalletModal'
import { Login } from '../WalletModal/types'
import { AddIcon, ProfileIcon } from '../../components/Svg'
import NetworkSwitch from './NetworkSwitch'
import Flex from '../../components/Flex/Flex'

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
  const t = useTranslation()

  return (
    <StyledFlex alignItems="center" style={{ pointerEvents: 'all' }}>
      <NetworkSwitch isProduction={isProduction} />
      {account ? (
        <Button
          size="md"
          onClick={() => {
            onPresentAccountModal()
          }}
          data-id="account-button"
          style={{ padding: '0 24px 0 16px' }}
        >
          <ProfileIcon style={{ marginRight: 12 }}/>
          {t('profile')}
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
