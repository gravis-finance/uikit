import React from 'react'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M18 11H6C4.89543 11 4 11.8954 4 13V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V13C20 11.8954 19.1046 11 18 11Z" stroke="#676767" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 10.9999V6.99991C6.99876 5.75996 7.45828 4.56378 8.28938 3.64358C9.12047 2.72338 10.2638 2.14481 11.4975 2.0202C12.7312 1.89558 13.9671 2.23381 14.9655 2.96922C15.9638 3.70463 16.6533 4.78476 16.9 5.99991" stroke="#676767" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default Icon
