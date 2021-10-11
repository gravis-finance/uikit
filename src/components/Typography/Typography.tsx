import styled from 'styled-components'
import { variant } from 'styled-system'
import { Box } from '../Box'

export const Typography = styled(Box)<{ variant?: 'h1' | 'link' }>`
  font-family: Inter;
  font-weight: 400;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.5);

  ${variant({
    variants: {
      h1: {
        fontSize: 48,
        fontWeight: 700,
        color: 'white',
      },
      link: {
        color: 'rgba(0, 156, 225, 1)',
        fontSize: 18,
        fontWeight: 500,
        cursor: 'pointer',
        transition: 'color 0.2s',
        '&:hover': {
          color: 'rgb(95 206 255)',
        },
      },
    },
  })}
`
