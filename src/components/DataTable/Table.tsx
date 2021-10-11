import React from 'react'
import { Table as CbTable, TableProps as CbTableProps, HeaderCell, useSortBy, SortBy } from 'cb-datatable'
import styled from 'styled-components'
import { SortIcon } from './SortIcon'
import { TableCell } from './TableCell'
import 'cb-datatable/styles/core.css'

export type TableProps = CbTableProps & {
  fullWidth?: boolean
  defaultSortBy?: SortBy[]
  onSort?: (value: Array<SortBy>) => void
}

export const UnstyledTable: React.FC<TableProps> = ({ defaultSortBy, onSort, ...restProps }) => {
  const { setSortBy, sortBy } = useSortBy({ defaultSortBy, onSort })

  return (
    <CbTable
      headerCell={
        <HeaderCell setSortBy={setSortBy} sortBy={sortBy} sortIconDesc={<SortIcon />} sortIconAsc={<SortIcon asc />} />
      }
      cell={<TableCell />}
      {...restProps}
    />
  )
}

export const Table = styled(UnstyledTable)`
  background-color: rgba(41, 41, 41, 1);
  width: ${(props) => (props.fullWidth ? '100%' : 'auto')};

  .cb-HeaderCell {
    text-align: left;
    background-color: rgba(53, 53, 53, 1);

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }

    &_sortable {
      cursor: pointer;
    }
  }

  .cb-TableCell {
    padding: 21px 28px;
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

  .cb-TableBody {
    .cb-TableRow {
      &:last-child {
        .cb-TableCell {
          border-bottom: none;
        }
      }
    }

    .cb-TableCell {
      font-family: Inter;
      font-size: 18px;
      font-weight: 500;
      color: white;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      vertical-align: middle;
    }
  }
`
