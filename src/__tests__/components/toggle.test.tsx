import React from 'react'
import { renderWithTheme } from '../../testHelpers'
import Toggle from '../../components/Toggle/Toggle'

const handleChange = jest.fn()

it('renders correctly', () => {
  const { asFragment } = renderWithTheme(<Toggle checked onChange={handleChange} scale="md" />)
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-dlnjwi npejl"
        scale="md"
      >
        <input
          checked=""
          class="sc-gtsrHT hafikH"
          scale="md"
          type="checkbox"
        />
        <div
          class="sc-bdnxRM hYjbVf"
          scale="md"
        />
      </div>
    </DocumentFragment>
  `)
})

it('renders correctly scale sm', () => {
  const { asFragment } = renderWithTheme(<Toggle checked onChange={handleChange} scale="sm" />)
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-dlnjwi enrtAH"
        scale="sm"
      >
        <input
          checked=""
          class="sc-gtsrHT dJArmL"
          scale="sm"
          type="checkbox"
        />
        <div
          class="sc-bdnxRM jXIUPT"
          scale="sm"
        />
      </div>
    </DocumentFragment>
  `)
})
