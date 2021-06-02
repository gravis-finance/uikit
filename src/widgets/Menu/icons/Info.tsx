import React from 'react'
import Svg from '../../../components/Svg/Svg'
import { SvgProps } from '../../../components/Svg/types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M3 3V19C3 20.1046 3.89543 21 5 21H22"
        stroke="#929292"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M7 11C7 9.89543 7.89543 9 9 9V9C10.1046 9 11 9.89543 11 11V21H7V11Z"
        stroke="#929292"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M15 16C15 14.8954 15.8954 14 17 14V14C18.1046 14 19 14.8954 19 16V21H15V16Z"
        stroke="#929292"
        strokeWidth="2"
        fill="none"
      />
    </Svg>
  )
}

export default Icon
