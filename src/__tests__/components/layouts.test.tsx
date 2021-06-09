import React from 'react'
import { renderWithTheme } from '../../testHelpers'
import { BaseLayout, CardsLayout } from '../../components/Layouts'

it('renders base layout correctly', () => {
  const { asFragment } = renderWithTheme(<BaseLayout>basic layout</BaseLayout>)
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-bdnxRM dotCug"
      >
        basic layout
      </div>
    </DocumentFragment>
  `)
})

it('renders card layout correctly', () => {
  const { asFragment } = renderWithTheme(<CardsLayout>cards layout</CardsLayout>)
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-bdnxRM sc-gtsrHT dotCug iLXKjj"
      >
        cards layout
      </div>
    </DocumentFragment>
  `)
})
