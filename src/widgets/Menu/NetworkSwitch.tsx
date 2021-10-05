import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { Popper } from '../../components/Popper'
import { NetworksConfig } from '../WalletModal/types'
import { networks as NETWORKS } from '../WalletModal/config'
import { ArrowDropDownIcon } from '../../components/Svg'
import switchNetwork from '../../util/switchNetwork'
import { getNetworkTitles } from '../../util/getNetworkId'
import { NetworksConfigObject } from '../../index'

const StyledDropDown = styled.div<{ $showOptions?: boolean; $toggleMobile?: boolean; $asIcon?: boolean }>`
  width: 165px;
  box-sizing: border-box;
  height: 48px;
  position: relative;
  cursor: pointer;
  margin-right: 24px;
  background: ${({ $showOptions }) =>
    !$showOptions
      ? 'linear-gradient(90.28deg, #292929 0%, #242424 100%), #262626'
      : 'linear-gradient(90.28deg, #242424 0%, #202020 100%), linear-gradient(90.28deg, #292929 0%, #242424 100%), #303030'};
  border: 1px solid #2e2e2e;
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.4), -4px -4px 12px rgba(255, 255, 255, 0.05);
  border-radius: ${({ $showOptions }) => ($showOptions ? '6px 6px 0 0' : '55px')};
  user-select: none;
  transition: background-color 200ms ease-in-out, color 200ms ease-in-out, border-radius 100ms ease-in-out;

  > svg * {
    transition: stroke 200ms ease-in-out, opacity 200ms ease-in-out;
  }

  > * {
    transition: color 200ms ease-in-out;
  }

  :hover {
    background: linear-gradient(90.28deg, #242424 0%, #202020 100%), linear-gradient(90.28deg, #292929 0%, #242424 100%),
      #303030;
    > * {
      color: white;
    }
    > svg * {
      stroke: white;
      opacity: 1;
    }
  }

  > svg {
    fill: #6c5dd3;
    position: absolute;
    right: 23px;
    top: 12px;
  }

  ${({ $asIcon }) =>
    $asIcon &&
    `
    width: 40px;
    height: 40px;
    display: flex;
    margin-right: 8px;
    > svg {
      display: none;
    }
  `}

  ${({ $toggleMobile }) =>
    $toggleMobile
      ? `
    @media screen and (max-width: 967px) {
      width: 40px;
      height: 40px;
      display: flex;
      margin-right: 8px;
      > svg {
        display: none;
      }
    }
  `
      : ''}
`

const StyledSelectedOption = styled.p<{ $showOptions?: boolean; $toggleMobile?: boolean; $asIcon?: boolean }>`
  position: absolute;
  padding-left: 47px;
  margin-top: 17px;
  color: ${({ $showOptions }) => ($showOptions ? '#fff' : '#929292')};
  font-size: 14px;

  ${({ $asIcon }) => $asIcon && `display: none;`}

  ${({ $toggleMobile }) =>
    $toggleMobile &&
    `
    @media screen and (max-width: 967px) {
      display: none;
    }
  `}
`

const StyledOptionsContainer = styled(Popper)<{ $toggleMobile?: boolean; $asIcon?: boolean }>`
  box-sizing: border-box;
  position: relative;
  background: linear-gradient(90.28deg, #292929 0%, #242424 100%);
  border: 1px solid #2e2e2e;
  border-radius: 0 0 6px 6px;
  z-index: 9999;

  ${({ $asIcon }) => $asIcon && `width: 180px;`}

  ${({ $toggleMobile }) =>
    $toggleMobile &&
    `
  @media screen and (max-width: 967px) {
    width: 180px;
  }`}
`

const StyledOption = styled.div`
  padding: 12px;
  text-align: left;
  color: #909090;
  transition: background-color 200ms ease-in-out, color 200ms ease-in-out;
  cursor: pointer;
  border-radius: 6px;
  display: flex;
  align-items: center;

  > *:first-child {
    margin-right: 8px;
  }

  :hover {
    background: linear-gradient(90.28deg, #242424 0%, #1f1f1f 100%);
    box-shadow: inset 0px -1px 0px rgba(129, 129, 129, 0.15), inset 0px 4px 25px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    color: #fff;
  }
`

