import React from 'react'
import styled, { keyframes } from 'styled-components'

// local files
import { Popper } from '../Popper'
import useControlled from './useControlled'

export type TooltipProps = Omit<React.ComponentProps<typeof Popper>, 'anchorEl' | 'children' | 'title'> & {
  children: React.ReactElement
  title?: React.ReactChild
  interactive?: boolean
  open?: boolean
  leaveDelay?: number
  enterDelay?: number
  enterTouchDelay?: number
  leaveTouchDelay?: number
  forceOpen?: boolean
  id?: string
  disableHoverListener?: boolean
  disableTouchListener?: boolean
}

const composeEventHandler = (handler: any, eventHandler: any) => {
  return (event: any) => {
    if (eventHandler) {
      eventHandler(event)
    }
    handler(event)
  }
}

const openAnimation = keyframes`
 0% { opacity: 0 }
 100% { opacity: 1 }
`

const StyledPopper = styled(Popper)`
  z-index: 9999;
`

export const TooltipTitle = styled.div`
  white-space: pre-wrap;
  padding: 0.6rem 1rem;
  line-height: 150%;
  font-weight: 400;
  color: rgb(144, 144, 144);
  border-radius: 6px;
`

export const TooltipArrow = styled.div`
  width: 8px;
  height: 8px;
  z-index: 9998;

  ::before {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    z-index: 9998;
    border: 1px solid #3d3d3d;
    transform: rotate(45deg);
    background: #3d3d3d;
  }

  &[data-placement='top'] {
    bottom: -4px;
    ::before {
      border-top: none;
      border-left: none;
    }
  }

  &[data-placement='bottom'] {
    top: -4px;
    ::before {
      border-bottom: none;
      border-right: none;
    }
  }

  &[data-placement='left'] {
    right: -4px;
    ::before {
      border-bottom: none;
      border-left: none;
    }
  }

  &[data-placement='right'] {
    left: -4px;
    ::before {
      border-right: none;
      border-top: none;
    }
  }
`

