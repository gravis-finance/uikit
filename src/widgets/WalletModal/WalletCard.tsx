import React from 'react'
import styled, { css } from 'styled-components'
import Button from '../../components/Button/Button'
import Text from '../../components/Text/Text'
import { connectorLocalStorageKey, networks } from './config'
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
  disabled?: boolean
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

const StyledFlex = styled(Flex) <{ disabled?: boolean }>`
  cursor: pointer;
  > button {
    border: 1px solid transparent !important;
    transition: border 200ms ease-in-out;
  }
  > div {
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
  :hover {
    > button {
      background: #353535 !important;
      border: 1px solid #009ce1 !important;
    }

    > div {
      color: #009ce1;
    }
  }

  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
      opacity: 0.5;

      > button {
        background: #353535 !important;
      }
      :hover {
        > button {
          border: 1px solid transparent !important;
        }
      }
    `}
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
  withReload = false,
  disabled: disabledProp,
}) => {
  const { title, icon: Icon } = walletConfig
  const disabled = disabledProp || !networks.some(
    (network) => network?.title === selectedNetwork && network?.wallets.some((wallet) => wallet?.title === title)
  )

  const onClick = () => {
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
    <StyledFlex flexDirection="column" alignItems="center" disabled={disabled} onClick={onClick}>
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
