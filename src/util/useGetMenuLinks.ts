import { useMemo } from 'react'
import { useTranslation } from 'react-multi-lang'

import { urlSearchLanguageParam } from '../constants'
import { MenuEntry } from '../widgets/Menu'
import { getNetworkId, getNetworkTitles } from './getNetworkId'

const useGetMenuLinks = (menuLinks: MenuEntry[]): MenuEntry[] => {
  const t = useTranslation()
  const chainId = getNetworkId()
  const onlyBscLabels = useMemo(
    () => [
      t('buyNFT'),
      t('sellNFT'),
      t('sendNFT'),
      t('Activity'),
      t('mainMenu.NFTFarming')
    ],
    [t]
  )

  return useMemo(
    () =>
      [...menuLinks].map((link) => {
        const newLink = { ...link }
        newLink.data = newLink.label
        newLink.label = t(newLink.label)
        newLink.href = `${
          newLink.href
        }?network=${chainId}`
        if (newLink.items) {
          newLink.items = newLink.items.map((item) => {
            const newItem = { ...item }
            newItem.label = t(newItem.label)
            if (!onlyBscLabels.includes(newItem.label)) {
              if (newItem.label === t('mainMenu.analytics.analytics'))
                newItem.href = `${
                  newItem.href
                }?network=${getNetworkTitles()?.toLowerCase()}}`
              else
                newItem.href = `${
                  newItem.href
                }?network=${chainId}`
            }
            return newItem
          })
        }
        return newLink
      }),
    [chainId, menuLinks, onlyBscLabels, t]
  )
}

export default useGetMenuLinks
