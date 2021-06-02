import React from 'react'
import Svg from '../../../components/Svg/Svg'
import { SvgProps } from '../../../components/Svg/types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="46" height="134" viewBox="0 0 46 134" fill="none" {...props}>
      <path
        d="M25.3662 41.344C28.02 38.5553 29.5 34.8531 29.5 31.0035V0H45.5V134H29.5V104.996C29.5 101.147 28.02 97.4447 25.3662 94.656L13.1201 81.7873C5.77123 74.0647 5.77123 61.9353 13.1201 54.2127L25.3662 41.344Z"
        fill="#1C1C1C"
      />
      <path
        d="M25 73L19.332 67.7434C18.8893 67.3328 18.8893 66.6672 19.332 66.2566L25 61"
        stroke="#404040"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </Svg>
  )
}

export default Icon
