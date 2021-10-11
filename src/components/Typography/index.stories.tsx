import React from 'react'
import { Story } from '@storybook/react'
import { Typography } from './Typography'

export default {
  title: 'Components/Typography',
  component: Typography,
}

export const Template: Story = ({ variant, ...args }) => (
  <Typography variant={variant} {...args}>
    {variant ?? 'Default'}
  </Typography>
)
Template.storyName = 'Typography'
