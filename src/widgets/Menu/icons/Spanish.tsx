import React from 'react'

import Svg from '../../../components/Svg/Svg'
import { SvgProps } from '../../../components/Svg/types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={25}
      height={25}
      {...props}
    >
      <path
        d="M0,256a255.44,255.44,0,0,0,15.92,89L256,367.3,496.08,345a257,257,0,0,0,0-178.08L256,144.7,15.92,167A255.44,255.44,0,0,0,0,256Z"
        fill="#ffda44"
      />
      <path
        d="M496.08,167C459.91,69.47,366.07,0,256,0S52.09,69.47,15.92,167Z"
        fill="#d80027"
      />
      <path
        d="M15.92,345c36.17,97.49,130,167,240.08,167s203.91-69.47,240.08-167Z"
        fill="#d80027"
      />
    </Svg>
  )
}

export default Icon
