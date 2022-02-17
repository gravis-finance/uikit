import React from 'react'
import { Box } from '../../components/Box'
import { useProfile, UseProfileParams } from './queries'
import { Avatar } from './Avatar'

export const ProfileAvatar = ({
  account,
  children,
  ...boxProps
}: UseProfileParams & React.ComponentProps<typeof Box>) => {
  const profile = useProfile({ account })
  if (!profile.data?.avatarUrl) return children
  return <Avatar {...boxProps} src={profile.data?.avatarUrl} />
}
