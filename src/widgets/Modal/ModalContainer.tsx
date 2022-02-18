import { createPortal } from 'react-dom'
import React from 'react'
import styled from 'styled-components'

export type ModalProps = {
  className?: string
  children?: React.ReactNode
  onOverlayClick?: any
  Overlay?: React.ElementType
  open?: boolean
  container?: Element
  disablePortal?: boolean
  fixed?: boolean
}

export const ModalOverlay = styled.div<{ fixed?: boolean }>`
  box-sizing: content-box;
  position: ${(props) => (props.fixed ? 'fixed' : 'absolute')};
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(106, 106, 108, 0.8);
  overflow: auto;
  z-index: 99;
`

const ModalWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`

const Root = styled.div`
  position: relative;
  z-index: 1;
  margin: auto;
  max-width: 90%;
  max-height: 90%;
  overflow: auto;
`

const onModalClick = (event: any) => {
  event.preventDefault()
  event.stopPropagation()
}

export const ModalContainer = React.memo((props: ModalProps) => {
  const {
    className,
    children,
    onOverlayClick,
    Overlay = ModalOverlay,
    open,
    disablePortal,
    container = document.body,
    fixed = true,
  } = props

  const content = open ? (
    <Overlay fixed={fixed} onClick={onOverlayClick}>
      <ModalWrapper>
        <Root className={className} onClick={onOverlayClick ? onModalClick : undefined}>
          {children}
        </Root>
      </ModalWrapper>
    </Overlay>
  ) : null

  if (!disablePortal) {
    return createPortal(content, container)
  }

  return content
})
