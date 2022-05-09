import { Column as CbColumn, ColumnProps as CbColumnProps } from 'cb-datatable'
import React from 'react'

import { TableCell } from './Table'

// concat Column component props with extended TableCell component
export type ColumnProps<T> = CbColumnProps<T> & React.ComponentProps<typeof TableCell>

export function Column<T>(props: ColumnProps<T>): JSX.Element {
  return <CbColumn {...props} />
}
