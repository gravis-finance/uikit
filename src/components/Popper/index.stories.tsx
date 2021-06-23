import React, { MouseEventHandler } from 'react'
import { Story } from '@storybook/react'
import { Popper } from './index'

export default {
  title: 'Components/Popper',
  component: Popper,
  argTypes: {
    anchorEl: {
      table: { disable: true },
    },
  },
}

export const Template: Story = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null)

  const onClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    setAnchorEl(anchorEl ? null : (event.target as HTMLElement))
  }

  return (
    <div>
      <button type="button" onClick={onClick}>
        Click me to toggle popper
      </button>
      <Popper open={!!anchorEl} style={{ color: 'white' }}>
        This is a popper
      </Popper>
    </div>
  )
}

Template.storyName = 'Popper'
