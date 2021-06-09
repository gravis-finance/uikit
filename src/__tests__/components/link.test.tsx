import React from 'react'
import { renderWithTheme } from '../../testHelpers'
import { Link, LinkExternal } from '../../components/Link'

it('renders link correctly', () => {
  const { asFragment } = renderWithTheme(<Link href="https://gravis.finance">Link</Link>)
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <a
        class="sc-bdnxRM sc-gtsrHT gZmXKV kvQDEo"
        color="primary"
        href="https://gravis.finance"
      >
        Link
      </a>
    </DocumentFragment>
  `)
})

it('renders link external link correctly', () => {
  const { asFragment } = renderWithTheme(<LinkExternal href="https://gravis.finance">Link</LinkExternal>)
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <a
        class="sc-bdnxRM sc-gtsrHT gZmXKV kvQDEo"
        color="primary"
        href="https://gravis.finance"
        rel="noreferrer noopener"
        target="_blank"
      >
        Link
        <svg
          class="sc-dlnjwi gYpexZ"
          color="primary"
          fill="none"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11"
            fill="none"
            stroke="#929292"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
          <path
            d="M15 3H21V9"
            fill="none"
            stroke="#929292"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
          <path
            d="M10 14L21 3"
            fill="none"
            stroke="#929292"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
        </svg>
      </a>
    </DocumentFragment>
  `)
})
