import React from 'react'
import { Box } from '../../components/Box'

type AvatarProps = React.ComponentProps<typeof Box> & {
  src?: string
}

export const Avatar = React.memo(({ src, ...boxProps }: AvatarProps) => {
  if (!src) return null
  return <Box as="img" src={src} borderRadius="50%" size={95} {...boxProps} />
})
