import React from 'react'
import { Box } from '../../components/Box'
import { useProfile, UseProfileParams } from './queries'

export const ProfileName = React.memo(
  ({ account, children, ...boxProps }: UseProfileParams & React.ComponentProps<typeof Box>) => {
    const profile = useProfile({ account })
    return <Box {...boxProps}>{!profile.isLoading && !!profile.data?.nickname ? profile.data?.nickname : children}</Box>
  }
)
