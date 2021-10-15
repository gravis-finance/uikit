import styled, { keyframes, DefaultTheme } from 'styled-components'
import { MENU_ENTRY_HEIGHT } from './config'

export interface Props {
  secondary?: boolean
  isactive?: boolean
  theme: DefaultTheme
  fillStroke?: boolean
  isPushed?: boolean
  single?: boolean
  blink?: boolean
  hot?: boolean
}

const rainbowAnimation = keyframes`
  0%,
  100% {
    background-position: 0 0;
  }
  50% {
    background-position: 100% 0;
  }
`

const LinkLabel = styled.div<{ isPushed: boolean }>`
  color: ${({ isPushed, theme }) => (isPushed ? theme.colors.textSubtle : 'transparent !important')};
  transition: color 0.4s;
  flex-grow: 1;
  font-size: 14px;
`

const MenuEntry = styled.div<Props>`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: ${({ secondary }) => (secondary ? '0 32px' : '0 22px 0 18px')};
  font-size: ${({ secondary }) => (secondary ? '14px' : '16px')};
  ${({ isPushed, hot }) => (!isPushed ? `padding: 0 ${hot ? '12' : '22'}px 0 10.3px; width: ${MENU_ENTRY_HEIGHT}px` : '')}

  background: linear-gradient(90.28deg, #292929 0%, #242424 100%), #303030;
  border: 1px solid #2e2e2e;
  box-sizing: border-box;
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.4), -4px -4px 12px rgba(255, 255, 255, 0.05);
  border-radius: 52px;
  user-select: none;
  white-space: pre;

  &:hover {
    background: linear-gradient(90.28deg, #242424 0%, #202020 100%);
    border: 1px solid #2e2e2e;
    box-sizing: border-box;
    box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.4), -4px -4px 12px rgba(255, 255, 255, 0.05);
    border-radius: 52px;

    > svg:last-child * {
      stroke: white;
      opacity: 1;
    }
    :after {
       background: linear-gradient(90.28deg, #242424 0%, #202020 100%);
    }
  }
  &:active {
    background: linear-gradient(90.28deg, #242424 0%, #1f1f1f 100%), #212121;
    box-shadow: inset 0px -1px 0px rgba(129, 129, 129, 0.15), inset 0px 4px 25px rgba(0, 0, 0, 0.25);
    border-radius: 52px;
  }

  color: ${({ isactive }) => (isactive ? '#FFFFFF' : '#D3D3D3')};
  ${({ isactive }) =>
    isactive &&
    `
      > a > svg * {
        stroke: white !important;
      }
      .should-fill {
        fill: #FFFFFF !important;
        stroke: none !important;
      }
      > a {
         color: white !important;
      }
      @media screen and (max-width: 968px) {
        > a {
          color: #009CE1 !important;
        }
      }
    background: linear-gradient(90.28deg, #242424 0%, #1F1F1F 100%), #212121;
    box-shadow: inset 0px -1px 0px rgba(129, 129, 129, 0.15), inset 0px 4px 25px rgba(0, 0, 0, 0.25);
    border-radius: 52px;
    // box-shadow: 0px 6px 12px rgba(185, 189, 208, 0.4);
    // border-radius: 6px;
    `}
  transition: color 200ms ease-in-out, border-radius 200ms ease-in-out, padding 200ms ease-in-out;

  a {
    color: ${({ isactive }) => (isactive ? '#FFFFFF' : '#909090')};
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  a > div {
    margin-left: 2px;
  }

  svg {
    fill: ${({ theme }) => theme.colors.textSubtle};
  }

  svg * {
    // stroke: #909090;
    transition: fill 200ms ease-in-out, stroke 200ms ease-in-out, opacity 200ms ease-in-out;
  }

  div {
    color: #d3d3d3;
  }

  &:hover div {
    color: #ffffff;
  }

  & a {
    transition: color 200ms ease-in-out;
  }

  &:hover a {
    color: #ffffff !important;
  }

  &:hover svg:not(:last-child) * {
    ${({ fillStroke }) => (fillStroke ? 'stroke: #FFFFFF;' : 'fill: #FFFFFF;')}
    &.should-fill {
      fill: #ffffff;
      stroke: none;
    }
  }

  // Safari fix
  flex-shrink: 0;

  &.rainbow {
    -webkit-background-clip: text;
    animation: ${rainbowAnimation} 3s ease-in-out infinite;
    background: ${({ theme }) => theme.colors.gradients.bubblegum};
    background-size: 200% 100%;
    font-weight: bold;
  }
  
  position: relative;
  overflow: hidden;
  
  ${({ blink }) => blink ? `
    :before {
      animation: move-light 5s linear infinite; 
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 60px;
      height: 100%;
      background-color: rgba(255, 159, 47, 0.6);
      transform: translateX(-4em) skewX(-45deg);
    }
    @media screen and (max-width: 967px) {
      :before {
        animation: mobile-move-light 6.5s linear infinite; 
      }
    }
    :after {
      content: '';
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: inherit;
      width: 99%;
      height: 95%;
      background: linear-gradient(90.28deg, #292929 0%,#242424 100%),#303030;
      z-index: 1;
    }
    > * {
      z-index: 2;
    }
  ` : ''}
  
  @keyframes move-light {
    0% {
      transform: translateX(-4em) skewX(-45deg)
      }
    8% {
      transform: translateX(15.5em) skewX(-45deg)
      }
    100% {
      transform: translateX(15.5em) skewX(-45deg)
    }
   }
   
   @keyframes mobile-move-light {
    0% {
      transform: translateX(-4em) skewX(-45deg)
      }
    8% {
      transform: translateX(22.5em) skewX(-45deg)
      }
    100% {
      transform: translateX(22.5em) skewX(-45deg)
    }
   }

  @media screen and (max-width: 967px) {
    border-radius: 0;
    box-shadow: none;
    border: none !important;
    border-bottom: ${({ single }) => (single ? '1px solid #313131' : '')} !important;
    background: transparent;

    :hover {
      background: none;
      box-shadow: none;
    }

    :active {
      background: none;
      box-shadow: none;
    }

    a:hover {
      color: #009ce1 !important;
    }
  }

  @media screen and (max-height: 650px) {
    ${({ isPushed }) => (!isPushed ? 'padding: 0 24px 0 7.3px;' : '')}
  }
`
MenuEntry.defaultProps = {
  secondary: false,
  isactive: false,
  role: 'button',
}

export { MenuEntry, LinkLabel }
