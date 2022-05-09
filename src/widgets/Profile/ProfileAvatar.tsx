import React from 'react'

import { Box } from '../../components/Box'
import { Avatar } from './Avatar'
import { useProfile, UseProfileParams } from './queries'

export const ProfileAvatar = React.memo(
  ({ account, children, ...boxProps }: UseProfileParams & React.ComponentProps<typeof Box>) => {
    const profile = useProfile({ account })
    if (!profile.data?.avatarUrl) return children ?? null
    return <Avatar {...boxProps} src={profile.data?.avatarUrl} />
  }
)
