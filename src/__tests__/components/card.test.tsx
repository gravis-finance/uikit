import React from 'react'

import { Card, CardBody, CardFooter,CardHeader } from '../../components/Card'
import { renderWithTheme } from '../../testHelpers'

it('renders correctly', () => {
  const { asFragment } = renderWithTheme(
    <Card>
      <CardHeader>Header</CardHeader>
      <CardBody>Body</CardBody>
      <CardFooter>Footer</CardFooter>
    </Card>
  )
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-bdnxRM isrlKA"
      >
        <div
          class="sc-dlnjwi dmRFWx"
        >
          Header
        </div>
        <div
          class="sc-gtsrHT dBbtWD"
        >
          Body
        </div>
        <div
          class="sc-hKFxyN dlqeAV"
        >
          Footer
        </div>
      </div>
    </DocumentFragment>
  `)
})
