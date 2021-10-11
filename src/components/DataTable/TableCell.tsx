import { TableCell as CbTableCell } from 'cb-datatable'
import styled from 'styled-components'
import { layout, LayoutProps } from 'styled-system'

// add ability to use layout props inside the Column component
export const TableCell = styled(CbTableCell)<LayoutProps>`
  ${layout}
`
