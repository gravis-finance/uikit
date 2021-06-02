import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="94" height="114" viewBox="0 0 94 114" fill="none" {...props}>
      <g filter="url(#filter0_dd)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25.166 16.5C25.1272 16.5 25.0885 16.5011 25.0502 16.5033H18.5C17.3954 16.5033 16.5 17.3987 16.5 18.5033C16.5 19.6079 17.3954 20.5033 18.5 20.5033H23.166V35.1667C23.166 41.4435 25.6595 47.4632 30.0978 51.9015C32.1955 53.9992 34.6465 55.6625 37.3108 56.8334C34.6465 58.0042 32.1955 59.6675 30.0978 61.7652C25.6595 66.2035 23.166 72.2233 23.166 78.5V81.8367V93.17H18.5C17.3954 93.17 16.5 94.0655 16.5 95.17C16.5 96.2746 17.3954 97.17 18.5 97.17H75.1667C76.2712 97.17 77.1667 96.2746 77.1667 95.17C77.1667 94.0655 76.2712 93.17 75.1667 93.17H70.4993V81.8367V78.5C70.4993 72.2233 68.0059 66.2035 63.5675 61.7652C61.4698 59.6675 59.0189 58.0042 56.3545 56.8334C59.0189 55.6625 61.4698 53.9992 63.5675 51.9015C68.0059 47.4632 70.4993 41.4435 70.4993 35.1667V20.5033H75.1667C76.2712 20.5033 77.1667 19.6079 77.1667 18.5033C77.1667 17.3987 76.2712 16.5033 75.1667 16.5033H68.6151C68.5768 16.5011 68.5382 16.5 68.4993 16.5H25.166ZM27.166 93.1667V83.8367H36.8327C37.3631 83.8367 37.8718 83.626 38.2469 83.2509L46.8327 74.6651L55.4185 83.2509C55.7935 83.626 56.3022 83.8367 56.8327 83.8367H66.4993V93.1667H27.166ZM57.6611 79.8367H66.4993V78.5C66.4993 73.2841 64.4273 68.2818 60.7391 64.5936C57.0509 60.9054 52.0486 58.8334 46.8327 58.8334C41.6168 58.8334 36.6145 60.9054 32.9262 64.5936C29.238 68.2818 27.166 73.2841 27.166 78.5V79.8367H36.0043L45.4185 70.4225C45.7935 70.0474 46.3022 69.8367 46.8327 69.8367C47.3631 69.8367 47.8718 70.0474 48.2469 70.4225L57.6611 79.8367ZM27.166 35.1667V20.5033H66.4993V35.1667C66.4993 39.2531 65.2276 43.2083 62.9032 46.5033H30.7622C28.4378 43.2083 27.166 39.2531 27.166 35.1667ZM34.5214 50.5033C37.9959 53.2926 42.3348 54.8333 46.8327 54.8333C51.3305 54.8333 55.6695 53.2926 59.144 50.5033H34.5214Z"
          fill="#009CE1"
        />
      </g>
      <defs>
        <filter
          id="filter0_dd"
          x="0.5"
          y="0.5"
          width="92.6667"
          height="112.67"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dx="-4" dy="-4" />
          <feGaussianBlur stdDeviation="6" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dx="4" dy="4" />
          <feGaussianBlur stdDeviation="6" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
          <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape" />
        </filter>
      </defs>
    </Svg>
  )
}

export default Icon
