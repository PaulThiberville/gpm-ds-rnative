import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function SvgLineClose(props) {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M8 16l4-4m0 0l4-4m-4 4L8 8m4 4l4 4"
        stroke={props.color || '#212121'}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default SvgLineClose
