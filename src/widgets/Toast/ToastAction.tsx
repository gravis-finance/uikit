import React from 'react'
import { Link } from 'react-router-dom'

import { Button } from '../../components/Button'
import getExternalLinkProps from '../../util/getExternalLinkProps'
import { ToastAction as Action } from './types'

interface ToastActionProps {
  action: Action
}

const ToastAction: React.FC<ToastActionProps> = ({ action }) => {
  if (action.url.startsWith('http')) {
    return (
      <Button
        data-id="toast-action-button"
        as="a"
        size="sm"
        href={action.url}
        {...getExternalLinkProps()}
      >
        {action.text}
      </Button>
    )
  }

  return (
    <Button data-id="toast-action-button" as={Link} size="sm" to={action.url}>
      {action.text}
    </Button>
  )
}

export default ToastAction
