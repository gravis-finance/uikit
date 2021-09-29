import React, { useRef } from 'react'
import styled from 'styled-components'
/* eslint-disable import/no-unresolved */
import { Meta } from '@storybook/react/types-6-0'
import Heading from '../Heading/Heading'
import Input from './Input'
import { scales } from './types'
import NumericalInput from './NumericalInput'
import NumberButtons from './NumberButtons'
// import { Button } from '../Button'

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
  argTypes: {},
} as Meta

export const Default: React.FC = () => {
  return (
    <div>
      {Object.keys(scales).map((key) => (
        <>
          <Heading mb="16px">{key}</Heading>
          <Row>
            <Input type="text" scale={scales[key]} value="Value" onChange={(e) => console.log(e.target.value)} />
            <Input type="text" scale={scales[key]} placeholder="Placeholder..." />
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
  const inputRef = useRef<HTMLInputElement>(null)
  const onClick = () => {
    // console.log(inputRef.current.value)
  }
  return (
    <div>
      <NumericalInput inputRef={inputRef} onMaxButtonHandler={onClick} />
      {/* <NumericalInput /> */}
      {/* <Button onClick={onClick}>Click</Button> */}
    </div>
  )
}

export const PlusMinusButtons: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const onClick = () => {
    // console.log(inputRef.current.value)
  }
  return (
    <div>
      <NumberButtons />
      {/* <NumericalInput /> */}
      {/* <Button onClick={onClick}>Click</Button> */}
    </div>
  )
}
