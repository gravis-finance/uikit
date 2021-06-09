import React from 'react'
import noop from 'lodash/noop'
import { renderWithTheme } from '../../testHelpers'
import { Modal } from '../../widgets/Modal'

it('renders correctly', () => {
  const { asFragment } = renderWithTheme(
    <Modal title="Title" onDismiss={noop}>
      body
    </Modal>
  )
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-pNWdM fCAgbd"
      >
        <div
          class="sc-jrsJWt eAZEkq"
        >
          <div
            class="sc-dlnjwi sc-kEqXSa csjEuu hbiDvp"
          >
            <h2
              class="sc-bdnxRM sc-gtsrHT sc-crzoAE eSAzJx jEARnz iaaUZG"
              color="text"
            >
              Title
            </h2>
          </div>
          <button
            aria-label="Close the dialog"
            class="sc-eCApnc hUoeWc sc-fujyAs cYkYGj"
            type="button"
          >
            <svg
              class="sc-hKFxyN bAtaua"
              color="text"
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.75781 16.2426L16.2431 7.75733M7.75781 7.75732L16.2431 16.2426"
                stroke="#929292"
                stroke-linecap="round"
                stroke-width="2"
              />
            </svg>
          </button>
        </div>
        <div
          class="sc-dlnjwi sc-iqAclL kbVeLo lfCIXc"
        >
          body
        </div>
      </div>
    </DocumentFragment>
  `)
})
