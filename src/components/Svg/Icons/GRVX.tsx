import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="25" height="24" viewBox="0 0 25 24" fill="none" {...props}>
      <circle cx="12.9966" cy="11.9998" r="12" fill="url(#paint0_linear_7208:50292)"/>
      <path d="M16.4892 11.1522L12.0654 8.68381C11.4184 8.32282 10.6219 8.79053 10.6219 9.53138L10.6219 14.4681C10.6219 15.209 11.4184 15.6767 12.0654 15.3157L16.4892 12.8473C17.1527 12.4771 17.1527 11.5224 16.4892 11.1522Z" stroke="white" strokeWidth="2" fill="none"/>
      <path d="M20.7274 14.0706C20.3409 15.5128 19.5585 16.8182 18.4687 17.8389C17.3789 18.8596 16.0252 19.555 14.5607 19.8463C13.0962 20.1376 11.5795 20.0132 10.182 19.4872C8.78453 18.9613 7.56216 18.0547 6.65317 16.8701C5.74419 15.6855 5.18488 14.2701 5.03852 12.7841C4.89217 11.2982 5.16461 9.80087 5.82502 8.46169C6.48543 7.12251 7.50745 5.99488 8.77546 5.20638C10.0435 4.41789 11.5068 4 13 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </Svg>
  )
}

export default Icon
