import React from 'react'
import { renderWithTheme } from '../../testHelpers'
import Text from '../../components/Text/Text'

it('renders correctly', () => {
  const { asFragment } = renderWithTheme(<Text>Gravis</Text>)
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-bdfBwQ jodyWs"
        color="text"
      >
        gravis
      </div>
    </DocumentFragment>
  `)
})
