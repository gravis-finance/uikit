import React from 'react'
import { usePagination } from 'cb-datatable'
import styled from 'styled-components'
import { ButtonBase } from '../Button'
import { Box } from '../Box'

export type PagerProps = {
  page?: number
  onChange?: (value: number) => void
  dataSize?: number
  rowsPerPage?: number
} & React.ComponentProps<typeof Box>

const Button = styled(ButtonBase)<{ $selected?: boolean }>`
  box-shadow: -4px -4px 12px 0px rgba(255, 255, 255, 0.05), 4px 4px 12px 0px rgba(0, 0, 0, 0.4);
  border-radius: 50%;
  background-image: linear-gradient(90.28deg, #292929 0%, #242424 100%);
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 8px;
  min-width: 40px;
  min-height: 40px;
  color: #d3d3d3;

  &:active {
    background: linear-gradient(90.28deg, #242424 0%, #1f1f1f 100%);
    box-shadow: inset 0px -1px 0px rgba(129, 129, 129, 0.15), inset 0px 4px 25px rgba(0, 0, 0, 0.25);
    border: none;
  }

  ${(props) =>
    props.$selected &&
    `
    background: linear-gradient(90.28deg, #242424 0%, #1f1f1f 100%);
    box-shadow: inset 0px -1px 0px rgba(129, 129, 129, 0.15), inset 0px 4px 25px rgba(0, 0, 0, 0.25);
    border: none;
  `}
`

const Root = styled(Box)`
  text-align: center;
  color: #d3d3d3;

  > * {
    margin-left: 0.5rem;
  }
`

export const Pager: React.FC<PagerProps> = ({ page: pageProp, onChange, dataSize, rowsPerPage, ...restProps }) => {
  const { hasPreviousPage, setPage, numberOfPages, hasNextPage, range, page } = usePagination({
    page: pageProp,
    onChange,
    dataSize,
    rowsPerPage,
  })

  if (numberOfPages === 0) return null

  return (
    <Root {...restProps}>
      {hasPreviousPage && (
        <Button type="button" onClick={() => setPage(page - 1)}>
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.64648 12.7072L1.64648 7.70718C1.25596 7.31666 1.25596 6.68349 1.64648 6.29297L6.64648 1.29297"
              stroke="#929292"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </Button>
      )}
      {range().map((pageNumber, index) => {
        return pageNumber === '.' ? (
          <span key={`hyphen${index}`}>&hellip;</span>
        ) : (
          <Button
            onClick={() => setPage(+pageNumber)}
            disabled={page === pageNumber}
            $selected={page === pageNumber}
            key={pageNumber}
          >
            {pageNumber}
          </Button>
        )
      })}
      {hasNextPage && (
        <Button type="button" onClick={() => setPage(page + 1)}>
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.35358 12.7072L6.35358 7.70718C6.7441 7.31666 6.7441 6.68349 6.35358 6.29297L1.35358 1.29297"
              stroke="#929292"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </Button>
      )}
    </Root>
  )
}
