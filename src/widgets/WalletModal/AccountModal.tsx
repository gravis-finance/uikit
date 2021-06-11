import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { setLanguage, useTranslation } from 'react-multi-lang'
import { renderToStaticMarkup } from 'react-dom/server'
import Button from '../../components/Button/Button'
import Text from '../../components/Text/Text'
import Flex from '../../components/Flex/Flex'
import { Modal } from '../Modal'
import { connectorLocalStorageKey } from './config'
import CopyButton from '../../components/Button/CopyButton'
import DefaultAvatar from '../../components/Svg/Icons/DefaultAvatar'
import MetaMask from '../../components/Svg/Icons/MetaMask'
import {
  BSCScanIcon,
  ExitIcon,
  TransactionHistoryIcon,
  ModalBackgroundIcon,
  ModalBackgroundIconMobile,
  HecoIcon,
  MaticIcon,
} from '../../components/Svg'

interface Props {
  account: string
  logout: () => void
  onDismiss?: () => void
  explorerName?: string
  explorerLink?: string
  tokenAmount?: string
  tokenSymbol?: string
  networkName?: string
  balance?: string
  onTransactionHistoryHandler?: any
  balanceHook?: any
}

const StyledBackGround = styled.div<{ image?: string; mobileImage?: string }>`
  background-image: ${({ image }) => image};
  height: 128px;
  width: 694px;
  margin: 0 -25px;
  display: flex;
  align-items: center;
  padding: 24px;
  // background-color: #009CE1;
  background-position: center;
  @media screen and (max-width: 800px) {
    width: auto;
  }
  @media screen and (max-width: 800px) {
    background-image: ${({ mobileImage }) => mobileImage};
  }
`

const StyledInfo = styled.div`
  display: flex;
  align-items: center;
`

const StyledInput = styled.input`
  width: 100%;
  padding: 16px 16px 16px 46px;
  box-sizing: border-box;
  color: rgba(255, 255, 255, 0.5);

  background: linear-gradient(90.28deg, #292929 0%, #242424 100%);
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-sizing: border-box;
  border-radius: 41px;

  overflow: hidden;
  padding-right: 50px;

  :focus {
    border: 1px solid rgba(255, 255, 255, 0.05);
    outline: none;
  }
`

const StyledInputContainer = styled.div`
  margin-top: 24px;
  position: relative;
  > svg:first-child {
    cursor: pointer;
    position: absolute;
    left: 8px;
    top: 10px;
  }
  > div:last-child {
    cursor: pointer;
    position: absolute;
    right: 16px;
    top: 12px;
  }
`

const StyledButton = styled(Button)`
  border: 1px solid transparent !important;
  svg * {
    transition: stroke 200ms ease-in-out;
    stroke: white;
  }
  :hover {
    border: 1px solid #009ce1 !important;
    svg * {
      stroke: #009ce1;
    }
  }
`

const StyledFlex = styled(Flex)<{ buttonsList?: boolean }>`
  @media screen and (max-width: 800px) {
    flex-direction: column;
    > * {
      width: 100%;
    }
    > *:not(:last-child) {
      margin-bottom: ${({ buttonsList }) => (buttonsList ? '16px' : '8px')};
    }
  }
`

const StyledInfoFlex = styled(Flex)`
  @media screen and (max-width: 800px) {
    margin-left: 24px;
  }
`
// <LinkExternal small href={`https://bscscan.com/address/${account}`} mr="16px">
// {explorerName}
// </LinkExternal>

const svgString = encodeURIComponent(renderToStaticMarkup(<ModalBackgroundIcon />))
const svgStringMobile = encodeURIComponent(renderToStaticMarkup(<ModalBackgroundIconMobile />))

const AccountModal: React.FC<Props> = ({
  account,
  logout,
  onDismiss = () => null,
  balance,
  explorerName = 'MaticInfo',
  explorerLink,
  tokenSymbol = 'BNB',
  networkName = 'binanceSmartChain',
  onTransactionHistoryHandler,
  balanceHook,
}) => {
  const [currentBalance, setBalance] = useState(balance)

  useEffect(() => {
    if (balanceHook) balanceHook().then((result?: any) => setBalance(result?.toSignificant(6)))
  }, [balanceHook])

  const t = useTranslation()

  return (
    <Modal title={t('account')} onDismiss={onDismiss} styledModalContent={{ padding: '0 24px 32px 24px' }}>
      <StyledBackGround
        image={`url("data:image/svg+xml,${svgString}")`}
        mobileImage={`url("data:image/svg+xml,${svgStringMobile}")`}
      >
        <StyledInfo>
          <DefaultAvatar width="80px" height="80px" />
          <StyledFlex>
            <StyledInfoFlex flexDirection="column" marginLeft={43}>
              <Text color="rgba(255, 255, 255, 0.5)" fontSize="14px">
                {t('balanceTitle')}
              </Text>
              <Text color="white" style={{ marginTop: '6px' }}>
                {!currentBalance ? <p>Loading balance...</p> : `${currentBalance} ${tokenSymbol}`}
              </Text>
            </StyledInfoFlex>
            <StyledInfoFlex flexDirection="column" marginLeft={47}>
              <Text color="rgba(255, 255, 255, 0.5)" fontSize="14px">
                {t('networks')}
              </Text>
              <Text color="white" style={{ marginTop: '6px' }}>
                {t(networkName)}
              </Text>
            </StyledInfoFlex>
          </StyledFlex>
        </StyledInfo>
      </StyledBackGround>
      <StyledInputContainer>
        <MetaMask width="32" height="32" />
        <StyledInput value={account} />
        <CopyButton textToCopy={account} />
      </StyledInputContainer>
      <StyledFlex mt="16px" justifyContent="space-between" buttonsList>
        <StyledButton size="md" variant="dark" onClick={() => window.open(explorerLink)} data-id="scan-button">
          {explorerName.includes('Bsc') ? (
            <BSCScanIcon mr={16} />
          ) : explorerName.includes('Heco') ? (
            <HecoIcon mr={16} />
          ) : (
            <MaticIcon mr={16} />
          )}
          {t(explorerName)}
        </StyledButton>
        {onTransactionHistoryHandler && (
          <StyledButton
            size="md"
            variant="dark"
            onClick={onTransactionHistoryHandler}
            data-id="transition-history-button"
          >
            <TransactionHistoryIcon mr={16} />
            {t('transactionHistory')}
          </StyledButton>
        )}
        <StyledButton
          size="md"
          variant="dark"
          onClick={() => {
            logout()
            window.localStorage.removeItem(connectorLocalStorageKey)
            onDismiss()
          }}
        >
          <ExitIcon mr={16} />
          {t('disconnect')}
        </StyledButton>
      </StyledFlex>
    </Modal>
  )
}

export default AccountModal
