import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="8" height="4" viewBox="0 0 8 4" fill="none" {...props}>
      <path
        d="M3.64538 0.353603L0.853265 3.14649C0.53835 3.4615 0.761449 4 1.20687 4L6.79265 4C7.23814 4 7.46121 3.46136 7.14616 3.1464L4.35248 0.353504C4.15719 0.158269 3.84061 0.158313 3.64538 0.353603Z"
        fill="#9A9A9A"
      />
    </Svg>
  )
}

export default Icon
