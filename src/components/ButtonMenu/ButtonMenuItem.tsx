import React from 'react'
import Button from '../Button/Button'
import { sizes, variants } from '../Button/types'
import { ButtonMenuItemProps } from './types'

// type InactiveButtonProps = {
//   colorkey: 'primary' | 'textSubtle'
// } & ButtonMenuItemProps

// const InactiveButton = styled(Button)<InactiveButtonProps>`
//   color: ${({ theme, colorkey }) => theme.colors[colorkey]};

//   &:hover:not(:disabled):not(:active) {
//     background-color: transparent;
//   }
// `

const ButtonMenuItem: React.FC<ButtonMenuItemProps> = ({
  isactive = false,
  size = sizes.MD,
  variant = variants.PRIMARY,
  as,
  ...props
}) => {
  return (
    <Button
      as={as}
      size={size}
      variant={variant}
      isactive={isactive}
      style={!isactive ? { color: '#909090' } : {}}
      {...props}
    />
  )
}

export default ButtonMenuItem
