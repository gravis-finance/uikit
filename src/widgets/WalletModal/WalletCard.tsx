import React from 'react'
import styled from 'styled-components'
import Button from '../../components/Button/Button'
import Text from '../../components/Text/Text'
import { connectorLocalStorageKey } from './config'
import { Login, WalletsConfig } from './types'
import Flex from '../../components/Flex/Flex'
import { CheckmarkCircleIcon } from '../../components/Svg'

interface Props {
  walletConfig: WalletsConfig
  login: Login
  onDismiss: () => void
  selected?: boolean
  setSelectedWallet: (arg0: string) => void
  selectedNetwork: string
  withReload?: boolean
}

const StyledButton = styled(Button)`
  position: relative;
  width: 48px;
  height: 48px;
  background: #353535;
  border-radius: 43px;
  display: flex;
  padding: 0;

  > * {
    margin: auto;
  }
`

const StyledFlex = styled(Flex)<{ isBlurred?: boolean }>`
  > button {
    border: 1px solid transparent !important;
    ${({ isBlurred }) => (isBlurred ? 'opacity: 0.5;' : '')}
    transition: border 200ms ease-in-out;
  }
  > div {
    ${({ isBlurred }) => (isBlurred ? 'opacity: 0.5;' : '')}
    transition: color 200ms ease-in-out;
  }
  > button {
    border: 1px solid transparent !important;
    transition: border 200ms ease-in-out;
    background: #353535 !important;
  }

  > button:active,
  button:hover {
    border: none !important;
    box-shadow: none !important;
    background: #353535 !important;
  }
  ${({ isBlurred }) =>
    isBlurred
      ? `
    > button {
        background: #353535 !important;
    }
    :hover {
      > button {
        border: 1px solid transparent !important;
      }
    }
  `
      : `:hover {
      > button {
        background: #353535 !important;
        border: 1px solid #009CE1 !important;
      }
  
      > div {
        color: #009CE1;
      }
    }`}
`

const StyledCheckMarkInCircle = styled(CheckmarkCircleIcon)`
  position: absolute;
  right: -5px;
  top: -5px;
  width: 16px;
  height: 16px;
`

const WalletCard: React.FC<Props> = ({
  login,
  walletConfig,
  onDismiss,
  selected,
  setSelectedWallet,
  selectedNetwork,
  withReload = true,
}) => {
  const { title, icon: Icon } = walletConfig

  const onClickHandler = () => {
    window.localStorage.setItem(connectorLocalStorageKey, walletConfig.connectorId)
    login(walletConfig.connectorId)
    setSelectedWallet(title)
    onDismiss()
    if (withReload)
      setTimeout(() => {
        window.location.reload()
      }, 1000)
  }

  return (
    <StyledFlex
      flexDirection="column"
      alignItems="center"
      onClick={title !== 'Metamask' && selectedNetwork === 'Huobi' ? undefined : onClickHandler}
      isBlurred={title !== 'Metamask' && selectedNetwork === 'Huobi'}
    >
      <StyledButton
        fullwidth
        variant="tertiary"
        style={{ justifyContent: 'space-between' }}
        id={`wallet-connect-${title.toLocaleLowerCase()}`}
      >
        <Icon width="32px" />
        {selected && <StyledCheckMarkInCircle />}
      </StyledButton>
      <Text color="rgba(255, 255, 255, 0.5)" fontSize="11px" mt="8px" style={{ textAlign: 'center' }}>
        {title}
      </Text>
    </StyledFlex>
  )
}

export default WalletCard
