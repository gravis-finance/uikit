import React from 'react'
import Svg from '../../../components/Svg/Svg'
import { SvgProps } from '../../../components/Svg/types'

const Icon: React.FC<SvgProps> = () => {
  return (
    <Svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0)">
        <path
          d="M15.2087 3.15541L16.4854 1.93408V1.66675H12.0627L8.91068 9.51208L5.32469 1.66675H0.687352V1.93408L2.17868 3.72941C2.32402 3.86208 2.40002 4.05608 2.38068 4.25141V11.3067C2.42668 11.5607 2.34402 11.8221 2.16535 12.0067L0.485352 14.0427V14.3067H5.24868V14.0394L3.56869 12.0067C3.38668 11.8214 3.30068 11.5647 3.33735 11.3067V5.20408L7.51869 14.3101H8.00469L11.6 5.20408V12.4581C11.6 12.6494 11.6 12.6887 11.4747 12.8141L10.1814 14.0654V14.3334H16.456V14.0661L15.2094 12.8454C15.1 12.7627 15.0434 12.6241 15.0667 12.4894V3.51141C15.0434 3.37608 15.0994 3.23741 15.2087 3.15541Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="16" height="16" fill="white" transform="translate(0.485352)" />
        </clipPath>
      </defs>
    </Svg>
  )
}

export default Icon
