import React from 'react'
import Svg from '../../../components/Svg/Svg'
import { SvgProps } from '../../../components/Svg/types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M4 10C4 9.37049 4.29639 8.77771 4.8 8.4L11.1 3.675C11.6333 3.275 12.3667 3.275 12.9 3.675L19.2 8.4C19.7036 8.77771 20 9.37049 20 10V21C20 21.5523 19.5523 22 19 22H15.5C14.9477 22 14.5 21.5523 14.5 21V16C14.5 15.4477 14.0523 15 13.5 15H10.5C9.94772 15 9.5 15.4477 9.5 16V21C9.5 21.5523 9.05228 22 8.5 22H5C4.44772 22 4 21.5523 4 21V10Z"
        stroke="#929292"
        strokeWidth="2"
        fill="none"
      />
    </Svg>
  )
}

export default Icon
