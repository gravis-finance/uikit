import React from 'react'
import noop from 'lodash/noop'
import { renderWithTheme } from '../../testHelpers'
import ConnectModal from '../../widgets/WalletModal/ConnectModal'
import AccountModal from '../../widgets/WalletModal/AccountModal'

it('renders ConnectModal correctly', () => {
  const { asFragment } = renderWithTheme(<ConnectModal login={noop} />)
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-jrsJWt jUBdyL"
      >
        <div
          class="sc-kEqXSa gDGpxZ"
        >
          <div
            class="sc-eCApnc sc-iqAclL jVYiqS hELgRW"
          >
            <h2
              class="sc-bdnxRM sc-hKFxyN sc-dIsUp eSAzJx gFFDIX gtYLHJ"
              color="text"
            >
              connectToWallet
            </h2>
          </div>
          <button
            aria-label="Close the dialog"
            class="sc-jSFjdj eIutLp sc-pNWdM kstSXN"
            type="button"
          >
            <svg
              class="sc-dlnjwi WRUhC"
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
          class="sc-eCApnc sc-crzoAE corpWk dotbzO"
        >
          <div
            class="sc-eCApnc sc-bYwzuL bJappe gRbHpH"
          >
            <div
              class="sc-giAqHp kwEIrk"
            >
              <p>
                1
              </p>
            </div>
            <div
              class="sc-bdnxRM gEsGXn"
              color="text"
              style="font-size: 14px; color: rgb(255, 255, 255); margin-left: 16px;"
            >
              chooseNetwork
            </div>
          </div>
          <div
            class="sc-eCApnc sc-ezzafa jVYiqS exsajH"
          >
            <div
              class="sc-eCApnc sc-lmgQwP ifsMCy iXdPqK"
            >
              <button
                class="sc-jSFjdj hIOMgb sc-iwajpm bemjZK"
                type="button"
              >
                <svg
                  class="sc-dlnjwi WRUhC"
                  color="text"
                  fill="none"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.6753 8.5365C13.6753 5.95391 12.4218 3.72972 11.4672 3.00782C11.4672 3.00782 11.3937 2.96714 11.4013 3.07136C11.3228 8.06116 8.78293 9.41346 7.38764 11.2335C4.16656 15.4378 7.15973 20.0463 10.2137 20.8979C11.9154 21.3758 9.81864 20.054 9.54768 17.2655C9.21595 13.9 13.6753 11.3275 13.6753 8.5365Z"
                    fill="white"
                  />
                  <path
                    d="M15.1384 10.2369C15.1181 10.2242 15.0903 10.2141 15.0725 10.2471C15.0194 10.875 14.3812 12.2171 13.5709 13.4525C10.8234 17.6365 12.3883 19.6548 13.2696 20.7402C13.7811 21.368 13.2696 20.7402 14.5458 20.0971C16.1234 19.1362 17.1465 17.4738 17.2984 15.6283C17.5491 12.6543 15.7715 10.7809 15.1384 10.2369Z"
                    fill="#3F7FFF"
                  />
                </svg>
              </button>
              <div
                class="sc-bdnxRM iPeugw"
                color="rgba(255, 255, 255, 0.5)"
                font-size="11px"
                style="user-select: none;"
              >
                Huobi
              </div>
            </div>
            <div
              class="sc-eCApnc sc-lmgQwP ifsMCy iXdPqK"
            >
              <button
                class="sc-jSFjdj hIOMgb sc-iwajpm bemjZK"
                type="button"
              >
                <svg
                  class="sc-dlnjwi WRUhC"
                  color="text"
                  fill="none"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.50409 10.5638L11.9997 7.06828L15.4972 10.5656L17.5312 8.53162L11.9997 3L6.47009 8.52977L8.50409 10.5638Z"
                    fill="#F3BA2F"
                  />
                  <path
                    d="M7.0679 11.9995L5.03394 9.96558L2.99987 11.9996L5.03384 14.0336L7.0679 11.9995Z"
                    fill="#F3BA2F"
                  />
                  <path
                    d="M8.50427 13.4363L11.9999 16.9318L15.4972 13.4346L17.5324 15.4674L17.5314 15.4686L11.9999 21L6.47013 15.4704L6.46729 15.4676L8.50427 13.4363Z"
                    fill="#F3BA2F"
                  />
                  <path
                    d="M18.9661 14.0347L21.0002 12.0006L18.9662 9.96665L16.9322 12.0007L18.9661 14.0347Z"
                    fill="#F3BA2F"
                  />
                  <path
                    d="M14.0629 11.9989H14.0637L11.9997 9.93494L10.4744 11.4603H10.4743L10.2991 11.6356L9.9376 11.9971L9.93475 11.9999L9.9376 12.0029L11.9997 14.0651L14.0637 12.0011L14.0647 11.9999L14.0629 11.9989Z"
                    fill="#F3BA2F"
                  />
                </svg>
              </button>
              <div
                class="sc-bdnxRM iPeugw"
                color="rgba(255, 255, 255, 0.5)"
                font-size="11px"
                style="user-select: none;"
              >
                Binance
              </div>
            </div>
            <div
              class="sc-eCApnc sc-lmgQwP ifsMCy iXdPqK"
            >
              <button
                class="sc-jSFjdj hIOMgb sc-iwajpm bemjZK"
                type="button"
              >
                <svg
                  class="sc-dlnjwi WRUhC"
                  color="text"
                  fill="none"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    d="M4.04167 3.49823C2.69326 4.3223 1.45655 5.16743 1.29373 5.37628C1.03631 5.70637 0.997886 6.16496 1.00009 8.87805C1.00178 11.0076 1.06897 12.1327 1.21165 12.4177C1.50225 12.9986 6.33873 15.9611 7.01606 15.9731C7.3874 15.9796 8.81096 15.2053 12.0428 13.2389C14.7758 11.5761 16.7281 10.4956 16.9999 10.4956C17.2465 10.4956 18.1615 10.9345 19.0331 11.471C20.915 12.6292 21.0391 12.8844 20.9446 15.4064C20.872 17.3457 20.78 17.4802 18.6786 18.7136C17.5784 19.3593 17.1358 19.5317 16.8024 19.4442C16.1439 19.2713 13.7035 17.7419 13.4266 17.3283C13.278 17.1065 13.1835 16.5336 13.1835 15.8543C13.1835 15.2434 13.1263 14.7437 13.0566 14.7441C12.9869 14.7444 12.5108 15.008 11.9988 15.3296L11.0679 15.9143L11.0183 17.08C10.9535 18.6018 11.0994 18.768 14.0922 20.5793C15.8279 21.6299 16.5964 22 17.0419 22C17.4872 22 18.2659 21.6253 20.0261 20.5641C21.3359 19.7745 22.5408 19.0055 22.7038 18.8552C22.967 18.6127 23 18.194 23 15.0896C23 12.0175 22.9643 11.5536 22.7038 11.2386C22.5408 11.0414 21.2496 10.1869 19.8344 9.33929C17.7957 8.11858 17.1717 7.82177 16.8312 7.91115C16.5947 7.9731 15.7345 8.4446 14.9193 8.95894C14.1042 9.4731 12.9043 10.1996 12.2526 10.5733C11.601 10.9469 10.2572 11.7593 9.26641 12.3786C8.27562 12.9977 7.28873 13.5044 7.07344 13.5044C6.57872 13.5044 3.59959 11.6579 3.36975 11.2087C3.27514 11.0239 3.19779 9.96655 3.19779 8.85894C3.19779 6.88761 3.20761 6.83558 3.66323 6.40053C4.42028 5.67752 6.51982 4.47788 7.02808 4.47788C7.50012 4.47788 10.5092 6.22973 10.7577 6.64903C10.8288 6.76903 10.9276 7.43044 10.9774 8.11894L11.0679 9.37062L12.0411 8.77487L13.0143 8.17894V6.79823C13.0143 5.70619 12.9523 5.36018 12.7181 5.14265C12.5551 4.9915 11.3717 4.22248 10.0879 3.43381C8.29728 2.33363 7.60742 2 7.12388 2C6.63898 2 5.92762 2.34584 4.04167 3.49823Z"
                    fill="#8247E5"
                    fill-rule="evenodd"
                  />
                </svg>
              </button>
              <div
                class="sc-bdnxRM iPeugw"
                color="rgba(255, 255, 255, 0.5)"
                font-size="11px"
                style="user-select: none;"
              >
                Polygon
              </div>
            </div>
          </div>
          <div
            class="sc-eCApnc sc-bYwzuL fRwhlg gRbHpH"
          >
            <div
              class="sc-giAqHp kwEIrk"
            >
              <p>
                2
              </p>
            </div>
            <div
              class="sc-bdnxRM gEsGXn"
              color="text"
              style="font-size: 14px; color: rgb(255, 255, 255); margin-left: 16px;"
            >
              chooseWallet
            </div>
          </div>
          <div
            class="sc-eCApnc sc-ezzafa sc-kLojOw jVYiqS exsajH kOXnMX"
          >
            <div
              class="sc-eCApnc sc-fKgJPI ifsMCy bWzKMf"
            >
              <button
                class="sc-jSFjdj iFWHZv sc-kfYoZR bJTkOl"
                id="wallet-connect-metamask"
                style="justify-content: space-between;"
                type="button"
              >
                <svg
                  class="sc-dlnjwi WRUhC"
                  color="text"
                  fill="none"
                  height="24"
                  viewBox="0 0 24 24"
                  width="32px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.813 0.75L13.4374 7.68729L15.1809 3.59892L22.813 0.75Z"
                    fill="#E17726"
                    stroke="#E17726"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0.25"
                  />
                  <path
                    d="M1.18701 0.75L10.4791 7.75203L8.81919 3.59891L1.18701 0.75Z"
                    fill="#E27625"
                    stroke="#E27625"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0.25"
                  />
                  <path
                    d="M19.4372 16.8352L16.9426 20.6461L22.2842 22.1168L23.8144 16.9185L19.4372 16.8352Z"
                    fill="#E27625"
                    stroke="#E27625"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0.25"
                  />
                  <path
                    d="M0.194641 16.9185L1.7155 22.1168L7.04783 20.6461L4.56249 16.8352L0.194641 16.9185Z"
                    fill="#E27625"
                    stroke="#E27625"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0.25"
                  />
                  <path
                    d="M6.7603 10.3974L5.27655 12.6358L10.5625 12.8763L10.3863 7.18774L6.7603 10.3974Z"
                    fill="#E27625"
                    stroke="#E27625"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0.25"
                  />
                  <path
                    d="M17.2394 10.3976L13.5579 7.12317L13.4373 12.8765L18.7232 12.636L17.2394 10.3976Z"
                    fill="#E27625"
                    stroke="#E27625"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0.25"
                  />
                  <path
                    d="M7.04791 20.6461L10.2473 19.1014L7.49306 16.9554L7.04791 20.6461Z"
                    fill="#E27625"
                    stroke="#E27625"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0.25"
                  />
                  <path
                    d="M13.7527 19.1014L16.9428 20.6461L16.5069 16.9554L13.7527 19.1014Z"
                    fill="#E27625"
                    stroke="#E27625"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0.25"
                  />
                  <path
                    d="M16.9428 20.6462L13.7527 19.1016L14.0123 21.1735L13.9845 22.0522L16.9428 20.6462Z"
                    fill="#D5BFB2"
                    stroke="#D5BFB2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0.25"
                  />
                  <path
                    d="M7.04791 20.6462L10.0155 22.0522L9.99692 21.1735L10.2473 19.1016L7.04791 20.6462Z"
                    fill="#D5BFB2"
                    stroke="#D5BFB2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0.25"
                  />
                  <path
                    d="M10.071 15.5865L7.41876 14.8096L9.29201 13.9493L10.071 15.5865Z"
                    fill="#233447"
                    stroke="#233447"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0.25"
                  />
                  <path
                    d="M13.9289 15.5865L14.7079 13.9493L16.5904 14.8096L13.9289 15.5865Z"
                    fill="#233447"
                    stroke="#233447"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0.25"
                  />
                  <path
                    d="M7.04786 20.6461L7.51157 16.8352L4.56256 16.9185L7.04786 20.6461Z"
                    fill="#CC6228"
                    stroke="#CC6228"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0.25"
                  />
                  <path
                    d="M16.4883 16.8352L16.9427 20.6461L19.4373 16.9185L16.4883 16.8352Z"
                    fill="#CC6228"
                    stroke="#CC6228"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0.25"
                  />
                  <path
                    d="M18.7232 12.6359L13.4373 12.8764L13.9288 15.5866L14.7078 13.9493L16.5903 14.8096L18.7232 12.6359Z"
                    fill="#CC6228"
                    stroke="#CC6228"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0.25"
                  />
                  <path
                    d="M7.41874 14.8096L9.29199 13.9493L10.071 15.5866L10.5625 12.8764L5.27655 12.6359L7.41874 14.8096Z"
                    fill="#CC6228"
                    stroke="#CC6228"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0.25"
                  />
                  <path
                    d="M5.27673 12.6359L7.49313 16.9555L7.4189 14.8096L5.27673 12.6359Z"
                    fill="#E27525"
                    stroke="#E27525"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0.25"
                  />
                  <path
                    d="M16.5904 14.8096L16.507 16.9555L18.7234 12.6359L16.5904 14.8096Z"
                    fill="#E27525"
                    stroke="#E27525"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0.25"
                  />
                  <path
                    d="M10.5628 12.8763L10.0713 15.5866L10.6926 18.7869L10.8317 14.5691L10.5628 12.8763Z"
                    fill="#E27525"
                    stroke="#E27525"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0.25"
                  />
                  <path
                    d="M13.4374 12.8763L13.1777 14.5599L13.3076 18.7869L13.9289 15.5866L13.4374 12.8763Z"
                    fill="#E27525"
                    stroke="#E27525"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0.25"
                  />
                  <path
                    d="M13.9289 15.5866L13.3076 18.7869L13.7527 19.1014L16.507 16.9555L16.5904 14.8096L13.9289 15.5866Z"
                    fill="#F5841F"
                    stroke="#F5841F"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0.25"
                  />
                  <path
                    d="M7.41876 14.8096L7.493 16.9555L10.2472 19.1014L10.6923 18.7869L10.071 15.5866L7.41876 14.8096Z"
                    fill="#F5841F"
                    stroke="#F5841F"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0.25"
                  />
                  <path
                    d="M13.9846 22.0521L14.0123 21.1734L13.7713 20.9698H10.2288L9.99692 21.1734L10.0155 22.0521L7.04791 20.6461L8.08655 21.4971L10.1917 22.9493H13.799L15.9134 21.4971L16.9428 20.6461L13.9846 22.0521Z"
                    fill="#C0AC9D"
                    stroke="#C0AC9D"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0.25"
                  />
                  <path
                    d="M13.7526 19.1014L13.3075 18.787H10.6923L10.2472 19.1014L9.99683 21.1734L10.2287 20.9699H13.7712L14.0123 21.1734L13.7526 19.1014Z"
                    fill="#161616"
                    stroke="#161616"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0.25"
                  />
                  <path
                    d="M23.2117 8.1405L24 4.31114L22.813 0.75L13.7527 7.45607L17.2395 10.3974L22.1638 11.8312L23.2488 10.564L22.7759 10.2217L23.527 9.53727L22.9521 9.09326L23.7033 8.51976L23.2117 8.1405Z"
                    fill="#763E1A"
                    stroke="#763E1A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0.25"
                  />
                  <path
                    d="M0 4.31114L0.797528 8.1405L0.287484 8.51976L1.04791 9.09326L0.472953 9.53727L1.22411 10.2217L0.751157 10.564L1.83617 11.8312L6.76047 10.3974L10.2473 7.45607L1.18702 0.75L0 4.31114Z"
                    fill="#763E1A"
                    stroke="#763E1A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0.25"
                  />
                  <path
                    d="M22.1639 11.8311L17.2396 10.3975L18.7234 12.6359L16.507 16.9555L19.4374 16.9185H23.8145L22.1639 11.8311Z"
                    fill="#F5841F"
                    stroke="#F5841F"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0.25"
                  />
                  <path
                    d="M6.7603 10.3975L1.83606 11.8311L0.194641 16.9185H4.56249L7.49291 16.9555L5.27656 12.6359L6.7603 10.3975Z"
                    fill="#F5841F"
                    stroke="#F5841F"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0.25"
                  />
                  <path
                    d="M13.4373 12.8764L13.7526 7.45598L15.1807 3.59888H8.81909L10.2472 7.45598L10.5625 12.8764L10.6831 14.5783L10.6923 18.7869H13.3075L13.3168 14.5783L13.4373 12.8764Z"
                    fill="#F5841F"
                    stroke="#F5841F"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0.25"
                  />
                </svg>
              </button>
              <div
                class="sc-bdnxRM iPeugw"
                color="rgba(255, 255, 255, 0.5)"
                font-size="11px"
                style="text-align: center;"
              >
                Metamask
              </div>
            </div>
            <div
              class="sc-eCApnc sc-fKgJPI ifsMCy OyTgR"
              disabled=""
            >
              <button
                class="sc-jSFjdj iFWHZv sc-kfYoZR bJTkOl"
                id="wallet-connect-trust wallet"
                style="justify-content: space-between;"
                type="button"
              >
                <svg
                  class="sc-dlnjwi WRUhC"
                  color="text"
                  fill="none"
                  height="24"
                  viewBox="0 0 24 24"
                  width="32px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.3689 1.5C15.8571 4.46101 19.8573 4.2784 21 4.2784C20.7502 21.1175 18.8452 17.7782 12.3689 22.5C5.89284 17.7782 3.99998 21.1175 3.75 4.2784C4.88093 4.2784 8.88093 4.46101 12.3689 1.5Z"
                    fill="none"
                    stroke="#3375BB"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    stroke-width="2"
                  />
                </svg>
              </button>
              <div
                class="sc-bdnxRM iPeugw"
                color="rgba(255, 255, 255, 0.5)"
                font-size="11px"
                style="text-align: center;"
              >
                Trust Wallet
              </div>
            </div>
            <div
              class="sc-eCApnc sc-fKgJPI ifsMCy OyTgR"
              disabled=""
            >
              <button
                class="sc-jSFjdj iFWHZv sc-kfYoZR bJTkOl"
                id="wallet-connect-token pocket"
                style="justify-content: space-between;"
                type="button"
              >
                <svg
                  class="sc-dlnjwi WRUhC"
                  color="text"
                  fill="none"
                  height="24"
                  viewBox="0 0 24 24"
                  width="32px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
                    fill="white"
                  />
                  <path
                    d="M11.0822 8.83864V5.42834H4.77315C4.64525 5.42834 4.56 5.51359 4.56 5.64149V10.4585C4.56 10.5864 4.64525 10.6717 4.77315 10.6717H7.20297V19.4532C7.20297 19.5811 7.28825 19.6663 7.41612 19.6663H11.3806C11.5085 19.6663 11.5937 19.5811 11.5937 19.4532V8.83864H11.0822Z"
                    fill="#29AEFF"
                  />
                  <path
                    d="M15.473 4.31995H13.9383H9.80334C9.67547 4.31995 9.59019 4.4052 9.59019 4.5331V18.3448C9.59019 18.4727 9.67547 18.5579 9.80334 18.5579H13.7678C13.8957 18.5579 13.981 18.4727 13.981 18.3448V14.8492H15.5156C18.4144 14.8492 20.7589 12.5047 20.7589 9.60592C20.7589 6.66452 18.3717 4.31995 15.473 4.31995Z"
                    fill="#2761E7"
                  />
                </svg>
              </button>
              <div
                class="sc-bdnxRM iPeugw"
                color="rgba(255, 255, 255, 0.5)"
                font-size="11px"
                style="text-align: center;"
              >
                Token Pocket
              </div>
            </div>
            <div
              class="sc-eCApnc sc-fKgJPI ifsMCy bWzKMf"
            >
              <button
                class="sc-jSFjdj iFWHZv sc-kfYoZR bJTkOl"
                id="wallet-connect-wallet connect"
                style="justify-content: space-between;"
                type="button"
              >
                <svg
                  class="sc-dlnjwi WRUhC"
                  color="text"
                  fill="none"
                  height="24"
                  viewBox="0 0 24 24"
                  width="32px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 12C24 5.37257 18.6274 0 12 0C5.37257 0 0 5.37257 0 12C0 18.6274 5.37257 24 12 24C18.6274 24 24 18.6274 24 12Z"
                    fill="#3389FB"
                  />
                  <path
                    d="M7.42317 8.85612C9.9509 6.38129 14.0491 6.38129 16.5768 8.85612L16.881 9.15397C17.0074 9.27772 17.0074 9.47835 16.881 9.6021L15.8404 10.621C15.7772 10.6828 15.6747 10.6828 15.6115 10.621L15.1929 10.2111C13.4295 8.48459 10.5705 8.48459 8.8071 10.2111L8.35877 10.65C8.29557 10.7119 8.19312 10.7119 8.12992 10.65L7.08927 9.63117C6.96287 9.50742 6.96287 9.30679 7.08927 9.18304L7.42317 8.85612ZM18.729 10.9633L19.6552 11.8701C19.7816 11.9939 19.7816 12.1945 19.6552 12.3182L15.479 16.4072C15.3526 16.5309 15.1477 16.5309 15.0213 16.4072L12.0572 13.5051C12.0256 13.4742 11.9744 13.4742 11.9428 13.5051L8.97882 16.4072C8.85245 16.5309 8.64755 16.5309 8.52115 16.4072L4.3448 12.3182C4.2184 12.1944 4.2184 11.9938 4.3448 11.8701L5.27097 10.9632C5.39737 10.8395 5.60227 10.8395 5.72865 10.9632L8.69275 13.8653C8.72435 13.8963 8.77557 13.8963 8.80717 13.8653L11.7711 10.9632C11.8975 10.8395 12.1024 10.8395 12.2288 10.9632L15.1929 13.8653C15.2245 13.8963 15.2757 13.8963 15.3073 13.8653L18.2713 10.9633C18.3977 10.8396 18.6026 10.8396 18.729 10.9633Z"
                    fill="white"
                  />
                </svg>
              </button>
              <div
                class="sc-bdnxRM iPeugw"
                color="rgba(255, 255, 255, 0.5)"
                font-size="11px"
                style="text-align: center;"
              >
                Wallet Connect
              </div>
            </div>
            <div
              class="sc-eCApnc sc-fKgJPI ifsMCy OyTgR"
              disabled=""
            >
              <button
                class="sc-jSFjdj iFWHZv sc-kfYoZR bJTkOl"
                id="wallet-connect-binance chain wallet"
                style="justify-content: space-between;"
                type="button"
              >
                <svg
                  class="sc-dlnjwi WRUhC"
                  color="text"
                  fill="none"
                  height="18"
                  viewBox="0 0 16 18"
                  width="32px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.71441 0L2.9779 2.75707L4.71928 3.77561L7.71441 2.03707L10.7095 3.77561L12.451 2.75707L7.71441 0Z"
                    fill="#F0B90B"
                  />
                  <path
                    d="M10.7095 5.21558L12.451 6.23415V8.27123L9.45576 10.0097V13.4868L7.71441 14.5054L5.97306 13.4868V10.0097L2.9779 8.27123V6.23415L4.71928 5.21558L7.71441 6.95415L10.7095 5.21558Z"
                    fill="#F0B90B"
                  />
                  <path
                    d="M12.4509 9.71118V11.7483L10.7095 12.7668V10.7297L12.4509 9.71118Z"
                    fill="#F0B90B"
                  />
                  <path
                    d="M10.6919 14.2068L13.687 12.4683V8.99123L15.4284 7.97266V13.4868L10.6919 16.2439V14.2068Z"
                    fill="#F0B90B"
                  />
                  <path
                    d="M13.6873 5.51413L11.946 4.49559L13.6873 3.47705L15.4287 4.49559V6.53263L13.6873 7.55121V5.51413Z"
                    fill="#F0B90B"
                  />
                  <path
                    d="M5.97298 16.9815V14.9445L7.71433 15.963L9.45568 14.9445V16.9815L7.71433 18L5.97298 16.9815Z"
                    fill="#F0B90B"
                  />
                  <path
                    d="M4.71928 12.7668L2.9779 11.7483V9.71118L4.71928 10.7297V12.7668Z"
                    fill="#F0B90B"
                  />
                  <path
                    d="M7.71433 5.51413L5.97298 4.49559L7.71433 3.47705L9.45568 4.49559L7.71433 5.51413Z"
                    fill="#F0B90B"
                  />
                  <path
                    d="M3.48277 4.49559L1.74137 5.51413V7.55121L0 6.53263V4.49559L1.74137 3.47705L3.48277 4.49559Z"
                    fill="#F0B90B"
                  />
                  <path
                    d="M0 7.97266L1.74137 8.99123V12.4683L4.73655 14.2068V16.2439L0 13.4868V7.97266Z"
                    fill="#F0B90B"
                  />
                </svg>
              </button>
              <div
                class="sc-bdnxRM iPeugw"
                color="rgba(255, 255, 255, 0.5)"
                font-size="11px"
                style="text-align: center;"
              >
                Binance Chain Wallet
              </div>
            </div>
          </div>
        </div>
      </div>
    </DocumentFragment>
  `)
})

it('renders AccountModal correctly', () => {
  const { asFragment } = renderWithTheme(
    <AccountModal account="0xb218C5D6aF1F979aC42BC68d98A5A0D796C6aB01" logout={noop} />
  )
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-jrsJWt jUBdyL"
      >
        <div
          class="sc-kEqXSa gDGpxZ"
        >
          <div
            class="sc-eCApnc sc-iqAclL jVYiqS hELgRW"
          >
            <h2
              class="sc-bdnxRM sc-hKFxyN sc-dIsUp eSAzJx gFFDIX gtYLHJ"
              color="text"
            >
              account
            </h2>
          </div>
          <button
            aria-label="Close the dialog"
            class="sc-jSFjdj eIutLp sc-pNWdM kstSXN"
            type="button"
          >
            <svg
              class="sc-dlnjwi WRUhC"
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
          class="sc-eCApnc sc-crzoAE corpWk dotbzO"
          style="padding: 0px 24px 32px 24px;"
        >
          <div
            class="sc-iklJeh YiOXv"
          >
            <div
              class="sc-jJMGnK gHUQaB"
            >
              <svg
                fill="none"
                height="80px"
                viewBox="0 0 80 80"
                width="80px"
              >
                <rect
                  fill="#0074B2"
                  height="80"
                  rx="40"
                  width="80"
                />
              </svg>
              <div
                class="sc-eCApnc sc-ciSkZP jVYiqS gewvJp"
              >
                <div
                  class="sc-eCApnc sc-jcwpoC iDlRBw gjhgWk"
                >
                  <div
                    class="sc-bdnxRM kUEiac"
                    color="rgba(255, 255, 255, 0.5)"
                    font-size="14px"
                  >
                    balanceTitle
                  </div>
                  <div
                    class="sc-bdnxRM lfWYwT"
                    color="white"
                    style="margin-top: 6px;"
                  >
                    <p>
                      Loading balance...
                    </p>
                  </div>
                </div>
                <div
                  class="sc-eCApnc sc-jcwpoC lloYjs gjhgWk"
                >
                  <div
                    class="sc-bdnxRM kUEiac"
                    color="rgba(255, 255, 255, 0.5)"
                    font-size="14px"
                  >
                    networks
                  </div>
                  <div
                    class="sc-bdnxRM lfWYwT"
                    color="white"
                    style="margin-top: 6px;"
                  >
                    binanceSmartChain
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="sc-gXfVKN nPzYs"
          >
            <svg
              class="sc-dlnjwi WRUhC"
              color="text"
              fill="none"
              height="32"
              viewBox="0 0 32 32"
              width="32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                fill="#F5F7FF"
                height="32"
                rx="16"
                width="32"
              />
              <g
                clip-path="url(#clip0)"
              >
                <path
                  d="M24.1098 7.5625L17.0781 12.7655L18.3857 9.69919L24.1098 7.5625Z"
                  fill="#E17726"
                  stroke="#E17726"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0.25"
                />
                <path
                  d="M7.89026 7.5625L14.8594 12.814L13.6144 9.69918L7.89026 7.5625Z"
                  fill="#E27625"
                  stroke="#E27625"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0.25"
                />
                <path
                  d="M21.5778 19.6265L19.7069 22.4846L23.7131 23.5877L24.8607 19.6889L21.5778 19.6265Z"
                  fill="#E27625"
                  stroke="#E27625"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0.25"
                />
                <path
                  d="M7.14594 19.6889L8.28658 23.5877L12.2858 22.4846L10.4218 19.6265L7.14594 19.6889Z"
                  fill="#E27625"
                  stroke="#E27625"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0.25"
                />
                <path
                  d="M12.0703 14.7981L10.9575 16.4769L14.9219 16.6573L14.7898 12.3909L12.0703 14.7981Z"
                  fill="#E27625"
                  stroke="#E27625"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0.25"
                />
                <path
                  d="M19.9295 14.7982L17.1683 12.3424L17.0779 16.6574L21.0423 16.477L19.9295 14.7982Z"
                  fill="#E27625"
                  stroke="#E27625"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0.25"
                />
                <path
                  d="M12.2859 22.4845L14.6855 21.326L12.6198 19.7166L12.2859 22.4845Z"
                  fill="#E27625"
                  stroke="#E27625"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0.25"
                />
                <path
                  d="M17.3145 21.326L19.707 22.4845L19.3801 19.7166L17.3145 21.326Z"
                  fill="#E27625"
                  stroke="#E27625"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0.25"
                />
                <path
                  d="M19.707 22.4847L17.3145 21.3262L17.5092 22.8801L17.4883 23.5392L19.707 22.4847Z"
                  fill="white"
                />
                <path
                  d="M12.2859 22.4847L14.5116 23.5392L14.4977 22.8801L14.6855 21.3262L12.2859 22.4847Z"
                  fill="white"
                />
                <path
                  d="M14.5532 18.6899L12.564 18.1072L13.969 17.462L14.5532 18.6899Z"
                  fill="#233447"
                  stroke="#233447"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0.25"
                />
                <path
                  d="M17.4467 18.6899L18.031 17.462L19.4429 18.1072L17.4467 18.6899Z"
                  fill="#233447"
                  stroke="#233447"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0.25"
                />
                <path
                  d="M12.2859 22.4846L12.6337 19.6265L10.4219 19.6889L12.2859 22.4846Z"
                  fill="#CC6228"
                  stroke="#CC6228"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0.25"
                />
                <path
                  d="M19.3662 19.6265L19.707 22.4846L21.578 19.6889L19.3662 19.6265Z"
                  fill="#CC6228"
                  stroke="#CC6228"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0.25"
                />
                <path
                  d="M21.0423 16.4769L17.0779 16.6573L17.4465 18.69L18.0307 17.462L19.4426 18.1072L21.0423 16.4769Z"
                  fill="#CC6228"
                  stroke="#CC6228"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0.25"
                />
                <path
                  d="M12.5641 18.1072L13.969 17.462L14.5533 18.69L14.9219 16.6573L10.9575 16.4769L12.5641 18.1072Z"
                  fill="#CC6228"
                  stroke="#CC6228"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0.25"
                />
                <path
                  d="M10.9575 16.4769L12.6198 19.7167L12.5641 18.1072L10.9575 16.4769Z"
                  fill="#E27525"
                  stroke="#E27525"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0.25"
                />
                <path
                  d="M19.4429 18.1072L19.3803 19.7167L21.0426 16.4769L19.4429 18.1072Z"
                  fill="#E27525"
                  stroke="#E27525"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0.25"
                />
                <path
                  d="M14.9221 16.6572L14.5534 18.6899L15.0194 21.0902L15.1237 17.9268L14.9221 16.6572Z"
                  fill="#E27525"
                  stroke="#E27525"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0.25"
                />
                <path
                  d="M17.0781 16.6572L16.8833 17.9199L16.9807 21.0902L17.4467 18.6899L17.0781 16.6572Z"
                  fill="#E27525"
                  stroke="#E27525"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0.25"
                />
                <path
                  d="M17.4466 18.6899L16.9807 21.0902L17.3145 21.3261L19.3802 19.7166L19.4428 18.1072L17.4466 18.6899Z"
                  fill="#F5841F"
                  stroke="#F5841F"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0.25"
                />
                <path
                  d="M12.564 18.1072L12.6197 19.7166L14.6854 21.3261L15.0192 21.0902L14.5532 18.6899L12.564 18.1072Z"
                  fill="#F5841F"
                  stroke="#F5841F"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0.25"
                />
                <path
                  d="M17.4884 23.5391L17.5093 22.88L17.3285 22.7274H14.6716L14.4977 22.88L14.5116 23.5391L12.2859 22.4846L13.0649 23.1228L14.6438 24.212H17.3493L18.9351 23.1228L19.7071 22.4846L17.4884 23.5391Z"
                  fill="white"
                />
                <path
                  d="M17.3144 21.326L16.9805 21.0902H15.0192L14.6854 21.326L14.4976 22.88L14.6714 22.7274H17.3283L17.5092 22.88L17.3144 21.326Z"
                  fill="#161616"
                  stroke="#161616"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0.25"
                />
                <path
                  d="M24.4087 13.1054L24.9999 10.2334L24.1096 7.5625L17.3145 12.5921L19.9296 14.7981L23.6228 15.8734L24.4365 14.923L24.0818 14.6663L24.6452 14.153L24.214 13.8199L24.7774 13.3898L24.4087 13.1054Z"
                  fill="#763E1A"
                  stroke="#763E1A"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0.25"
                />
                <path
                  d="M7 10.2334L7.59815 13.1054L7.21561 13.3898L7.78593 13.8199L7.35471 14.153L7.91808 14.6663L7.56337 14.923L8.37713 15.8734L12.0704 14.7981L14.6855 12.5921L7.89026 7.5625L7 10.2334Z"
                  fill="#763E1A"
                  stroke="#763E1A"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0.25"
                />
                <path
                  d="M23.623 15.8733L19.9298 14.7981L21.0426 16.4769L19.3803 19.7166L21.5781 19.6889H24.861L23.623 15.8733Z"
                  fill="#F5841F"
                  stroke="#F5841F"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0.25"
                />
                <path
                  d="M12.0702 14.7981L8.377 15.8733L7.14594 19.6889H10.4218L12.6196 19.7166L10.9574 16.4769L12.0702 14.7981Z"
                  fill="#F5841F"
                  stroke="#F5841F"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0.25"
                />
                <path
                  d="M17.0779 16.6573L17.3144 12.592L18.3855 9.69922H13.6143L14.6853 12.592L14.9218 16.6573L15.0122 17.9338L15.0192 21.0903H16.9806L16.9875 17.9338L17.0779 16.6573Z"
                  fill="#F5841F"
                  stroke="#F5841F"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0.25"
                />
              </g>
              <defs>
                <clippath
                  id="clip0"
                >
                  <rect
                    fill="white"
                    height="18"
                    transform="translate(7 7)"
                    width="18"
                  />
                </clippath>
              </defs>
            </svg>
            <input
              class="sc-hiKfDv iMLmHA"
              value="0xb218C5D6aF1F979aC42BC68d98A5A0D796C6aB01"
            />
            <div
              class="sc-iCoGMd grrPaj"
            >
              <svg
                class="sc-dlnjwi WRUhC sc-gKAaRy kSSwCn"
                color="text"
                data-id="copy-button"
                fill="none"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="15.5"
                  cy="15.5"
                  fill="none"
                  r="6.5"
                  stroke="#929292"
                  stroke-width="2"
                />
                <path
                  d="M14 5.30506C13.0286 2.78666 10.585 1 7.72414 1C4.0105 1 1 4.0105 1 7.72414C1 10.585 2.78666 13.0286 5.30506 14"
                  fill="none"
                  stroke="#929292"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </svg>
            </div>
          </div>
          <div
            class="sc-eCApnc sc-ciSkZP icpAkk bTxKie"
          >
            <button
              class="sc-jSFjdj gWRnsm sc-cBoqAE dRiyyt"
              data-id="scan-button"
              type="button"
            >
              <svg
                class="sc-dlnjwi fxtZWf"
                color="text"
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  d="M4.04167 3.49823C2.69326 4.3223 1.45655 5.16743 1.29373 5.37628C1.03631 5.70637 0.997886 6.16496 1.00009 8.87805C1.00178 11.0076 1.06897 12.1327 1.21165 12.4177C1.50225 12.9986 6.33873 15.9611 7.01606 15.9731C7.3874 15.9796 8.81096 15.2053 12.0428 13.2389C14.7758 11.5761 16.7281 10.4956 16.9999 10.4956C17.2465 10.4956 18.1615 10.9345 19.0331 11.471C20.915 12.6292 21.0391 12.8844 20.9446 15.4064C20.872 17.3457 20.78 17.4802 18.6786 18.7136C17.5784 19.3593 17.1358 19.5317 16.8024 19.4442C16.1439 19.2713 13.7035 17.7419 13.4266 17.3283C13.278 17.1065 13.1835 16.5336 13.1835 15.8543C13.1835 15.2434 13.1263 14.7437 13.0566 14.7441C12.9869 14.7444 12.5108 15.008 11.9988 15.3296L11.0679 15.9143L11.0183 17.08C10.9535 18.6018 11.0994 18.768 14.0922 20.5793C15.8279 21.6299 16.5964 22 17.0419 22C17.4872 22 18.2659 21.6253 20.0261 20.5641C21.3359 19.7745 22.5408 19.0055 22.7038 18.8552C22.967 18.6127 23 18.194 23 15.0896C23 12.0175 22.9643 11.5536 22.7038 11.2386C22.5408 11.0414 21.2496 10.1869 19.8344 9.33929C17.7957 8.11858 17.1717 7.82177 16.8312 7.91115C16.5947 7.9731 15.7345 8.4446 14.9193 8.95894C14.1042 9.4731 12.9043 10.1996 12.2526 10.5733C11.601 10.9469 10.2572 11.7593 9.26641 12.3786C8.27562 12.9977 7.28873 13.5044 7.07344 13.5044C6.57872 13.5044 3.59959 11.6579 3.36975 11.2087C3.27514 11.0239 3.19779 9.96655 3.19779 8.85894C3.19779 6.88761 3.20761 6.83558 3.66323 6.40053C4.42028 5.67752 6.51982 4.47788 7.02808 4.47788C7.50012 4.47788 10.5092 6.22973 10.7577 6.64903C10.8288 6.76903 10.9276 7.43044 10.9774 8.11894L11.0679 9.37062L12.0411 8.77487L13.0143 8.17894V6.79823C13.0143 5.70619 12.9523 5.36018 12.7181 5.14265C12.5551 4.9915 11.3717 4.22248 10.0879 3.43381C8.29728 2.33363 7.60742 2 7.12388 2C6.63898 2 5.92762 2.34584 4.04167 3.49823Z"
                  fill="none"
                  fill-rule="evenodd"
                  stroke="none"
                />
              </svg>
              MaticInfo
            </button>
            <button
              class="sc-jSFjdj gWRnsm sc-cBoqAE dRiyyt"
              type="button"
            >
              <svg
                class="sc-dlnjwi fxtZWf"
                color="text"
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9"
                  fill="none"
                  opacity="0.5"
                  stroke="#6C5DD3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                />
                <path
                  d="M16 17L21 12L16 7"
                  fill="none"
                  stroke="#6C5DD3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                />
                <path
                  d="M21 12H9"
                  fill="none"
                  stroke="#6C5DD3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                />
              </svg>
              disconnect
            </button>
          </div>
        </div>
      </div>
    </DocumentFragment>
  `)
})
