import styled from 'styled-components'

import Button from '../../components/Button/Button'

interface MenuButtonProps {
  mobile?: boolean
}

const MenuButton = styled(Button)`
  color: ${({ theme }) => theme.colors.text};
  padding: 0 8px;
  border-radius: 8px;
  -webkit-tap-highlight-color: transparent;
  display: ${(props: MenuButtonProps) => (props.mobile ? '' : 'none')};

  ${({ theme }) => theme.mediaQueries.nav} {
    display: ${(props: MenuButtonProps) => (props.mobile ? 'none' : 'block')};
  }

  &:hover:not(:disabled):not(.button--disabled):not(:active) {
    background: none;
  }

  @media screen and (max-width: 968px) {
    position: fixed;
    top: 30px;
    right: 10px;
    z-index: 20;
  }
`
MenuButton.defaultProps = {
  variant: 'text',
  size: 'sm',
}

export default MenuButton
