import React from 'react'
import styled from 'styled-components'
import { ButtonBase } from '../Button'

export type OptionsProps = React.ComponentProps<typeof ButtonBase> & { value?: number | string; selected?: boolean }

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const UnstyledOption: React.FC<OptionsProps> = ({ selected, value, ...restProps }) => <ButtonBase {...restProps} />

export const Option = styled(UnstyledOption)`
  padding: 16px;
  display: block;
  width: 100%;
  text-align: left;
  color: white;
  background: #292929;

  &:hover {
    background: #242424;
  }
`
