/* eslint-disable */
import React, { useEffect, useState } from 'react'
import styled, { CSSProperties } from 'styled-components'
import Input from './Input'
import { NumericalArrow } from '../Svg'
import { Button } from '../Button'
import { useTranslation } from 'react-multi-lang'

interface Props {
  value?: number
  containerStyle?: CSSProperties
  inputHeight?: string
  labelPlaceholder?: string
  balancePlaceholder?: string
  inputPlaceholder?: string
  displayMaxButton?: boolean
  maxInputLength?: number
  inputRef?: React.RefObject<HTMLInputElement>
  onMaxButtonHandler?: () => void
  onUserInput?: any
  balanceTitle?: string
  maxAmount?: number
  minAmount?: number
  readonly setCurrentValue?: (revalue: number) => void
}

const InputContainer = styled.div`
  position: relative;
  display: flex;
  width: fit-content;
`

const LabelPlaceholder = styled.div`
  position: absolute;
  color: white;
  background: linear-gradient(0deg, #414141, #414141), #ffffff;
  border-radius: 2px;
  top: -6px;
  left: 12px;
  font-size: 11px;
  padding: 2px 4px;
  cursor: default;
`

const BalancePlaceholder = styled.div`
  position: absolute;
  background: #414141;
  border-radius: 27px;
  color: white;
  right: 12px;
  top: -6px;
  font-size: 11px;
  padding: 2px 8px;
  cursor: default;
`

const NumbersContainer = styled.div<{ displayMaxButton: boolean }>`
  position: absolute;
  right: ${({ displayMaxButton }) => displayMaxButton ? '75px' : '15px'};
  top: calc(50% - 14px);
`

const NumericalArrowContainer = styled.div<{ reversed?: boolean }>`
  background-color: red;
  padding: 5px 3px;
  background-color: #3d3d3d;
  border-radius: 13px 13px 0 0;
  display: flex;
  cursor: pointer;
  transition: background-color 200ms ease-in-out;

  :hover {
    background-color: #292929;
  }

  ${({ reversed }) => (reversed ? 'transform: rotate(180deg);' : '')}

  > svg {
    margin: auto;
  }
`

const StyledMaxButton = styled(Button) <{ isFocused?: boolean }>`
  position: relative;
  right: ${({ isFocused }) => (isFocused ? '88' : '55')}px;
  margin-top: auto;
  margin-bottom: auto;
  min-width: 45px;
`

const NumericalInput: React.FC<Props> = ({
  value,
  labelPlaceholder,
  balancePlaceholder,
  inputHeight = '50px',
  inputPlaceholder,
  displayMaxButton = true,
  maxInputLength = 10,
  inputRef,
  onMaxButtonHandler,
  onUserInput,
  balanceTitle,
  maxAmount,
  minAmount,
  setCurrentValue,
  containerStyle,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const [mustBlur, setMustBlur] = useState(false)

  const onFocusHandler = () => {
    setIsFocused(true)
  }

  // @ts-ignore
  const onBlurHandler = (event) => {
    if (!mustBlur) {
      event.preventDefault()
      event?.target?.focus()
    } else {
      event?.target?.blur()
      setIsFocused(false)
      setMustBlur(false)
    }
  }

  // @ts-ignore
  const onClickHandler = (event) => {
    if (!event.target.closest(InputContainer)) {
      setMustBlur(true)
      // @ts-ignore
      inputRef?.current?.blur()
    }
  }

  const onArrowClickHandler = (direction: string) => {
    // @ts-ignore
    const inputElement: any = inputRef.current
    if (direction === 'up') {
      if (!inputRef?.current?.value) {
        // @ts-ignore
        inputElement.value = 0
      }
      // @ts-ignore
      else if (parseInt(inputRef.current.value, 10) < maxAmount)
        {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          inputElement.value = parseInt(inputRef.current.value, 10) + 1
        }
    } else if (!inputRef?.current?.value)
      // @ts-ignore
      inputElement.value = 0
    // @ts-ignore
    else if (inputRef.current.value - 1 < 0)
      // @ts-ignore
      inputElement.value = 0
    // @ts-ignore
    else if (parseInt(inputRef.current.value, 10) > minAmount)
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      inputElement.value = parseInt(inputRef.current.value, 10) - 1
    // @ts-ignore
    setCurrentValue(inputRef.current.value)
  }
  // @ts-ignore
  const onKeyPressHandler = (event) => {
    // @ts-ignore
    if (Number.isNaN(event.key) || inputRef.current.value.length >= maxInputLength) event.preventDefault()
    // event.target.value = inputRef.current.value
  }

  const t = useTranslation()

  useEffect(() => {
    document.addEventListener('click', onClickHandler)

    return () => {
      document.removeEventListener('click', onClickHandler)
    }
  })

  return (
    <InputContainer style={containerStyle}>
      {labelPlaceholder && <LabelPlaceholder>{labelPlaceholder}</LabelPlaceholder>}
      {balancePlaceholder && <BalancePlaceholder title={balanceTitle}>{balancePlaceholder}</BalancePlaceholder>}
      <Input
        value={value}
        placeholder={inputPlaceholder}
        ref={inputRef}
        style={{ height: inputHeight }}
        onFocus={onFocusHandler}
        onKeyPress={onKeyPressHandler}
        onBlur={onBlurHandler}
        onChange={onUserInput}
        {...props}
      />
      {displayMaxButton && (
        <StyledMaxButton buttonType="max" onClick={onMaxButtonHandler} isFocused={isFocused}>
          {t('maxAmountLabel')}
        </StyledMaxButton>
      )}
      {isFocused && (
        <NumbersContainer displayMaxButton={displayMaxButton}>
          <NumericalArrowContainer onClick={() => onArrowClickHandler('up')}>
            <NumericalArrow />
          </NumericalArrowContainer>
          <NumericalArrowContainer reversed onClick={() => onArrowClickHandler('down')}>
            <NumericalArrow />
          </NumericalArrowContainer>
        </NumbersContainer>
      )}
    </InputContainer>
  )
}

export default NumericalInput
