import React from 'react'
import { usePopper } from 'react-popper'
import { createPortal } from 'react-dom'
import { Options, VirtualElement } from '@popperjs/core'

type Props = {
  container?: Element
  disablePortal?: boolean
  open?: boolean
  placement?: Options['placement']
  anchorEl?: null | VirtualElement | Element
  modifiers?: Options['modifiers']
  children?: React.ReactNode | ((props: ReturnType<typeof usePopper>) => React.ReactNode)
}

const Popper: React.FC<Props> = (props: Props) => {
  const {
    anchorEl,
    placement,
    disablePortal = false,
    container = document.body,
    open,
    children,
    modifiers,
    ...restProps
  } = props
  const [popperElement, setPopperElement] = React.useState<any>()
  const popper = usePopper(anchorEl, popperElement, { placement, modifiers })
  const { styles, attributes } = popper

  if (!open) return null

  const popperContent = (
    <div ref={setPopperElement} role="tooltip" style={styles.popper} {...attributes.popper} {...restProps}>
      {typeof children === 'function' ? children(popper) : children}
    </div>
  )

  return disablePortal ? popperContent : createPortal(popperContent, container)
}

export default Popper
