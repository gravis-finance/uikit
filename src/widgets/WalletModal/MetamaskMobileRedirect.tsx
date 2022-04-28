import React from 'react'

export const MetamaskMobileRedirect = ({ onDismiss }: { onDismiss: any }) => {
  React.useEffect(() => {
    window
      .open(
        `https://metamask.app.link/dapp/${window.location.host}${window.location.pathname}${window.location.search}`,
        '_blank'
      )
      ?.focus()
    if (onDismiss) onDismiss()
  }, []) // eslint-disable-line

  return null
}