const StyledIconContainer = styled.div<{ $toggleMobile?: boolean; $asIcon?: boolean }>`
  position: absolute;
  top: 12px;
  left: 14px;

  ${({ $asIcon }) =>
    $asIcon &&
    ` margin: auto;
    position: initial;
    width: 24px;
    height: 24px;`}

  ${({ $toggleMobile }) =>
    $toggleMobile
      ? `@media screen and (max-width: 967px) {
    margin: auto;
    position: initial;
    width: 24px;
    height: 24px;
  }`
      : ''}
`

const StyledArrowDropDownIcon = styled(ArrowDropDownIcon)<{ reversed?: boolean }>`
  transition: transform 200ms;
  ${({ reversed }) => (reversed ? 'transform: rotate(180deg);' : '')}
`

type Props = {
  isProduction?: boolean
  toggleMobile?: boolean
  asIcon?: boolean
  withReload?: boolean
  networks?: typeof NETWORKS
  ethereum?: boolean
  disableEthereum?: boolean
  networkSwitchItemCallback?: (chainId: string) => void
} & React.ComponentProps<typeof StyledDropDown>

const NetworkSwitch: React.FC<Props> = ({
  isProduction,
  toggleMobile = true,
  asIcon,
  withReload = false,
  networks = NetworksConfigObject.networks,
  ethereum,
  disableEthereum,
  networkSwitchItemCallback,
  ...restProps
}) => {
  const history = useHistory()
  const container = React.useRef<HTMLDivElement>()
  const optionsContainer = React.useRef<HTMLDivElement>()
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null)
  const [selectedOption, setSelectedOption] = useState(getNetworkTitles() || networks[0].title)
  const showOptions = !!anchorEl

  const handleClick = (item: NetworksConfig) => {
    if (networkSwitchItemCallback) {
      networkSwitchItemCallback(item.chainId)
    }
    switchNetwork(item.chainId, withReload, history)
  }

  useEffect(() => {
    const network = new URLSearchParams(history?.location.search).get('network')
    if (network) setSelectedOption(networks.find((item) => item.chainId === network)?.title)
  }, [history?.location, networks])

  useEffect(() => {
    const onClickHandler = (event: any) => {
      if (
        container.current &&
        optionsContainer.current &&
        !container.current.contains(event.target) &&
        !optionsContainer.current.contains(event.target)
      )
        setAnchorEl(null)
    }
    if (showOptions) {
      document.addEventListener('mousedown', onClickHandler)
    }
    return () => document.removeEventListener('mousedown', onClickHandler)
  }, [showOptions, optionsContainer])

  const { icon: Icon } = networks[networks.findIndex((network: any) => network.title === selectedOption)]

  return (
    <StyledDropDown
      {...restProps}
      id="network-switch-dropdown"
      onClick={(event: { currentTarget: HTMLDivElement }) => setAnchorEl(anchorEl ? null : event.currentTarget)}
      $showOptions={showOptions}
      $toggleMobile={toggleMobile}
      $asIcon={asIcon}
      ref={container}
    >
      <StyledIconContainer $toggleMobile={toggleMobile} $asIcon={asIcon}>
        <Icon />
      </StyledIconContainer>
      <StyledSelectedOption $showOptions={showOptions} $toggleMobile={toggleMobile} $asIcon={asIcon}>
        {networks[networks.findIndex((network: any) => network.title === selectedOption)].label}
      </StyledSelectedOption>
      {!showOptions ? <StyledArrowDropDownIcon /> : <StyledArrowDropDownIcon reversed />}
      <StyledOptionsContainer
        $toggleMobile={toggleMobile}
        $asIcon={asIcon}
        open={showOptions}
        anchorEl={anchorEl}
        placement="bottom-start"
        inheritWidth
        ref={optionsContainer}
      >
        {networks
          .map((item: any) => (
            <StyledOption key={item.title} onClick={() => handleClick(item)} id={`${item.label}-switch-option`}>
              <item.icon />
              {item.label}
            </StyledOption>
          ))}
      </StyledOptionsContainer>
    </StyledDropDown>
  )
}

export default NetworkSwitch