const TooltipInner: React.FC<TooltipProps> = (props) => {
  const {
    children,
    enterDelay = 100,
    enterTouchDelay = 700,
    leaveDelay = 0,
    leaveTouchDelay = 1500,
    id,
    interactive = false,
    open: openProp,
    placement = 'auto',
    title,
    forceOpen,
    modifiers: modifiersProp,
    disableHoverListener = false,
    disableTouchListener = false,
    className,
    ...popperProps
  } = props
  const [childNode, setChildNode] = React.useState<any>()
  const [arrowRef, setArrowRef] = React.useState<HTMLDivElement | null>(null) // eslint-disable-line
  const disableInteractive = !interactive
  const ignoreNonTouchEvents = React.useRef(false)
  const closeTimer: any = React.useRef()
  const enterTimer: any = React.useRef()
  const leaveTimer: any = React.useRef()
  const touchTimer: any = React.useRef()
  const [openState, setOpenState] = useControlled({
    controlled: openProp,
    default: false,
  })
  const open = title !== '' && !!childNode && (openState || forceOpen)

  const modifiers = React.useMemo(() => {
    return [
      {
        name: 'arrow',
        enabled: Boolean(arrowRef),
        options: {
          element: arrowRef,
        },
      },
      ...(modifiersProp ?? []),
    ]
  }, [arrowRef, modifiersProp])

  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { current: isControlled } = React.useRef(openProp !== undefined)

    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useEffect(() => {
      if (
        childNode &&
        childNode.disabled &&
        !isControlled &&
        title !== '' &&
        childNode.tagName.toLowerCase() === 'button'
      ) {
        // eslint-disable-next-line
        console.error(
          [
            'You are providing a disabled `button` child to the Tooltip component.',
            'A disabled element does not fire events.',
            "Tooltip needs to listen to the child element's events to display the title.",
            '',
            'Add a simple wrapper element, such as a `span`.',
          ].join('\n')
        )
      }
    }, [title, childNode, isControlled])
  }

  const prevUserSelect = React.useRef()
  const stopTouchInteraction = React.useCallback(() => {
    if (prevUserSelect.current !== undefined) {
       (document.body.style as any).WebkitUserSelect = prevUserSelect.current
      prevUserSelect.current = undefined
    }
    clearTimeout(touchTimer.current)
  }, [])

  React.useEffect(() => {
    return () => {
      clearTimeout(closeTimer.current)
      clearTimeout(enterTimer.current)
      clearTimeout(leaveTimer.current)
      stopTouchInteraction()
    }
  }, [stopTouchInteraction])

  const handleOpen = () => {
    // The mouseover event will trigger for every nested element in the tooltip.
    // We can skip rerendering when the tooltip is already open.
    // We are using the mouseover event instead of the mouseenter event to fix a hide/show issue.
    setOpenState(true)
  }

  const handleClose = () => {
    setOpenState(false)

    clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => {
      ignoreNonTouchEvents.current = false
    }, 100)
  }

  const handleEnter = (event: any) => {
    if (ignoreNonTouchEvents.current && event.type !== 'touchstart') {
      return
    }

    // Remove the title ahead of time.
    // We don't want to wait for the next render commit.
    // We would risk displaying two tooltips at the same time (native + this one).
    if (childNode) {
      childNode.removeAttribute('title')
    }

    clearTimeout(enterTimer.current)
    clearTimeout(leaveTimer.current)
    if (enterDelay) {
      event.persist()
      enterTimer.current = setTimeout(() => {
        handleOpen()
      }, enterDelay)
    } else {
      handleOpen()
    }
  }

  const handleLeave = (event: any) => {
    clearTimeout(enterTimer.current)
    clearTimeout(leaveTimer.current)
    event.persist()
    leaveTimer.current = setTimeout(() => {
      handleClose()
    }, leaveDelay)
  }

  const handleMouseOver = handleEnter
  const handleMouseLeave = handleLeave

  const detectTouchStart = (event: any) => {
    ignoreNonTouchEvents.current = true

    const childrenProps = children.props
    if (childrenProps.onTouchStart) {
      childrenProps.onTouchStart(event)
    }
  }

  const handleTouchStart = (event: any) => {
    detectTouchStart(event)
    clearTimeout(leaveTimer.current)
    clearTimeout(closeTimer.current)
    stopTouchInteraction()
    event.persist()

    prevUserSelect.current = (document.body.style as any).WebkitUserSelect
      // Prevent iOS text selection on long-tap.
      ; (document.body.style as any).WebkitUserSelect = 'none'

    touchTimer.current = setTimeout(() => {
       (document.body.style as any).WebkitUserSelect = prevUserSelect.current
      handleEnter(event)
    }, enterTouchDelay)
  }

  const handleTouchEnd = (event: any) => {
    if (children.props.onTouchEnd) {
      children.props.onTouchEnd(event)
    }

    clearTimeout(touchTimer.current)
    clearTimeout(leaveTimer.current)
    event.persist()
    leaveTimer.current = setTimeout(() => {
      handleClose()
    }, leaveTouchDelay)
  }

  const childrenProps = {
    ...children.props,
    onTouchStart: detectTouchStart,
    'aria-label': typeof title === 'string' ? title : null,
    ref: setChildNode,
  }

  if (process.env.NODE_ENV !== 'production') {
    childrenProps['data-internal-clone-element'] = true

    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useEffect(() => {
      if (childNode && !childNode.getAttribute('data-internal-clone-element')) {
        // eslint-disable-next-line
        console.error(
          [
            'The `children` component of the Tooltip is not forwarding its props correctly.',
            'Please make sure that props are spread on the same element that the ref is applied to.',
          ].join('\n')
        )
      }
    }, [childNode])
  }

  const interactiveWrapperListeners: any = {}

  if (!disableTouchListener) {
    childrenProps.onTouchStart = handleTouchStart
    childrenProps.onTouchEnd = handleTouchEnd
  }

  if (!disableHoverListener) {
    childrenProps.onMouseOver = composeEventHandler(handleMouseOver, childrenProps.onMouseOver)
    childrenProps.onMouseLeave = composeEventHandler(handleMouseLeave, childrenProps.onMouseLeave)

    if (!disableInteractive) {
      interactiveWrapperListeners.onMouseOver = handleMouseOver
      interactiveWrapperListeners.onMouseLeave = handleMouseLeave
    }
  }

  if (process.env.NODE_ENV !== 'production') {
    if (children.props.title) {
      // eslint-disable-next-line
      console.error(
        [
          'You have provided a `title` prop to the child of <Tooltip />.',
          `Remove this title prop \`${children.props.title}\` or the Tooltip component.`,
        ].join('\n')
      )
    }
  }

  return (
    <>
      {React.cloneElement(children, childrenProps)}
      <StyledPopper
        placement={placement}
        open={open}
        id={id}
        modifiers={modifiers}
        {...interactiveWrapperListeners}
        {...popperProps}
        anchorEl={childNode}
      >
        {({ styles, attributes }) => (
          <div data-placement={attributes.popper?.['data-popper-placement']} className={className}>
            <TooltipTitle>{title}</TooltipTitle>
            <TooltipArrow
              ref={setArrowRef}
              style={styles.arrow}
              data-placement={attributes.popper?.['data-popper-placement']}
              {...attributes.arrow}
            />
          </div>
        )}
      </StyledPopper>
    </>
  )
}

TooltipInner.defaultProps = {
  enterDelay: 100,
  leaveDelay: 0,
  placement: 'auto',
}

const Tooltip = styled(TooltipInner)`
  background: rgb(61, 61, 61);
  box-shadow: none;
  border-radius: 6px;
  position: relative;
  animation: ${openAnimation} 150ms;

  &[data-placement='top'],
  &[data-placement='bottom'] {
    margin: 8px 0;
  }

  &[data-placement='left'],
  &[data-placement='right'] {
    margin: 0 8px;
  }
`

export default Tooltip
