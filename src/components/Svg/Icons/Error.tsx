import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="48" height="48" viewBox="0 0 48 48" fill="none" {...props}>
      <rect x="1" y="1" width="46" height="46" rx="23" fill="#FF4D00" fillOpacity="0.1" />
      <path
        d="M18.3438 29.6569L29.6575 18.3431M18.3438 18.3431L29.6575 29.6568"
        stroke="#FF4D00"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <rect x="1" y="1" width="46" height="46" rx="23" stroke="#FF4D00" strokeWidth="2" fill="none" />
    </Svg>
  )
}

export default Icon
