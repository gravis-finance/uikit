import React, { createContext, useEffect, useState } from 'react'
import styled from 'styled-components'

import Overlay from '../../components/Overlay/Overlay'
import { Handler } from './types'

interface ModalsContext {
  onPresent: (node: React.ReactNode, key?: string) => void
  onDismiss: Handler
  setCloseOnOverlayClick: React.Dispatch<React.SetStateAction<boolean>>
  updateProps: React.Dispatch<React.SetStateAction<Record<string, any>>>
}

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndices.modal - 1};
`

export const Context = createContext<ModalsContext>({
  onPresent: () => null,
  onDismiss: () => null,
  setCloseOnOverlayClick: () => true,
  updateProps: () => null
})

const ModalProvider: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [modalNode, setModalNode] = useState<React.ReactNode>()
  const [closeOnOverlayClick, setCloseOnOverlayClick] = useState(true)
  const [props, setProps] = useState({})

  const handlePresent = React.useCallback((node: React.ReactNode) => {
    setModalNode(node)
    setIsOpen(true)
  }, [])

  const handleDismiss = React.useCallback(() => {
    setModalNode(undefined)
    setIsOpen(false)
  }, [])

  const handleOverlayDismiss = () => {
    if (closeOnOverlayClick) {
      handleDismiss()
    }
  }

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'auto'
  }, [isOpen])

  return (
    <Context.Provider
      value={{
        onPresent: handlePresent,
        onDismiss: handleDismiss,
        setCloseOnOverlayClick,
        updateProps: setProps
      }}
    >
      {isOpen && (
        <ModalWrapper>
          <Overlay show onClick={handleOverlayDismiss} />
          {React.isValidElement(modalNode) &&
            React.cloneElement(modalNode, {
              onDismiss: handleDismiss,
              ...props
            })}
        </ModalWrapper>
      )}
      {children}
    </Context.Provider>
  )
}

export default ModalProvider
