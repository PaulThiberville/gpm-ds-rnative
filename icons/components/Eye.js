import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function SvgEye(props) {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M3.907 8.651c3.63-6.201 12.555-6.201 16.186 0a6.633 6.633 0 010 6.698c-3.63 6.201-12.555 6.201-16.186 0a6.633 6.633 0 010-6.698z"
        stroke={props.color || '#212121'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        clipRule="evenodd"
        d="M15.557 12.06c0 1.996-1.593 3.613-3.558 3.613-1.964 0-3.556-1.617-3.556-3.612 0-1.997 1.592-3.614 3.556-3.614 1.965 0 3.558 1.617 3.558 3.614z"
        stroke={props.color || '#212121'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SvgEye
