import React from 'react'

import Svg from '../../../components/Svg/Svg'
import { SvgProps } from '../../../components/Svg/types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 34 34" fill="none" {...props}>
      <circle
        xmlns="http://www.w3.org/2000/svg"
        cx="17"
        cy="17"
        r="17"
        fill="url(#paint0_linear)"
      />
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M29.1702 17.2071H26.1733C26.1733 11.0997 21.205 6.14893 15.0758 6.14893C9.02255 6.14893 4.10117 10.9785 3.98072 16.9813C3.85611 23.1863 9.69824 28.5745 15.9261 28.5745H16.7095C22.2001 28.5745 29.5592 24.2916 30.709 19.0732C30.9213 18.1113 30.1588 17.2071 29.1702 17.2071ZM10.6223 17.4792C10.6223 18.2959 9.95192 18.9639 9.13229 18.9639C8.31265 18.9639 7.64231 18.2956 7.64231 17.4792V15.0773C7.64231 14.2606 8.31265 13.5926 9.13229 13.5926C9.95192 13.5926 10.6223 14.2606 10.6223 15.0773V17.4792ZM15.7961 17.4792C15.7961 18.2959 15.1258 18.9639 14.3062 18.9639C13.4865 18.9639 12.8162 18.2956 12.8162 17.4792V15.0773C12.8162 14.2606 13.4868 13.5926 14.3062 13.5926C15.1258 13.5926 15.7961 14.2606 15.7961 15.0773V17.4792Z"
        fill="url(#paint1_linear)"
      />
      <defs xmlns="http://www.w3.org/2000/svg">
        <linearGradient
          id="paint0_linear"
          x1="17"
          y1="0"
          x2="17"
          y2="34"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#534BB1" />
          <stop offset="1" stopColor="#551BF9" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="17.3617"
          y1="6.14893"
          x2="17.3617"
          y2="28.5745"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0.82" />
        </linearGradient>
      </defs>
    </Svg>
  )
}

export default Icon
