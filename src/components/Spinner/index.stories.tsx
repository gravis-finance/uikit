import React from 'react'
import styled from 'styled-components'
import Spinner from './Spinner'

export default {
  title: 'Components/Spinner',
  component: Spinner,
  argTypes: {},
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #262626;
`

export const Default: React.FC = () => {
  return (
    <Wrapper>
      <Spinner size={50} />
    </Wrapper>
  )
}
