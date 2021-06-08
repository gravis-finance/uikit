import React from 'react'
import { Story } from '@storybook/react'
import Tooltip from './Tooltip'

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  args: {
    title: 'This is a title',
  },
  argTypes: {
    anchorEl: {
      table: { disable: true },
    },
  },
}

export const Template: Story = (args) => (
  <Tooltip {...args}>
    <span style={{ color: 'white' }}>Hover me</span>
  </Tooltip>
)
Template.storyName = 'Tooltip'
