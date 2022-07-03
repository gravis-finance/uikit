import { useEffect } from 'react'

export const useScrollLock = ({
  open,
  disableScrollLock
}: {
  open?: boolean
  disableScrollLock?: boolean
}) => {
  useEffect(() => {
    let updated = false
    if (
      open &&
      !disableScrollLock &&
      document.body.style.overflow !== 'hidden'
    ) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth

      document.body.style.overflow = 'hidden'
      if (scrollbarWidth) {
        document.body.style.paddingRight = `${scrollbarWidth}px`
      }
      updated = true
    }

    return () => {
      if (updated) {
        document.body.style.overflow = ''
        document.body.style.paddingRight = ''
      }
    }
  }, [open, disableScrollLock])
}
