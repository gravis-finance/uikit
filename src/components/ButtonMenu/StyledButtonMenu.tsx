import styled from 'styled-components'
import { Variants } from '../Button/types'

// type StyledButtonMenuProps = {
//   variant: Variants
//   theme: DefaultTheme
// }

// const getBackgroundColor = ({ theme, variant }: StyledButtonMenuProps) => {
//   return theme.colors[variant === variants.SUBTLE ? 'input' : 'tertiary']
// }

const StyledButtonMenu = styled.div<{ variant: Variants }>`
  padding: 16px;
  display: inline-flex;
  background: #262626;
  border: 1px solid #2e2e2e;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.4), -4px -4px 20px rgba(255, 255, 255, 0.05);
  border-radius: 49px;

  & > button + button,
  & > a + a {
    letter-spacing: 0;
    margin-left: 12px; // To avoid focus shadow overlap
  }
`

export default StyledButtonMenu
