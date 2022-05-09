import React from 'react'

import { Spinner } from '../../components/Spinner'
import { renderWithTheme } from '../../testHelpers'

it('renders correctly', () => {
  const { asFragment } = renderWithTheme(<Spinner />)
  expect(asFragment()).toMatchInlineSnapshot(`<DocumentFragment />`)
})
