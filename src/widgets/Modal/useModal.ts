import {
  useCallback,
  useContext,
  useEffect,
  Dispatch,
  SetStateAction
} from 'react'
import { Context } from './ModalContext'
import { Handler } from './types'

const useModal = (modal: React.ReactNode, closeOnOverlayClick = false): [Handler, Handler, Dispatch<SetStateAction<{}>>] => {
  const { onPresent, onDismiss, setCloseOnOverlayClick, updateProps } = useContext(Context)
  const onPresentCallback = useCallback(() => {
    onPresent(modal)
  }, [modal, onPresent])

  useEffect(() => {
    setCloseOnOverlayClick(closeOnOverlayClick)
  }, [closeOnOverlayClick, setCloseOnOverlayClick])

  return [onPresentCallback, onDismiss, updateProps]
}

export default useModal
