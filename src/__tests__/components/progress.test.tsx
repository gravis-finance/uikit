import React from 'react'
import { renderWithTheme } from '../../testHelpers'
import Progress from '../../components/Progress/Progress'

it('renders correctly', () => {
  const { asFragment } = renderWithTheme(<Progress primaryStep={50} />)
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-gtsrHT kpJJIV"
      >
        <div
          class="sc-bdnxRM dDlpRz"
          style="width: 50%;"
        />
      </div>
    </DocumentFragment>
  `)
})
