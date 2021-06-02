import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="25" height="24" viewBox="0 0 25 24" fill="none" {...props}>
      <path
        opacity="0.5"
        d="M18.2072 14.646L13.2072 9.646C12.8167 9.25547 12.1835 9.25547 11.793 9.646L6.79297 14.646"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </Svg>
  )
}

export default Icon
