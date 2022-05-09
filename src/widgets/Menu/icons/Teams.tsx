import React from 'react'

import Svg from '../../../components/Svg/Svg'
import { SvgProps } from '../../../components/Svg/types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        className="should-fill"
        d="M17 20C17 20.5523 17.4477 21 18 21C18.5523 21 19 20.5523 19 20H17ZM5 20C5 20.5523 5.44772 21 6 21C6.55228 21 7 20.5523 7 20H5ZM10 16H14V14H10V16ZM17 19V20H19V19H17ZM7 20V19H5V20H7ZM14 16C15.6569 16 17 17.3431 17 19H19C19 16.2386 16.7614 14 14 14V16ZM10 14C7.23858 14 5 16.2386 5 19H7C7 17.3431 8.34315 16 10 16V14Z"
        fill="#929292"
      />
      <path
        d="M9 8C9 6.34315 10.3431 5 12 5C13.6568 5 15 6.34315 15 8C15 9.65685 13.6568 11 12 11C10.3431 11 9 9.65685 9 8Z"
        stroke="#929292"
        strokeWidth="2"
        fillOpacity="0"
      />
      <path
        d="M18 7C19.1046 7 20 7.89543 20 9C20 10.1046 19.1046 11 18 11"
        stroke="#929292"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fillOpacity="0"
      />
      <path
        d="M6 7C4.89544 7 4 7.89543 4 9C4 10.1046 4.89544 11 6 11"
        stroke="#929292"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fillOpacity="0"
      />
      <path
        className="should-fill"
        d="M22 18C22 18.5523 22.4477 19 23 19C23.5523 19 24 18.5523 24 18H22ZM19 13C18.4477 13 18 13.4477 18 14C18 14.5523 18.4477 15 19 15V13ZM22 17.5V18H24V17.5H22ZM19 15H19.5V13H19V15ZM24 17.5C24 15.0147 21.9853 13 19.5 13V15C20.8807 15 22 16.1193 22 17.5H24Z"
        fill="#929292"
      />
      <path
        className="should-fill"
        d="M2 18C2 18.5523 1.55228 19 1 19C0.447715 19 0 18.5523 0 18H2ZM5 13C5.55228 13 6 13.4477 6 14C6 14.5523 5.55228 15 5 15V13ZM2 17.5V18H0V17.5H2ZM5 15H4.5V13H5V15ZM0 17.5C0 15.0147 2.01472 13 4.5 13V15C3.11929 15 2 16.1193 2 17.5H0Z"
        fill="#929292"
      />
    </Svg>
  )
}

export default Icon
