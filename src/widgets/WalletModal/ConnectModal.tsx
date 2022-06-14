import React, { useState } from 'react'
import { useTranslation } from 'react-multi-lang'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import { ButtonBase } from '../../components/Button'
import { Checkbox } from '../../components/Checkbox'
import Flex from '../../components/Flex/Flex'
import { Link } from '../../components/Link'
import Text from '../../components/Text/Text'
import { privacyAndPoliceLink, termsOfUseLink } from '../../constants'
import { getNetworkId, getNetworkTitles } from '../../util/getNetworkId'
import switchNetwork from '../../util/switchNetwork'
import { useWidgetsContext } from '../../WidgetsContext'
import { Modal } from '../Modal'
import { useNetworksList, useWalletsList } from './config'
import NetworkSelector from './NetworkSelector'
import { Login } from './types'
import WalletCard from './WalletCard'

interface Props {
  login: Login
  onDismiss?: () => void
  onSelect?: () => void
}

const StyledPoint = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 6px;
  display: flex;
  border: 1px solid rgba(255, 255, 255, 0.05);

  > * {
    color: rgba(255, 255, 255, 0.5);
    font-size: 11px;
    margin: auto;
  }

  @media screen and (max-width: 800px) {
    display: none;
  }
`

const StyledFlex = styled(Flex)<{ hecoOnly?: boolean }>`
  margin-left: ${({ hecoOnly }) => (hecoOnly ? '0' : '60px')};
  flex-wrap: wrap;
  gap: 16px;

  > * {
    width: 72px;
  }

  @media screen and (max-width: 800px) {
    margin-left: 18px;
    margin-left: ${({ hecoOnly }) => (hecoOnly ? '0' : '18px')};
  }
`

const StyledFlexPoint = styled(Flex)`
  @media screen and (max-width: 800px) {
    > div {
      margin-left: 0 !important;
    }
  }
`

const StyledWalletFlex = styled(StyledFlex)<{ hecoOnly?: boolean }>`
  > div:last-child {
    margin-right: ${({ hecoOnly }) => (hecoOnly ? '0' : '64px')};
    margin: ${({ hecoOnly }) => (hecoOnly ? 'auto' : '')};
  }
`

const StyledLink = styled(Link)`
  display: inline;
`

const ConnectModal: React.FC<Props> = ({
  onSelect = () => null,
  login,
  onDismiss = () => null
}) => {
  const { networks } = useWidgetsContext()
  const networksList = useNetworksList()
  const wallets = useWalletsList()
  const [termsChecked, setTermsChecked] = useState(false)
  const id: string = getNetworkId()
  const history = useHistory()
  const [selectedNetwork, setSelectedNetwork] = useState(getNetworkTitles())
  const [selectedWallet, setSelectedWallet] = useState('')
  const t = useTranslation()

  const handleClose = () => {
    const currentChainId = localStorage.getItem('chainId')
    if (id && currentChainId && currentChainId !== id)
      switchNetwork(currentChainId, false, history)
    onDismiss()
  }

  const handleSelect = () => {
    onDismiss()
    onSelect()
  }

  const handleTermsChange = () => {
    setTermsChecked((value) => !value)
  }

  return (
    <Modal
      dataId="connect-modal"
      title={t('connectToWallet')}
      onDismiss={handleClose}
    >
      <>
        <StyledFlexPoint alignItems="center" marginBottom="5px">
          <StyledPoint>
            <p>1</p>
          </StyledPoint>
          <Text
            data-id="accept-block"
            style={{ fontSize: '14px', color: '#fff', marginLeft: '16px' }}
          >
            {t('Accept')}{' '}
            <StyledLink
              style={{ color: '#009CE1' }}
              fontSize="14px"
              target="_blank"
              href={termsOfUseLink}
            >
              {t('Terms of Use')}
            </StyledLink>{' '}
            {t('and')}{' '}
            <StyledLink
              style={{ color: '#009CE1' }}
              fontSize="14px"
              target="_blank"
              href={privacyAndPoliceLink}
            >
              {t('Privacy Policy')}
            </StyledLink>
          </Text>
        </StyledFlexPoint>
        <StyledFlex mt="10px">
          <ButtonBase
            data-id="read-and-accept-button"
            style={{ width: 'fit-content' }}
            onClick={handleTermsChange}
          >
            <Checkbox checked={termsChecked} />
            <Text fontSize="14px" ml="10px">
              {t('I read and accept')}
            </Text>
          </ButtonBase>
        </StyledFlex>
        <StyledFlexPoint
          alignItems="center"
          marginTop="30px"
          marginBottom="5px"
        >
          <StyledPoint>
            <p>2</p>
          </StyledPoint>
          <Text style={{ fontSize: '14px', color: '#fff', marginLeft: '16px' }}>
            {t('chooseNetwork')}
          </Text>
        </StyledFlexPoint>
        <StyledFlex data-id="network-list">
          {networksList
            ?.filter(({ key }) => networks?.includes(key))
            .map((entry: any) => (
              <NetworkSelector
                disabled={!termsChecked}
                key={entry.title}
                chainId={entry.chainId}
                selected={
                  termsChecked ? entry.title === selectedNetwork : undefined
                }
                networkConfig={entry}
                setSelectedNetwork={setSelectedNetwork}
              />
            ))}
        </StyledFlex>
        <StyledFlexPoint
          alignItems="center"
          marginTop="30px"
          marginBottom="5px"
        >
          <StyledPoint>
            <p>3</p>
          </StyledPoint>
          <Text style={{ fontSize: '14px', color: '#fff', marginLeft: '16px' }}>
            {t('chooseWallet')}
          </Text>
        </StyledFlexPoint>
      </>
      <StyledWalletFlex data-id="wallet-list">
        {wallets.map((entry) => (
          <WalletCard
            disabled={!termsChecked}
            key={entry.title}
            login={login}
            selected={termsChecked ? entry.title === selectedWallet : undefined}
            walletConfig={entry}
            onDismiss={handleSelect}
            setSelectedWallet={setSelectedWallet}
            selectedNetwork={selectedNetwork}
          />
        ))}
      </StyledWalletFlex>
      {/* <HelpLink href="" external>
        <BigHelpIcon color="primary" mr="6px" height="18px" width="18px" />
        <Text fontSize="10px" color="#009CE1" style={{ fontWeight: 500 }}>
          {t('learnHowConnect')}
        </Text>
      </HelpLink> */}
    </Modal>
  )
}

export default ConnectModal
