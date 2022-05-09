import React from 'react'

import ButtonMenu from '../../components/ButtonMenu/ButtonMenu'
import ButtonMenuItem from '../../components/ButtonMenu/ButtonMenuItem'
import { renderWithTheme } from '../../testHelpers'

const handleClick = jest.fn()

it('renders correctly', () => {
  const { asFragment } = renderWithTheme(
    <ButtonMenu activeIndex={0} onClick={handleClick}>
      <ButtonMenuItem>Item 1</ButtonMenuItem>
      <ButtonMenuItem>Item 2</ButtonMenuItem>
    </ButtonMenu>
  )
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-bdnxRM nsQIW"
      >
        <button
          class="sc-gtsrHT dXPISA"
          type="button"
        >
          Item 1
        </button>
        <button
          class="sc-gtsrHT hcZQtW"
          style="color: rgb(144, 144, 144);"
          type="button"
        >
          Item 2
        </button>
      </div>
    </DocumentFragment>
  `)
})
