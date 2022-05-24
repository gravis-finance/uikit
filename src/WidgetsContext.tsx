import { ChainId } from '@gravis.finance/sdk'
import React, { createContext, FC, useContext, useEffect } from 'react'
import { setDefaultLanguage, setTranslations } from 'react-multi-lang'

import { NETWORK_NAMES } from './config/networks'
import cn from './locales/cn.json'
import en from './locales/en.json'
import es from './locales/es.json'
import jp from './locales/jp.json'
import ru from './locales/ru.json'
import vie from './locales/vie.json'
import { Optional } from './types'

type ContextValue = {
  chainId: ChainId | undefined
  networks: NETWORK_NAMES[]
}

const defaultValue = {
  chainId: undefined,
  networks: [NETWORK_NAMES.BINANCE, NETWORK_NAMES.POLYGON]
}

const WidgetsContext = createContext<ContextValue>(defaultValue)

WidgetsContext.displayName = 'WidgetsContext'

export const WidgetsProvider: FC<Optional<ContextValue, 'networks'>> = ({
  children,
  ...otherProps
}) => {
  useEffect(() => {
    setTranslations({ en, jp, cn, ru, es, vie })
    setDefaultLanguage('en')
  }, [])

  return (
    <WidgetsContext.Provider value={{ ...defaultValue, ...otherProps }}>
      {children}
    </WidgetsContext.Provider>
  )
}

export const useWidgetsContext = () => useContext<ContextValue>(WidgetsContext)
