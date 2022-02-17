import React from 'react'
import styled from 'styled-components'
import { ButtonBase } from '../../components/Button'
import { EditIcon } from '../../components/Svg'
import { getUrl } from '../../util/getUrl'

const StyledButton = styled(ButtonBase)`
  transition: color 0.3s;
  &:hover {
    color: #009ce1;
  }
`

export const EditProfileLink = React.memo((props: React.ComponentProps<typeof ButtonBase>) => {
  return (
    <StyledButton
      as="a"
      href={getUrl(process.env.REACT_APP_GMART_URL, 'profile/my/edit')}
      p="1rem"
      m="-1rem"
      {...props}
    >
      <EditIcon color="currentColor" />
    </StyledButton>
  )
})
