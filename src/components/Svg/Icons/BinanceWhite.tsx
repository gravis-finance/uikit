import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
    return (
        <Svg width="21" height="20" viewBox="0 0 21 20" fill="none" {...props}>
                <path fillRule="evenodd" clipRule="evenodd" d="M8.0231 8.99853L10.5513 6.2264L13.0809 9L14.552 7.38691L10.5513 3L6.552 7.38545L8.0231 8.99853ZM6.66401 9.99994L5.08205 8.41797L3.5 10L5.08197 11.582L6.66401 9.99994ZM10.5521 13.7735L8.02473 11.0014L6.552 12.6123L6.55406 12.6146L10.5521 17L14.5513 12.6131L14.552 12.6122L13.0806 11L10.5521 13.7735ZM15.9182 11.582L17.5003 10L15.9183 8.41803L14.3362 10.0001L15.9182 11.582ZM12.551 9.99897H12.5502L12.552 9.99993L12.551 10.001L10.552 12L8.55476 10.0028L8.552 9.99993L8.55476 9.99718L8.90491 9.64703L9.07455 9.47726H9.07469L10.552 8L12.551 9.99897Z" fill="white"/>
        </Svg>
    )
}

export default Icon