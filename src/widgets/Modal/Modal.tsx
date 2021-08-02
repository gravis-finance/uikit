import React from 'react'
import styled, { CSSProperties } from 'styled-components'
import Heading from '../../components/Heading/Heading'
import Flex from '../../components/Flex/Flex'
import { ArrowBackIcon, CloseIcon } from '../../components/Svg'
import { IconButton } from '../../components/Button'
import { InjectedProps } from './types'

interface Props extends InjectedProps {
  title: React.ReactChild
  style?: CSSProperties
  hideCloseButton?: boolean
  onBack?: () => void
  bodyPadding?: string
  styledModalContent?: any
}

const StyledModal = styled.div`
  background: #1c1c1c;
  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndices.modal};
  overflow-y: auto;
  overflow-x: hidden;
  ${({ theme }) => theme.mediaQueries.xs} {
    width: auto;
    min-width: 360px;
    max-width: 100%;
  }
`

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  align-items: center;
  padding: 16px 24px;
`

const ModalTitle = styled(Flex)<{ hideCloseButton?: boolean }>`
  align-items: center;
  flex: 1;
  ${({ hideCloseButton }) => (hideCloseButton ? 'height: 39px;' : '')}
`
const ModalContent = styled(Flex)`
  padding: 30px 24px;
  box-sizing: border-box;
`

const StyledHeading = styled(Heading)`
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
`

const StyledIconButton = styled(IconButton)`
   > svg * {
     transition: stroke 200ms ease-in-out;
   }
  :hover {
    background: transparent !important;
    
    > svg * {
      stroke: white;
    }
  }
`

const Modal: React.FC<Props> = ({
  style,
  title,
  onDismiss,
  onBack,
  children,
  hideCloseButton = false,
  bodyPadding = '24px',
  styledModalContent,
}) => (
  <StyledModal style={style}>
    <ModalHeader>
      <ModalTitle hideCloseButton={hideCloseButton}>
        {onBack && (
          <StyledIconButton variant="text" onClick={onBack} area-label="go back" mr="8px">
            <ArrowBackIcon color="primary" />
          </StyledIconButton>
        )}
        <StyledHeading>{title}</StyledHeading>
      </ModalTitle>
      {!hideCloseButton && (
        <IconButton buttonType="close" buttonSize="40px" onClick={onDismiss} aria-label="Close the dialog">
          <CloseIcon />
        </IconButton>
      )}
    </ModalHeader>
    <ModalContent p={bodyPadding} flexDirection="column" style={styledModalContent}>
      {children}
    </ModalContent>
  </StyledModal>
)

export default Modal
