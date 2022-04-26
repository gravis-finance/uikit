import React from 'react'
/* eslint-disable import/no-unresolved */
import CookiePlaceholder from './index'
import { Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Components/CookiePlaceholder',
  component: CookiePlaceholder,
  argTypes: {},
} as Meta

export const Default: React.FC = () => {
  return <CookiePlaceholder isPushed />
}
