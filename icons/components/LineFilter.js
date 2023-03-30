import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function SvgLineFilter(props) {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M4.68 16L3 16.044M4.68 16a2.4 2.4 0 104.8 0 2.4 2.4 0 00-4.8 0zm5.489.044H21m-8.199-8.493H3m18 0h-2.52m-.6-.151a2.4 2.4 0 11-4.8 0 2.4 2.4 0 014.8 0z"
        stroke={props.color || '#212121'}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default SvgLineFilter
