import React from 'react'
import Svg from '../../../components/Svg/Svg'
import { SvgProps } from '../../../components/Svg/types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="17" height="16" viewBox="0 0 17 16" fill="none" {...props}>
      <g clipPath="url(#clip0)">
        <path
          d="M0.767959 7.71437L4.45468 9.09037L5.88167 13.6795C5.97297 13.9735 6.33239 14.0821 6.57095 13.8871L8.62598 12.2118C8.8414 12.0362 9.14822 12.0275 9.37334 12.1909L13.0799 14.8819C13.3351 15.0674 13.6967 14.9276 13.7607 14.6192L16.4759 1.55837C16.5458 1.22152 16.2148 0.940506 15.894 1.06456L0.763639 6.90141C0.390252 7.04541 0.393505 7.57405 0.767959 7.71437ZM5.65169 8.35789L12.8569 3.92019C12.9864 3.84067 13.1196 4.01576 13.0084 4.11891L7.06204 9.64637C6.85303 9.84093 6.7182 10.1013 6.68001 10.3839L6.47745 11.885C6.45062 12.0855 6.16908 12.1054 6.11377 11.9114L5.33473 9.17406C5.24551 8.86184 5.37553 8.52835 5.65169 8.35789Z"
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
