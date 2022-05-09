import styled from 'styled-components'

import { OverlayProps } from './types'

const Overlay = styled.div.attrs({ role: 'presentation' })<OverlayProps>`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(106, 106, 108, 0.8);
  transition: opacity 0.4s;
  opacity: ${({ show }) => (show ? 1 : 0)};
  z-index: ${({ zIndex }) => zIndex};
  pointer-events: ${({ show }) => (show ? 'initial' : 'none')};
`

Overlay.defaultProps = {
  show: false,
  zIndex: 10,
}

export default Overlay
