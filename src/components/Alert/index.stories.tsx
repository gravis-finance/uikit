/* eslint-disable import/no-unresolved */
import { Meta } from '@storybook/react/types-6-0'
import noop from 'lodash/noop'
import React from 'react'
import styled from 'styled-components'

import { Text } from '../Text'
import Alert from './Alert'

const Row = styled.div`
  margin-bottom: 32px;
`

export default {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {},
} as Meta

export const Default: React.FC = () => {
  return (
    <div style={{ padding: '32px', width: '400px' }}>
      <Row>
        <Alert title="Info">
          <Text as="p">This is a description</Text>
        </Alert>
      </Row>
      <Row>
        <Alert title="Success" variant="success">
          <Text as="p">This is a description</Text>
        </Alert>
      </Row>
      <Row>
        <Alert title="Warning" variant="warning">
          <Text as="p">This is a description</Text>
        </Alert>
      </Row>
      <Row>
        <Alert title="Danger" variant="danger">
          <Text as="p">Unsupported chain id: 3. Supported chain ids are: MAINNET,BSCTESTNET,HECOMAINNET,HECOTESTNET,56,97,128,256.</Text>
        </Alert>
      </Row>
    </div>
  )
}

const handleClick = noop

export const WithHandler: React.FC = () => {
  return (
    <div style={{ padding: '32px', width: '400px' }}>
      <Row>
        <Alert onClick={handleClick} title="Info" />
      </Row>
      <Row>
        <Alert onClick={handleClick} title="Success" variant="success">
          A description of the success alert
        </Alert>
      </Row>
      <Row>
        <Alert onClick={handleClick} title="Danger A Long Title" variant="danger" />
      </Row>
      <Row>
        <Alert onClick={handleClick} title="Warning" variant="warning" />
      </Row>
    </div>
  )
}
