import React from 'react'
import Svg from '../../../components/Svg/Svg'
import { SvgProps } from '../../../components/Svg/types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <svg width="24" height="24" viewBox="0 0 512 512" {...props}>
      <circle cx="256" cy="256" r="256" fill="#f0f0f0" />
      <path d="M496.08,345a257,257,0,0,0,0-178.08H15.92a257,257,0,0,0,0,178.08L256,367.3Z" fill="#0052b4" />
      <path d="M256,512c110.07,0,203.91-69.47,240.08-167H15.92C52.09,442.53,145.93,512,256,512Z" fill="#d80027" />
    </svg>
  )
}

export default Icon
