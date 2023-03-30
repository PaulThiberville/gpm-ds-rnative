import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function SvgLineSaved(props) {
  return (
    <Svg
      width={24}
      height={25}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M19 20.017V8.595c0-2.204-1.575-4.1-3.76-4.53a16.8 16.8 0 00-6.48 0C6.576 4.495 5 6.391 5 8.595v11.422c0 1.337 1.468 2.169 2.634 1.493l3.187-1.844a2.357 2.357 0 012.358 0l3.187 1.844c1.166.675 2.634-.156 2.634-1.493z"
        stroke={props.color || '#212121'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SvgLineSaved
