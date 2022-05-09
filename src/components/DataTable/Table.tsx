import 'cb-datatable/styles/core.css'

import {
  HeaderCell as CbHeaderCell,
  SortBy,
  Table as CbTable,
  TableCell as CbTableCell,
  TableProps as CbTableProps,
  TableRow as CbTableRow,
  useSortBy,
} from 'cb-datatable'
import React from 'react'
import styled from 'styled-components'
import { layout, LayoutProps, padding, PaddingProps,system, typography, TypographyProps } from 'styled-system'

import { SortIcon } from './SortIcon'

const textTransform = system({
  textTransform: true,
})

const table = system({
  tableLayout: true,
})

export type TableProps = CbTableProps & {
  fullWidth?: boolean
  defaultSortBy?: SortBy[]
  onSort?: (value: Array<SortBy>) => void
  HeaderCellComponent?: React.ElementType
  CellComponent?: React.ElementType
  RowComponent?: React.ElementType
  tableLayout?: 'auto' | 'fixed'
}

// add ability to use layout,background,padding,typography props inside the Column component
export const TableCell = styled(CbTableCell)<
  LayoutProps & TypographyProps & PaddingProps & { textTransform?: 'capitalize' | 'uppercase' | 'lowercase' | 'none' }
>`
  padding: 21px 28px;
  font-family: Inter;
  font-size: 18px;
  font-weight: 500;
  color: white;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  vertical-align: middle;
  ${layout}
  ${typography}
  ${textTransform}
  ${padding}
`

export const HeaderCell = styled(CbHeaderCell)`
  padding: 21px 28px;
  text-align: left;
  background-color: rgba(53, 53, 53, 1);
  vertical-align: middle;

  &:first-child {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }

  &:last-child {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  &.cb-HeaderCell_sortable {
    cursor: pointer;
  }

  .cb-HeaderCellContent {
    color: white;
    font-family: Roboto;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 12px;
    display: flex;
    align-items: center;

    &__label {
      width: 100%;
    }

    &__icon {
      display: inline-flex;
      margin-left: 6px;
    }
  }
`

export const TableRow = styled(CbTableRow)`
  &:last-child {
    ${TableCell} {
      border-bottom: none;
    }
  }
`

export const UnstyledTable: React.FC<TableProps> = ({
  defaultSortBy,
  onSort,
  HeaderCellComponent = HeaderCell,
  CellComponent = TableCell,
  RowComponent = TableRow,
  ...restProps
}) => {
  const { setSortBy, sortBy } = useSortBy({ defaultSortBy, onSort })

  return (
    <CbTable
      headerCell={
        <HeaderCellComponent
          setSortBy={setSortBy}
          sortBy={sortBy}
          sortIconDesc={<SortIcon />}
          sortIconAsc={<SortIcon asc />}
        />
      }
      cell={<CellComponent />}
      row={<RowComponent />}
      {...restProps}
    />
  )
}

export const Table = styled(UnstyledTable)`
  background-color: rgba(41, 41, 41, 1);
  width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
  ${table}
`
