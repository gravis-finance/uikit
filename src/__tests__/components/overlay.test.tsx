import React from 'react'

import Overlay from '../../components/Overlay/Overlay'
import { renderWithTheme } from '../../testHelpers'

it('renders correctly', () => {
  const { asFragment } = renderWithTheme(<Overlay show />)
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-bdnxRM kWSQei"
        role="presentation"
      />
    </DocumentFragment>
  `)
})
