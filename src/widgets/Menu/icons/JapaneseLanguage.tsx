import React from 'react'

import Svg from '../../../components/Svg/Svg'
import { SvgProps } from '../../../components/Svg/types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="#F0F0F0"
      />
      <path
        d="M11.9996 17.2175C14.8811 17.2175 17.217 14.8816 17.217 12.0001C17.217 9.11861 14.8811 6.78271 11.9996 6.78271C9.11812 6.78271 6.78223 9.11861 6.78223 12.0001C6.78223 14.8816 9.11812 17.2175 11.9996 17.2175Z"
        fill="#D80027"
      />
    </Svg>
  )
}

export default Icon
