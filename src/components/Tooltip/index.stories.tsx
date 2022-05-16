import { Story } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'

import { Tooltip, TooltipArrow, TooltipTitle } from './index'

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  args: {
    title: 'This is a title'
  },
  argTypes: {
    anchorEl: {
      table: { disable: true }
    }
  }
}

export const Template: Story = (args) => (
  <Tooltip {...args}>
    <span style={{ color: 'white' }}>Hover me</span>
  </Tooltip>
)
Template.storyName = 'Tooltip'

const StyledTooltip = styled(Tooltip)`
  background-color: red;

  ${TooltipTitle} {
    color: white;
  }

  ${TooltipArrow} {
    &:before {
      background: red;
    }
  }
`

export const Styled: Story = (args) => (
  <StyledTooltip {...args} style={{ zIndex: 1 }}>
    <span style={{ color: 'white' }}>Hover me</span>
  </StyledTooltip>
)
Styled.args = {
  title: 'background-color: red'
}
