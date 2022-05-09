import { QueryFunctionContext,useQuery } from 'react-query'

import { profileApi } from './api'
import { PROFILE_API_URL,PROFILE_IMG_URL } from './constants'

export type UseProfileParams = {
  account?: string | null
}

export const ProfileQueryKey = ({ address }: { address?: string }): [string, { address?: string }] => [
  'profile',
  { address },
]

const fetch = async ({ queryKey }: QueryFunctionContext<[string, { address?: string }]>) => {
  const { address } = queryKey?.[1]
  if (!address) return null
  const { data } = (await profileApi.getProfile({ address })) ?? {}
  if (data?.length) {
    const [profile] = data
    return {
      nickname: profile.nickname,
      avatar: profile.avatar,
      avatarUrl: `${PROFILE_IMG_URL}/${profile.avatar.collection}/${profile.avatar.tokenId}.png`,
    }
  }
  return null
}

export const useProfile = ({ account }: UseProfileParams) => {
  return useQuery(ProfileQueryKey({ address: account?.toLowerCase() }), fetch, {
    enabled: !!account && !!PROFILE_API_URL,
  })
}
