import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function SvgLineArrowRight(props) {
  return (
    <Svg
      width={8}
      height={12}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1.5 1l5 5-5 5"
        stroke={props.color || '#8E8E95'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SvgLineArrowRight
