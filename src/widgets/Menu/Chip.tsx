import styled from 'styled-components'

export const SubitemsChipContainer = styled.div<{ color: string; animation?: boolean }>`
  min-width: max-content;
  color: white;
  align-items: center;
  background-color: transparent;
  border: 2px solid ${({ color }) => color};
  border-radius: 16px;
  display: inline-flex;
  font-size: 11px;
  font-weight: 400;
  line-height: 1.5;
  padding: 1px 7px;
  white-space: nowrap;
  position: relative;
  overflow: hidden;

  ${({ animation }) =>
    animation &&
    `
    :after {
    content: '';
    position: absolute;
    width: 10px;
    height: 22px;
    background: rgba(255, 255, 255, 0.5);
    transform: skew(-30deg);
    animation: shine-hot 2s ease-in-out infinite;
  }
  `}

  @keyframes shine-hot {
    0% {
      left: -12px;
    }
    50% {
      left: 100%;
    }
    100% {
      left: 100%;
    }
  }
`

export const ChipContainer = styled.div<{ color: string }>`
  color: white;
  align-items: center;
  background-color: transparent;
  border: 2px solid ${({ color }) => color};
  border-radius: 16px;
  display: inline-flex;
  font-size: 10px;
  font-weight: 400;
  height: auto;
  justify-content: center;
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  padding: 2px 5px;
`
