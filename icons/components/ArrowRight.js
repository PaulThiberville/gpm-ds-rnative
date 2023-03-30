import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function SvgArrowRight(props) {
  return (
    <Svg
      width={24}
      height={25}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M6.5 12.75h11m0 0l-4.588-4m4.588 4l-4.588 4"
        stroke={props.color || '#212121'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SvgArrowRight
