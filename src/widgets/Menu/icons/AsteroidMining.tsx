import React from 'react'
import Svg from '../../../components/Svg/Svg'
import { SvgProps } from '../../../components/Svg/types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M12 11.9995L5 18.9995" stroke="#989899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M6.01803 12.9996L2.40228 12.3082C2.00447 12.2321 1.86456 11.8323 2.15274 11.5981L5.02821 9.27014C5.22137 9.11375 5.48344 9.02415 5.75804 9.02246L8.5 9.02258" stroke="#989899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M20.113 9.01002L20.9658 4.90615C21.1981 3.78941 20.2101 2.80145 19.0934 3.03366L14.9898 3.88652C13.7812 4.13774 12.673 4.73622 11.8012 5.60913L8.4342 8.97518C7.14968 10.2598 6.31375 11.9254 6.04988 13.7229L6.03827 13.8C5.8715 14.9473 6.2557 16.1052 7.07475 16.9254C7.89379 17.7444 9.05271 18.1287 10.2 17.9608L10.2771 17.9492C12.0745 17.6864 13.7401 16.8494 15.0246 15.5648L18.3905 12.1987C19.2634 11.3269 19.8618 10.2186 20.113 9.01002V9.01002Z" stroke="#989899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M13 4.99951C15.3558 6.60604 17.3935 8.64375 19 10.9995" stroke="#989899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M11 17.9815L11.6915 21.5972C11.7675 21.995 12.1674 22.1349 12.4015 21.8468L14.7295 18.9713C14.8859 18.7781 14.9755 18.5161 14.9772 18.2415L15 15.4995" stroke="#989899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </Svg>
  )
}

export default Icon
