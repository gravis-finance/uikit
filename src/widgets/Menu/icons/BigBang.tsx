import React from 'react'
import Svg from '../../../components/Svg/Svg'
import { SvgProps } from '../../../components/Svg/types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <rect
        x="12"
        y="2"
        width="14.1422"
        height="14.1422"
        rx="1"
        transform="rotate(45 12 2)"
        stroke="#929292"
        strokeWidth="2"
        fill="none"
      />
      <rect x="10" y="10" width="4" height="4" rx="1" stroke="#929292" strokeWidth="2" fill="none" />
    </Svg>
  )
}

export default Icon
