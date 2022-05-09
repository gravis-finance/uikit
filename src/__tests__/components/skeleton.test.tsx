import React from 'react'

import Skeleton from '../../components/Skeleton/Skeleton'
import { renderWithTheme } from '../../testHelpers'

it('renders correctly', () => {
  const { asFragment } = renderWithTheme(<Skeleton />)
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-bdnxRM sc-gtsrHT jnsKUR eylKeh"
      />
    </DocumentFragment>
  `)
})

it('renders correctly avatar', () => {
  const { asFragment } = renderWithTheme(<Skeleton width={50} height={50} variant="circle" />)
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-bdnxRM sc-gtsrHT jYSENA eylKeh"
        height="50"
        width="50"
      />
    </DocumentFragment>
  `)
})

it('renders correctly waves animation', () => {
  const { asFragment } = renderWithTheme(<Skeleton width={50} height={50} animation="waves" />)
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-bdnxRM sc-dlnjwi bCLoek dgWPjm"
        height="50"
        width="50"
      />
    </DocumentFragment>
  `)
})
