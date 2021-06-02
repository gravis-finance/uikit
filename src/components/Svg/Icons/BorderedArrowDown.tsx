import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M22.9025 12C22.9025 18.0828 18.0137 23 12.0001 23C5.98653 23 1.09766 18.0828 1.09766 12C1.09766 5.91716 5.98653 1 12.0001 1C18.0137 1 22.9025 5.91716 22.9025 12Z"
        stroke="#919191"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M14.9756 14.9037L11.9999 17M11.9999 7L11.9999 17M11.9999 17L9.02433 14.9037"
        stroke="#929292"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </Svg>
  )
}

export default Icon
