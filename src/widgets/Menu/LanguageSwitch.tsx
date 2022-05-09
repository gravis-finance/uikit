import React, { FC, useEffect, useState } from 'react'
import { setLanguage } from 'react-multi-lang'
import styled from 'styled-components'

import { ArrowDropDownIcon, SvgProps } from '../../components/Svg'
import { localStorageLanguageItem } from '../../constants'
import { getDefaultLanguage } from '../../util/getDefaultLanguage'
import { availableLanguages } from './config'

const StyledDropDown = styled.div<{ showOptions?: boolean; toggleMobile?: boolean }>`
  width: 117px;
  box-sizing: border-box;
  height: 48px;
  position: relative;
  cursor: pointer;
  margin-right: 24px;
  background: ${({ showOptions }) =>
    !showOptions
      ? 'linear-gradient(90.28deg, #292929 0%, #242424 100%), #262626'
      : 'linear-gradient(90.28deg, #242424 0%, #202020 100%), linear-gradient(90.28deg, #292929 0%, #242424 100%), #303030'};
  border: 1px solid #2e2e2e;
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.4), -4px -4px 12px rgba(255, 255, 255, 0.05);
  border-radius: ${({ showOptions }) => (showOptions ? '6px 6px 0 0' : '55px')};
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
  ${({ toggleMobile }) =>
    toggleMobile
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

const StyledSelectedOption = styled.p<{ showOptions?: boolean; toggleMobile?: boolean }>`
  position: absolute;
  padding-left: 47px;
  margin-top: 17px;
  color: ${({ showOptions }) => (showOptions ? '#fff' : '#929292')};
  font-size: 14px;

  ${({ toggleMobile }) =>
    toggleMobile
      ? `
    @media screen and (max-width: 967px) {
      display: none;
    }
  `
      : ''}
`

const StyledOptionsContainer = styled.div<{ toggleMobile?: boolean }>`
  box-sizing: border-box;
  position: relative;
  margin-top: 46px;
  // padding: 2px;
  background: linear-gradient(90.28deg, #292929 0%, #242424 100%);
  border: 1px solid #2e2e2e;
  box-sizing: border-box;
  border-radius: 0 0 6px 6px;

  ${({ toggleMobile }) =>
    toggleMobile
      ? `
  @media screen and (max-width: 790px) {
    position: fixed;
    width: calc(100vw - 54px);
  }
  @media screen and (max-width: 967px) {
    position: absolute;
    width: 180px;
    margin-top: 38px;
  }`
      : ''}
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

const StyledIconContainer = styled.div<{ toggleMobile?: boolean }>`
  position: absolute;
  top: 12px;
  left: 14px;

  > svg {
    width: 24px;
    height: 24px;
  }

  ${({ toggleMobile }) =>
    toggleMobile
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

interface Props {
  toggleMobile?: boolean
  setSelectedLanguage?: (name: string) => void
}

interface languageType {
  name: string
  icon: FC<SvgProps>
}

const LanguageSwitch: React.FC<Props> = ({ toggleMobile = true, setSelectedLanguage }) => {
  const [showOptions, setShowOptions] = useState(false)
  const [selectedOption, setSelectedOption] = useState<languageType>(availableLanguages[0])

  const handleClick = (name: string) => {
    setSelectedOption(availableLanguages.find((language) => language.name === name) as languageType)
    localStorage.setItem(localStorageLanguageItem, name)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setSelectedLanguage(name)
    setLanguage(name.toLowerCase())
  }

  const onClickHandler = (event: any) => {
    if (!event.target.closest(StyledDropDown)) setShowOptions(false)
  }

  useEffect(() => {
    document.addEventListener('click', onClickHandler)
    return document.addEventListener('click', onClickHandler)
  })

  useEffect(() => {
    setSelectedOption(
      availableLanguages.find((language) => language.name === getDefaultLanguage()?.toUpperCase())
        ? (availableLanguages.find((language) => language.name === getDefaultLanguage()?.toUpperCase()) as languageType)
        : availableLanguages[0]
    )
  }, [])

  return (
    <StyledDropDown
      id="language-switch-dropdown"
      onClick={() => setShowOptions(!showOptions)}
      showOptions={showOptions}
      toggleMobile={toggleMobile}
    >
      <StyledIconContainer toggleMobile={toggleMobile}>
        <selectedOption.icon />
      </StyledIconContainer>
      <StyledSelectedOption showOptions={showOptions} toggleMobile={toggleMobile}>
        {selectedOption.name}
      </StyledSelectedOption>
      {!showOptions ? <StyledArrowDropDownIcon /> : <StyledArrowDropDownIcon reversed />}
      {showOptions && (
        <StyledOptionsContainer toggleMobile={toggleMobile}>
          {availableLanguages.map((language) => (
            <StyledOption id="en-switch-option" onClick={() => handleClick(language.name)} key={language.name}>
              <language.icon width={24} height={24} />
              {language.name}
            </StyledOption>
          ))}
        </StyledOptionsContainer>
      )}
    </StyledDropDown>
  )
}

export default LanguageSwitch
