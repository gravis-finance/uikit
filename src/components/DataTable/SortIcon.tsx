import React from 'react'

export const SortIcon: React.FC<{ asc?: boolean }> = ({ asc }) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 8 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={asc ? { transform: 'rotate(180deg)' } : undefined}
    >
      <path
        d="M4.35463 3.6464L7.14674 0.853504C7.46165 0.538502 7.23855 0 6.79313 0L1.20735 0C0.76186 0 0.538791 0.53864 0.853841 0.853602L3.64752 3.6465C3.84281 3.84173 4.15939 3.84169 4.35463 3.6464Z"
        fill="currentColor"
      />
    </svg>
  )
}
