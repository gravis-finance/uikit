import { Story } from '@storybook/react'
import React from 'react'

import Button from '../../components/Button/Button'
import Heading from '../../components/Heading/Heading'
import { Modal, ModalContainer, useModal } from '.'
import NetworkSwitchError from './NetworkSwitchError'
import { InjectedProps } from './types'

export default {
  title: 'Widgets/Modal',
  component: Modal,
  argTypes: {},
}

interface CustomModalProps extends InjectedProps {
  title: string
  onDismiss: () => void
}

const CustomModal: React.FC<CustomModalProps> = ({ title, onDismiss }) => {
  const dismissCallback = () => console.log('callback')
  return (
    <Modal title={title} onDismiss={onDismiss} dismissCallback={dismissCallback}>
    <Heading>{title}</Heading>
  <Button onClick={onDismiss}>This button Close nothing</Button>
</Modal>
)
}

export const Default: React.FC = () => {
  const [onPresent1] = useModal(<CustomModal title="Modal 1" />)
  const [onPresent2] = useModal(<CustomModal title="Modal 2" />)
  const [onPresent3] = useModal(<NetworkSwitchError />, false)
  return (
    <div>
      <Button onClick={onPresent1}>Open modal 1</Button>
      <Button onClick={onPresent2}>Open modal 2</Button>
      <Button onClick={onPresent3}>Open NetworkSwitchError modal</Button>
    </div>
  )
}

export const DisableOverlayClick: React.FC = () => {
  const [onPresent1] = useModal(<CustomModal title="Modal 1" />, false)

  return (
    <div>
      <Button onClick={onPresent1}>Disabled overlay click</Button>
    </div>
  )
}

interface BackButtonModalProps extends InjectedProps {
  title: string
}

const BackButtonModal: React.FC<BackButtonModalProps> = ({ title, onDismiss }) => {
  const handleOnBack = () => {
    return 1
  }

  return (
    <Modal title={title} onDismiss={onDismiss} onBack={handleOnBack} hideCloseButton>
      <Button onClick={onDismiss} variant="text" fullwidth>
        Consumer can still close it.
      </Button>
    </Modal>
  )
}

export const WithBackButton: React.FC = () => {
  const [onPresent1] = useModal(<BackButtonModal title="Modal with no X" />, false)

  return <Button onClick={onPresent1}>Only Back Button</Button>
}

export const ModalContainerStory: Story = ({ ...args }) => {
  return (
    <ModalContainer {...args}>
      <CustomModal title="Modal Container" />
    </ModalContainer>
  )
}
ModalContainerStory.storyName = 'ModalContainer'
ModalContainerStory.argTypes = {
  open: { control: { type: 'boolean' } },
}
