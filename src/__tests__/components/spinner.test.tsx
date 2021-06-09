import React from 'react'
import { renderWithTheme } from '../../testHelpers'
import { Spinner } from '../../components/Spinner'

it('renders correctly', () => {
  const { asFragment } = renderWithTheme(<Spinner />)
  expect(asFragment()).toMatchInlineSnapshot(`<DocumentFragment />`)
})
