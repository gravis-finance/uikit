import React from 'react'
import Svg from '../../../components/Svg/Svg'
import { SvgProps } from '../../../components/Svg/types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <svg id="Capa_1" data-name="Capa 1" viewBox="0 0 473.68 473.68" {...props}>
      <path
        d="M324.76,236.84H473.68C473.68,106,367.64,0,236.84,0,302.24,0,324.76,118.42,324.76,236.84Z"
        fill="#bb2029"
      />
      <path d="M0,236.84H334.93C334.94,118.42,302.24,0,236.84,0,106,0,0,106,0,236.84Z" fill="#cd2029" />
      <path d="M319.77,236.84c0,118.42-17.53,236.84-82.94,236.84,130.81,0,236.85-106,236.85-236.84Z" fill="#e4e4e4" />
      <path
        d="M334.93,236.84H0c0,130.8,106,236.84,236.84,236.84C302.24,473.68,334.93,355.26,334.93,236.84Z"
        fill="#f3f4f5"
      />
    </svg>
  )
}

export default Icon
