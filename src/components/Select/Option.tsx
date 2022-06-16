import React from 'react'
import styled from 'styled-components'

import { ButtonBase } from '../Button'

export type OptionsProps = React.ComponentProps<typeof ButtonBase> & {
  value?: number | string
  selected?: boolean
}

export const UnstyledOption: React.FC<OptionsProps> = ({
  selected, // eslint-disable-line @typescript-eslint/no-unused-vars
  value, // eslint-disable-line @typescript-eslint/no-unused-vars
  ...restProps
}) => <ButtonBase {...restProps} />

export const Option = styled(UnstyledOption)`
  display: block;
  width: 100%;
  text-align: left;
`
