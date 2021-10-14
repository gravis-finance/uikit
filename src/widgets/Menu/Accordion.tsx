import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-multi-lang'
import { MENU_ENTRY_HEIGHT } from './config'
import { MenuEntry, LinkLabel } from './MenuEntry'
import { PushedProps } from './types'
import { ArrowDropDownIcon } from '../../components/Svg'

interface Props extends PushedProps {
  label: string
  icon: React.ReactElement
  initialOpenState?: boolean
  className?: string
  blink?: boolean
}

const Container = styled.div<{ isOpen: boolean; fillStroke?: boolean; isPushed?: boolean }>`
  display: flex;
  flex-direction: column;
  // Safari fix
  flex-shrink: 0;
  border-radius: 6px;
  ${({ isOpen, isPushed }) =>
    isOpen && isPushed ? 'box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.4), -4px -4px 12px rgba(255, 255, 255, 0.05);' : ''}
  > div:first-child {
    ${({ isOpen, isPushed }) =>
      isOpen && isPushed
        ? `
      border-radius: 6px 6px 0 0; 
      border-bottom: none; 
      box-shadow: none;
      &:hover {
          border-radius: 6px 6px 0 0; 
          border-bottom: none; 
          box-shadow: none;
      }
    `
        : ''}
  }
  div:first-child > div {
    margin-left: 1px;
    letter-spacing: 0.1px;
    ${({ isOpen }) => isOpen && `color: #FFFFFF;`}
  }
  @media screen and (max-width: 967px) {
    box-shadow: none;
    background: transparent;
  }
  div:first-child > svg:first-child * {
    ${({ isOpen, fillStroke }) => (isOpen ? (fillStroke ? 'stroke: #FFFFFF' : `fill: #FFFFFF;`) : '')}
  }

  // @media screen and (max-width: 968px) {
  //   > div > svg:last-child {
  //     display: none;
  //   }
  // }

  // @media screen and (min-width: 968px) {
  //   ${({ isOpen }) =>
    isOpen &&
    `
  //   box-shadow: 0px 6px 12px rgba(185, 189, 208, 0.4);
  //   border-radius: 6px;
  // `};
  // }
  ${({ isPushed }) =>
    !isPushed
      ? `
    > div:last-child {
      display: none
    }
  `
      : ''}
`

const AccordionContent = styled.div<{ isOpen: boolean; isPushed: boolean; maxHeight: number }>`
  max-height: ${({ isOpen, maxHeight }) => (isOpen ? `${maxHeight}px` : 0)};
  transition: max-height 0.3s ease-out, border-radius 300ms ease-in-out;
  overflow: hidden;
  border-radius: 0 0 6px 6px;
  background: linear-gradient(90.28deg, #242424 0%, #202020 100%), linear-gradient(90.28deg, #292929 0%, #242424 100%),
    #303030;
  ${({ isOpen }) => (isOpen ? `border: 1px solid #2E2E2E; border-top: none;` : '')}
  box-sizing: border-box;

  @media screen and (max-width: 967px) {
    background: transparent;
    border: none;
  }

  > div {
    box-shadow: none;
    border: none;
    border-radius: 0;
  }

  > div:hover {
    box-shadow: none;
    border: none;
    border-radius: 0;
  }

  > div > a {
    padding-left: 28px;
    color: #909090;
    @media screen and (max-width: 967px) {
      padding-left: 44px;
    }
  }

  // @media screen and (max-width: 968px) {
  //   max-height: ${({ maxHeight }) => `${maxHeight}px`};
  // }
`

const StyledArrowDropDown = styled(ArrowDropDownIcon)<{ isOpen?: boolean }>`
  transition: transform 200ms ease-in-out;
  ${({ isOpen }) =>
    isOpen
      ? `transform: rotate(180deg);
     > * {
      stroke: white;
      opacity: 1;
     }
    `
      : ''}
`

const Accordion: React.FC<Props> = React.forwardRef(
  (
    { label, icon, isPushed, pushNav, initialOpenState = false, children, className, blink, ...restProps },
    ref: any
  ) => {
    const [isOpen, setIsOpen] = useState(initialOpenState)
    const t = useTranslation()

    const handleClick = () => {
      if (isPushed) {
        setIsOpen((prevState) => !prevState)
      } else {
        pushNav(true)
        setIsOpen(true)
      }
    }

    const onClickHandler = (event: any) => {
      if (!event.target.closest(Container)) setIsOpen(false)
    }

    useEffect(() => {
      document.addEventListener('click', onClickHandler)
      return () => document.removeEventListener('click', onClickHandler)
    })

    useEffect(() => {
      setIsOpen(initialOpenState)
    }, [initialOpenState, isPushed])

    const fillStokeTranslations = [
      t('mainMenu.analytics.analytics'),
      t('mainMenu.ino.ino'),
      t('mainMenu.asteroidMining'),
      t('mainMenu.farming')
    ]

    return (
      <Container
        isOpen={isOpen}
        fillStroke={fillStokeTranslations.includes(label)}
        isPushed={isPushed}
        ref={ref}
        {...restProps}
      >
        <MenuEntry
          onClick={handleClick}
          className={className}
          isPushed={isPushed}
          fillStroke={fillStokeTranslations.includes(label)}
          blink={blink}
        >
          {icon}
          <LinkLabel isPushed={isPushed}>{label}</LinkLabel>
          <StyledArrowDropDown isOpen={isOpen} />
        </MenuEntry>
        <AccordionContent
          isOpen={isOpen}
          isPushed={isPushed}
          maxHeight={React.Children.count(children) * MENU_ENTRY_HEIGHT}
        >
          {children}
        </AccordionContent>
      </Container>
    )
  }
)

export default Accordion
