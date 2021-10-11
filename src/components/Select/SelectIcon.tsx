import React from 'react'

type Props = {
  className?: string
}

export const SelectIcon: React.FC<Props> = (props) => {
  return (
    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" {...props}>
      <path
        opacity="0.5"
        d="M12.7071 1.35352L7.70712 6.35352C7.3166 6.74404 6.68343 6.74404 6.29291 6.35352L1.29291 1.35352"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}
