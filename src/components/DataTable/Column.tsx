import React from 'react'
import { Column as CbColumn } from 'cb-datatable'
import { ColumnProps as CbColumnProps } from 'cb-datatable/Column'
import { TableCell } from './TableCell'

// concat Column component props with extended TableCell component
export type ColumnProps<T> = CbColumnProps<T> & React.ComponentProps<typeof TableCell>

export function Column<T>(props: ColumnProps<T>) {
  return <CbColumn {...props} />
}
