import React from 'react'
import styled from 'styled-components'
import { ToggleProps } from './types'

const Container = styled.div<{ width?: number }>`
  width: ${({ width }) => width || ''}px;
  height: ${({ width }) => width ? width / 2 : ''}px;
`

const ToggleInput = styled.input<{ width?: number }>`
 appearance: none;
 position: relative;
 display: inline-block;
 width: inherit;
 height: inherit;
 margin: 0;
 vertical-align: top;
 background: linear-gradient(90.28deg, #292929 0%, #242424 100%);
 border-radius: 50px;
 box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.4), -4px -4px 12px rgba(255, 255, 255, 0.05);
 outline: none;
 cursor: pointer;
 
 &:after {
    content: "";
    
    display: inline-block;
    position: absolute;
    left: 6px;
    top: 6px;
    
    width: ${({ width }) => (width || 0) * 0.35}px;
    height: ${({ width }) => (width || 0) * 0.35}px;
    background-color: #242424;
    border-radius: 50%;
    box-shadow: inset 0px -1px 0px rgba(129, 129, 129, 0.15), inset 0px 4px 25px rgba(0, 0, 0, 0.25);
    
    transform: translateX(0);
    transition: all 0.3s cubic-bezier(0.2, 0.85, 0.32, 1.2);
  }
  &:checked::after {
    transform: translateX(calc(${({ width }) => width || ''}px - 42px));
    background-color: #fff;  
  }
  &:checked {
    background-color: blue;
  }
`

const Toggle: React.FC<ToggleProps> = ({ checked, width = 80, ...props }) => {
  const isChecked = !!checked

  return (
    <Container width={width}>
      <ToggleInput type="checkbox" height='60px' width={width} checked={isChecked} {...props} />
    </Container>
  )
}

export default Toggle
