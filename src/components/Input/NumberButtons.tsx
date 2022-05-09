import React, { useState } from 'react'
import styled, { css } from 'styled-components'

import { AddButton, MinusIcon } from '../Svg'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100px;
  justify-content: space-between;
`

const CircleButton = styled.div<{ disabled: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 100%;
  background: #292929;
  border: 1px solid #2e2e2e;
  box-sizing: border-box;
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.4), -4px -4px 12px rgba(255, 255, 255, 0.05);
  display: flex;
  transition: background 200ms ease-in-out;
  cursor: pointer;
  user-select: none;

  > svg {
    margin: auto;
  }

  ${({ disabled }) =>
    disabled
      ? css`
          background: #303030;
          border-color: #303030;
          box-shadow: none;
          color: rgba(255, 255, 255, 0.4);
          cursor: default;
          svg {
            filter: contrast(0.5);
          }
        `
      : css`
          :hover {
            background: #242424;
          }

          :active {
            background: #1c1c1c;
          }
        `}
`

const Value = styled.div`
  color: white;
  font-weight: 500;
  font-size: 16px;
  min-width: 40px;
  text-align: center;
`

interface Props {
  minValue?: number
  maxValue?: number
  callback: (count: number) => void
}

const NumberButtons: React.FC<Props> = ({ minValue = 1, maxValue = 50, callback }) => {
  const [count, setCount] = useState<number>(1)

  const onClickHandler = (minus: boolean) => {
    if (minus) {
      if (count > minValue) {
        setCount(count - 1)
        callback(count - 1)
      }
    } else if (!minus) {
      if (count < maxValue) {
        setCount(count + 1)
        callback(count + 1)
      }
    }
  }

  return (
    <Wrapper>
      <CircleButton disabled={count === minValue} onClick={() => onClickHandler(true)}>
        <MinusIcon />
      </CircleButton>
      <Value>{count}</Value>
      <CircleButton disabled={count === maxValue} onClick={() => onClickHandler(false)}>
        <AddButton />
      </CircleButton>
    </Wrapper>
  )
}

export default NumberButtons
