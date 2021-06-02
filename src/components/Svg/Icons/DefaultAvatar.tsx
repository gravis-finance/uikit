import React from 'react'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" {...props}>
      <rect width="80" height="80" rx="40" fill="#0074B2" />
    </svg>
  )
}

export default Icon
