import React, { useState } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-multi-lang'
import InputCopy from '../Svg/Icons/InputCopy'

export type CopyButtonType = {
  textToCopy: string
}

const StyledInputCopy = styled(InputCopy)<{ isCopyTriggered?: boolean }>`
  cursor: pointer;

  > * {
    stroke: ${({ isCopyTriggered }) => (isCopyTriggered ? '#009CE1' : 'white')};
    transition: stroke 200ms ease-in-out;
  }

  :hover {
    > * {
      stroke: #009ce1;
    }
  }
`

const CopyContainer = styled.div`
  position: relative;
`

const Tooltip = styled.div`
  background: #ffffff;
  border-radius: 6px;
  position: absolute;
  padding: 4px;
  width: fit-content;
  font-size: 11px;
  white-space: pre;
  left: -48px;
  top: 32px;

  ::before {
    position: absolute;
    width: 8px;
    height: 8px;
    z-index: 9998;
    top: -4px;
    left: 56px;

    content: '';
    transform: rotate(45deg);
    background: white;
  }
`

const CopyButton: React.FC<CopyButtonType> = ({ textToCopy }) => {
  const [isCopyTriggered, setCopyTriggered] = useState(false)

  const t = useTranslation()

  const CopyToClipboard = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(textToCopy)
      setCopyTriggered(true)
      setTimeout(() => setCopyTriggered(false), 2000)
    }
  }

  return (
    <CopyContainer>
      <StyledInputCopy
        data-id="copy-button"
        height="24px"
        width="24px"
        onClick={CopyToClipboard}
        isCopyTriggered={isCopyTriggered}
      />
      {isCopyTriggered && <Tooltip>{t('copiedToClipBoard')}</Tooltip>}
    </CopyContainer>
  )
}

export default CopyButton
