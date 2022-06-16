import styled from 'styled-components'

import { Option } from './Option'
import { Options, SelectBase } from './SelectBase'

const StyledOptions = styled(Options)`
  background: linear-gradient(90.28deg, #292929 0%, #242424 100%);
  border: 1px solid #2e2e2e;
  border-radius: 0 0 6px 6px;

  ${Option} {
    padding: 16px;
    text-align: left;
    color: white;
    background: #292929;

    &:hover {
      background: #242424;
    }
  }
`

export const Select = styled(SelectBase)`
  display: inline-flex;
  position: relative;
  height: fit-content;
  box-sizing: border-box;
  background: linear-gradient(90.28deg, #292929 0%, #242424 100%), #262626;
  border: 1px solid #2e2e2e;
  box-shadow: 4px 4px 12px rgb(0 0 0 / 40%),
    -4px -4px 12px rgb(255 255 255 / 5%);
  border-radius: 55px;
  transition: background-color 200ms ease-in-out, color 200ms ease-in-out,
    border-radius 100ms ease-in-out;
  color: #929292;
  font-size: 14px;

  &:hover {
    background: linear-gradient(90.28deg, #242424 0%, #202020 100%),
      linear-gradient(90.28deg, #292929 0%, #242424 100%), #303030;
    color: white;
  }

  &[aria-expanded='true'] {
    border-radius: 6px 6px 0 0;
    background: linear-gradient(90.28deg, #242424 0%, #202020 100%),
      linear-gradient(90.28deg, #292929 0%, #242424 100%), #303030;
    color: white;
  }
`
Select.defaultProps = {
  OptionsComponent: StyledOptions
}
