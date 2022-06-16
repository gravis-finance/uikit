import { Story } from '@storybook/react'
import React from 'react'

import { Option } from './Option'
import { Select } from './Select'
import { SelectBase } from './SelectBase'

export default {
  title: 'Components/Select',
  component: SelectBase
}

export const Template: Story = (args) => (
  <Select {...args} defaultValue={1}>
    <Option value={1}>option 1</Option>
    <Option value={2}>option 2</Option>
    <Option value={3}>option 3</Option>
  </Select>
)
Template.storyName = 'Select'

export const Unstyled: Story = (args) => (
  <SelectBase {...args} defaultValue={1}>
    <Option value={1}>option 1</Option>
    <Option value={2}>option 2</Option>
    <Option value={3}>option 3</Option>
  </SelectBase>
)
