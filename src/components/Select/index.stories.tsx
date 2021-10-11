import React from 'react'
import { Story } from '@storybook/react'
import styled from 'styled-components'
import { Select } from './Select'
import { Option } from './Option'

export default {
  title: 'Components/Select',
  component: Select,
}

export const Template: Story = (args) => (
  <Select {...args} defaultValue={1}>
    <Option value={1}>option 1</Option>
    <Option value={2}>option 2</Option>
    <Option value={3}>option 3</Option>
  </Select>
)
Template.storyName = 'Select'
