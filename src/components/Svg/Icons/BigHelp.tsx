import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 25" fill="none" {...props}>
      <circle
        cx="12"
        cy="12.9976"
        r="11"
        stroke="#929292"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M9.77881 10.3328C9.95793 9.82364 10.3115 9.39427 10.7768 9.12078C11.2422 8.84729 11.7893 8.74732 12.3213 8.83857C12.8533 8.92982 13.3359 9.20641 13.6835 9.61935C14.0311 10.0323 14.2213 10.5549 14.2205 11.0947C14.2205 12.6184 11.9349 13.3803 11.9349 13.3803V14.5197"
        stroke="#929292"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="12" cy="17.9976" r="1" fill="#929292" />
    </Svg>
  )
}

export default Icon
