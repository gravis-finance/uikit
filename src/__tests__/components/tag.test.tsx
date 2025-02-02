import React from 'react'

import Tag from '../../components/Tag/Tag'
import { renderWithTheme } from '../../testHelpers'

it('renders correctly', () => {
  const { asFragment } = renderWithTheme(<Tag>Core</Tag>)
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-bdnxRM kUVEgg"
      >
        Core
      </div>
    </DocumentFragment>
  `)
})
