import React from 'react'

import Input from '../../components/Input/Input'
import { renderWithTheme } from '../../testHelpers'

const handleChange = jest.fn()

it('renders correctly', () => {
  const { asFragment } = renderWithTheme(<Input type="text" value="input" onChange={handleChange} />)
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <input
        class="sc-bdnxRM dfvZEd"
        scale="md"
        type="text"
        value="input"
      />
    </DocumentFragment>
  `)
})
