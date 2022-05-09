import { ChainId } from '@gravis.finance/sdk'
import React, { createContext, FC, useContext } from 'react'

import { NETWORK_NAMES } from './config/networks'
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
  return (
    <WidgetsContext.Provider value={{ ...defaultValue, ...otherProps }}>
      {children}
    </WidgetsContext.Provider>
  )
}

export const useWidgetsContext = () => useContext<ContextValue>(WidgetsContext)
