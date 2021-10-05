import React from 'react'
import styled from 'styled-components'


const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`

const StyledCheckbox = styled.div<{ size: number, checked: boolean }>`
  display: inline-block;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: linear-gradient(90.28deg, #292929 0%, #242424 100%), linear-gradient(90.28deg, #292929 0%, #242424 100%), #F4F5FA;
  transition: all 150ms;
  cursor: pointer;
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.4), -4px -4px 12px rgba(255, 255, 255, 0.05);
  border-radius: 4px;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }

  ${Icon} {
    visibility: ${props => props.checked ? 'visible' : 'hidden'}
  }
`

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`

interface Props {
  size?: number
  onChange?: any
  className?: string
  checked: boolean
}

export const Checkbox = ({ className, size = 20, onChange, checked, ...props }: Props) => (
  <CheckboxContainer onClick={onChange} className={className}>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox size={size} checked={checked}>
      <Icon viewBox={`0 0 ${size} ${size}`}>
        <svg width={size} height={size} viewBox={`-${size * 0.25} -${size * 0.25} ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 1L3.5 9L1 5.36364" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
)
