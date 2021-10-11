import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Story } from '@storybook/react'
import Box from './Box'
import { Link } from '../Link'

export default {
  title: 'Components/Primitives',
  component: Box,
}

export const BoxStory: Story = () => {
  return (
    <div>
      <Box as="p" color="white" fontWeight="bold" textTransform="capitalize">
        Contains everything from{' '}
        <Link href="https://styled-system.com/api" target="_blank">
          Styled System&lsquo;s API
        </Link>
      </Box>
    </div>
  )
}
BoxStory.storyName = 'Box'
