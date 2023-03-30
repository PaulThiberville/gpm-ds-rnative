import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function SvgLineLanguage(props) {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M3.353 8.95A7.511 7.511 0 018.95 3.353c2.006-.47 4.094-.47 6.1 0a7.511 7.511 0 015.597 5.597c.47 2.006.47 4.094 0 6.1a7.511 7.511 0 01-5.597 5.597c-2.006.47-4.094.47-6.1 0a7.511 7.511 0 01-5.597-5.597 13.354 13.354 0 010-6.1z"
        stroke={props.color || '#212121'}
        strokeWidth={1.5}
      />
      <Path
        d="M7 8.889h7.142M10.386 8v.889m3.571 6.804c-1.883.128-4.536-2.21-5.009-4.211m3.521-2.593a6.858 6.858 0 01-5.16 6.073m4.741 1.717l2.518-4.931 2.518 4.931"
        stroke={props.color || '#212121'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SvgLineLanguage
