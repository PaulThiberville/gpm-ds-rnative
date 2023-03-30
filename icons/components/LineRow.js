import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function SvgLineRow(props) {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M19.11 13H4.89C3.54 13 3 13.602 3 15.099V18.9C3 20.398 3.54 21 4.89 21h14.22c1.35 0 1.89-.602 1.89-2.099V15.1C21 13.602 20.46 13 19.11 13zM19.11 3H4.89C3.54 3 3 3.602 3 5.099V8.9C3 10.398 3.54 11 4.89 11h14.22c1.35 0 1.89-.602 1.89-2.099V5.1C21 3.602 20.46 3 19.11 3z"
        stroke={props.color || '#212121'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SvgLineRow
