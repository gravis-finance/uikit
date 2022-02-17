import { PROFILE_API_URL } from './constants'

export const profileApi = {
  getProfile: async ({ address }: { address?: string }) => {
    const resp = await fetch(`${PROFILE_API_URL}/users?address=${address}`)
    return resp.json()
  },
}
