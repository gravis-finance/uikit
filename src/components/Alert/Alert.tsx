import React from 'react'
import styled, { DefaultTheme } from 'styled-components'
import ErrorIcon from '../Svg/Icons/Error'
import PopupSuccessIcon from '../Svg/Icons/PopupSuccess'
import InfoIcon from '../Svg/Icons/Info'
import { Text } from '../Text'
import { CloseIcon } from '../Svg'
import { Flex } from '../Flex'
import { AlertProps, variants } from './types'

interface ThemedIconLabel {
  variant: AlertProps['variant']
  theme: DefaultTheme
  hasDescription: boolean
}

const getThemeColor = ({ theme, variant = variants.INFO }: ThemedIconLabel) => {
  switch (variant) {
    case variants.DANGER:
      return theme.colors.failure
    case variants.WARNING:
      return theme.colors.warning
    case variants.SUCCESS:
      return theme.colors.success
    case variants.INFO:
    default:
      return theme.colors.secondary
  }
}

const getIcon = (variant: AlertProps['variant'] = variants.INFO) => {
  switch (variant) {
    case variants.DANGER:
      return ErrorIcon
    case variants.WARNING:
      return ErrorIcon
    case variants.SUCCESS:
      return PopupSuccessIcon
    case variants.INFO:
    default:
      return InfoIcon
  }
}

const IconLabel = styled.div<ThemedIconLabel>`
  background-color: ${getThemeColor};
  border-radius: 16px 0 0 16px;
  color: ${({ theme }) => theme.alert.background};
  width: 6px;
`

const withHandlerSpacing = 32 + 12 + 8 // button size + inner spacing + handler position
const Details = styled.div<{ hasHandler: boolean }>`
  flex: 1;
  padding-bottom: 12px;
  padding-right: ${({ hasHandler }) => (hasHandler ? `${withHandlerSpacing}px` : '12px')};
  padding-top: 22px;
`

const CloseHandler = styled.div`
  border-radius: 0 16px 16px 0;
  right: 8px;
  position: absolute;
  top: 8px;
`

const StyledAlert = styled(Flex)`
  position: relative;
  background-color: #353535;
  border-radius: 6px;
  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);
`

const StyledIconContainer = styled.div`
  align-self: center;
  margin: 24px;
`

const StyledClose = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 24px;
  height: 24px;
  box-sizing: border-box;
  border-radius: 45px;
  display: flex;

  > svg {
    margin: auto;
  }

  :hover {
    cursor: pointer;
    background: linear-gradient(90.28deg, #242424 0%, #202020 100%);
    box-sizing: border-box;
    box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.4), -4px -4px 12px rgba(255, 255, 255, 0.05);
  }
`

const Alert: React.FC<AlertProps> = ({ title, children, variant, onClick }) => {
  const Icon = getIcon(variant)

  return (
    <StyledAlert>
      <IconLabel variant={variant} hasDescription={!!children} />
      <StyledIconContainer>
        <Icon color="currentColor" width="48px" />
      </StyledIconContainer>
      <Details hasHandler={!!onClick}>
        <Text bold>{title}</Text>
        {typeof children === 'string' ? (
          <Text as="p" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
            {children}
          </Text>
        ) : (
          children
        )}
      </Details>
      {onClick && (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <CloseHandler onClick={onClick}>
          <StyledClose>
            <CloseIcon width="24px" color="currentColor" />
          </StyledClose>
        </CloseHandler>
      )}
    </StyledAlert>
  )
}

export default Alert
