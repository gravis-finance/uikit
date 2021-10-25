import React from 'react'
import {
  Table as CbTable,
  TableProps as CbTableProps,
  TableCell as CbTableCell,
  TableRow as CbTableRow,
  HeaderCell as CbHeaderCell,
  useSortBy,
  SortBy,
} from 'cb-datatable'
import { layout, LayoutProps } from 'styled-system'
import styled from 'styled-components'
import { SortIcon } from './SortIcon'
import 'cb-datatable/styles/core.css'

export type TableProps = CbTableProps & {
  fullWidth?: boolean
  defaultSortBy?: SortBy[]
  onSort?: (value: Array<SortBy>) => void
  HeaderCellComponent?: React.ElementType
  CellComponent?: React.ElementType
  RowComponent?: React.ElementType
}

// add ability to use layout props inside the Column component
export const TableCell = styled(CbTableCell)<LayoutProps>`
  padding: 21px 28px;
  font-family: Inter;
  font-size: 18px;
  font-weight: 500;
  color: white;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  vertical-align: middle;
  ${layout}
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
`
