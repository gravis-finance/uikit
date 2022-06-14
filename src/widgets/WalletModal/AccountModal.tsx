import React, { useEffect, useState } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { useTranslation } from 'react-multi-lang'
import styled from 'styled-components'

import Button from '../../components/Button/Button'
import CopyButton from '../../components/Button/CopyButton'
import Flex from '../../components/Flex/Flex'
import {
  BSCScanIcon,
  Ether,
  ExitIcon,
  GmartIcon,
  HecoIcon,
  MaticIcon,
  ModalBackgroundIcon,
  ModalBackgroundIconMobile,
  TransactionHistoryIcon
} from '../../components/Svg'
import DefaultAvatar from '../../components/Svg/Icons/DefaultAvatar'
import Text from '../../components/Text/Text'
import { getNetworkId } from '../../util/getNetworkId'
import { Modal } from '../Modal'
import { EditProfileLink, ProfileAvatar, ProfileName } from '../Profile'
import { connectorLocalStorageKey, useWalletsConfig } from './config'
import { ConnectorNames } from './types'

export type AccountModalProps = {
  account: string
  logout: () => void
  onDismiss?: () => void
  explorerName?: string
  explorerLink?: string
  tokenSymbol?: string
  networkName?: string
  balance?: string
  onTransactionHistoryHandler?: any
  balanceHook?: any
  gmartProfileLink?: string
}

const StyledBackGround = styled.div<{ image?: string; mobileImage?: string }>`
  background-image: ${({ image }) => image};
  height: 128px;
  min-width: 694px;
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

const StyledFlexContainer = styled(StyledFlex)`
  grid-column-gap: 16px;
`

const IconContainer = styled.div`
  position: absolute;
  left: 8px;
  top: 8px;
  background: white;
  padding: 7px 6px;
  border-radius: 100%;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
`

const svgString = encodeURIComponent(
  renderToStaticMarkup(<ModalBackgroundIcon />)
)
const svgStringMobile = encodeURIComponent(
  renderToStaticMarkup(<ModalBackgroundIconMobile />)
)

const getAccountIcon = (walletsConfig: any) => {
  const connectorId = localStorage.getItem('connectorId')

  if (connectorId)
    if (
      Object.entries(ConnectorNames).find((name) => name[1] === connectorId)
    ) {
      const foundWalletConfig = Object.entries(walletsConfig).find(
        (configName: any) => configName[1].connectorId === connectorId
      )
      if (foundWalletConfig) return foundWalletConfig[1]
    }

  return walletsConfig.metamask
}

const AccountModal: React.FC<AccountModalProps> = ({
  account,
  logout,
  onDismiss = () => null,
  balance,
  explorerName = 'viewOnEtherScan',
  explorerLink,
  tokenSymbol = 'BNB',
  networkName = 'binanceSmartChain',
  onTransactionHistoryHandler,
  balanceHook,
  gmartProfileLink = process.env.REACT_APP_GMART_URL
    ? `${process.env.REACT_APP_GMART_URL}${
        process.env.REACT_APP_GMART_URL !== '/' ? '/' : ''
      }profile/my`
    : ''
}) => {
  const [currentBalance, setBalance] = useState(balance)

  const walletsConfig = useWalletsConfig()
  useEffect(() => {
    if (balanceHook)
      balanceHook().then((result?: any) => setBalance(result?.toSignificant(6)))
  }, [balanceHook])

  const t = useTranslation()

  const { icon: Icon } = getAccountIcon(walletsConfig)

  return (
    <Modal
      dataId="account-modal"
      title={
        <Flex alignItems="center" gridGap="1rem">
          <ProfileName account={account}>{t('account')}</ProfileName>
          <EditProfileLink fontSize="0.9em" />
        </Flex>
      }
      onDismiss={onDismiss}
      styledModalContent={{ padding: '0 24px 32px 24px' }}
    >
      <StyledBackGround
        image={`url("data:image/svg+xml,${svgString}")`}
        mobileImage={`url("data:image/svg+xml,${svgStringMobile}")`}
      >
        <StyledInfo>
          <ProfileAvatar account={account} size="80px">
            <DefaultAvatar width="80px" height="80px" />
          </ProfileAvatar>
          <StyledFlex>
            <StyledInfoFlex flexDirection="column" marginLeft={43}>
              <Text color="rgba(255, 255, 255, 0.5)" fontSize="14px">
                {t('balanceTitle')}
              </Text>
              <Text color="white" style={{ marginTop: '6px' }}>
                {!currentBalance ? (
                  <p>{t('Loading balance...')}</p>
                ) : (
                  `${currentBalance} ${tokenSymbol}`
                )}
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
        <IconContainer>
          <Icon width={18} height={18} />
        </IconContainer>
        <StyledInput
          id="account-address"
          data-id="account-address"
          aria-label="Account address"
          defaultValue={account}
          readOnly
        />
        <CopyButton textToCopy={account} />
      </StyledInputContainer>
      <StyledFlexContainer mt="16px" justifyContent="space-between" buttonsList>
        <StyledButton
          size="md"
          variant="dark"
          onClick={() => window.open(explorerLink)}
          data-id="scan-button"
        >
          {explorerName.includes('Bsc') ? (
            <BSCScanIcon mr={16} />
          ) : explorerName.includes('Heco') ? (
            <HecoIcon mr={16} />
          ) : explorerName.includes('Ether') ? (
            <Ether mr={12} />
          ) : (
            <MaticIcon mr={16} />
          )}
          {t(explorerName)}
        </StyledButton>
        {!!gmartProfileLink && (
          <StyledButton
            size="md"
            variant="dark"
            forwardedAs="a"
            href={`${gmartProfileLink}?network=${getNetworkId()}`}
            data-id="gmart-profile-button"
          >
            <GmartIcon size="1.5em" mr="1rem" />
            {t('Gmart profile')}
          </StyledButton>
        )}
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
          data-id="disconnect-button"
          onClick={() => {
            logout()
            window.localStorage.removeItem(connectorLocalStorageKey)
            onDismiss()
          }}
        >
          <ExitIcon mr={16} />
          {t('disconnect')}
        </StyledButton>
      </StyledFlexContainer>
    </Modal>
  )
}

export default AccountModal
