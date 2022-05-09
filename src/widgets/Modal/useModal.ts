import {
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useEffect
} from 'react'

import { Context } from './ModalContext'
import { Handler } from './types'

const useModal = (
  modal: React.ReactNode,
  closeOnOverlayClick = false
): [Handler, Handler, Dispatch<SetStateAction<Record<string, any>>>] => {
  const { onPresent, onDismiss, setCloseOnOverlayClick, updateProps } =
    useContext(Context)
  const onPresentCallback = useCallback(() => {
    onPresent(modal)
  }, [modal, onPresent])

  useEffect(() => {
    setCloseOnOverlayClick(closeOnOverlayClick)
  }, [closeOnOverlayClick, setCloseOnOverlayClick])

  return [onPresentCallback, onDismiss, updateProps]
}

export default useModal
