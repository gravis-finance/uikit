import type { Meta } from '@storybook/react/types-6-0'
import React, { useRef } from 'react'
import styled from 'styled-components'

import Heading from '../Heading/Heading'
import Input from './Input'
import NumberButtons from './NumberButtons'
import NumericalInput from './NumericalInput'
import { scales } from './types'

const Row = styled.div`
  display: flex;
  margin-bottom: 32px;

  & > input + input {
    margin-left: 16px;
  }
`

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {}
} as Meta

const fn = () => null

export const Default: React.FC = () => {
  return (
    <div>
      {Object.keys(scales).map((key) => (
        <>
          <Heading mb="16px">{key}</Heading>
          <Row>
            <Input
              type="text"
              scale={scales[key]}
              value="Value"
              onChange={fn}
            />
            <Input
              type="text"
              scale={scales[key]}
              placeholder="Placeholder..."
            />
            <Input type="text" scale={scales[key]} value="Disabled" disabled />
            <Input type="text" scale={scales[key]} value="Success" isSuccess />
            <Input type="text" scale={scales[key]} value="Warning" isWarning />
          </Row>
        </>
      ))}
    </div>
  )
}

export const Numerical: React.FC = () => {
  const inputRef0 = useRef<HTMLInputElement>(null)
  const inputRef1 = useRef<HTMLInputElement>(null)
  const inputRef2 = useRef<HTMLInputElement>(null)
  const onClick = () => null

  return (
    <div>
      <NumericalInput
        minAmount={0}
        maxAmount={100}
        inputRef={inputRef0}
        onMaxButtonHandler={onClick}
      />
      <NumericalInput
        minAmount={0}
        maxAmount={100}
        inputRef={inputRef1}
        onMaxButtonHandler={onClick}
      />
      <NumericalInput
        minAmount={0}
        maxAmount={100}
        inputRef={inputRef2}
        onMaxButtonHandler={onClick}
      />
    </div>
  )
}

export const PlusMinusButtons: React.FC = () => {
  return (
    <div>
      <NumberButtons callback={fn} minValue={0} maxValue={10} />
    </div>
  )
}
