import React from 'react'

import OpenNewIcon from '../Svg/Icons/OpenNew'
import Link from './Link'
import { LinkProps } from './types'

const LinkExternal: React.FC<LinkProps> = ({ children, ...props }) => {
  return (
    <Link external {...props}>
      {children}
      <OpenNewIcon color="primary" ml="8px" />
    </Link>
  )
}

export default LinkExternal
