import React from 'react'

import Text from '../../components/Text/Text'
import { renderWithTheme } from '../../testHelpers'

it('renders correctly', () => {
  const { asFragment } = renderWithTheme(<Text>Gravis</Text>)
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-bdnxRM gEsGXn"
        color="text"
      >
        Gravis
      </div>
    </DocumentFragment>
  `)
})
