import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg height="24" width="24" viewBox="0 0 24 24" {...props}>
      <defs>
        <linearGradient
          id="Безымянный_градиент_3"
          x1="0.95"
          y1="14.05"
          x2="23.05"
          y2="13.95"
          gradientTransform="matrix(1, 0, 0, -1, 0, 26)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#292929" />
          <stop offset="1" stopColor="#242424" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="11" fill="url(#Безымянный_градиент_3)" />
      <circle
        cx="12"
        cy="12"
        r="11"
        fill="none"
        stroke="#2e2e2e"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M9.78,9.34a2.28,2.28,0,0,1,2.54-1.5,2.29,2.29,0,0,1,1.9,2.26c0,1.52-2.29,2.28-2.29,2.28v1.14"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <circle cx="12" cy="17" r="1" fill="#929292" />
    </Svg>
  )
}

export default Icon
