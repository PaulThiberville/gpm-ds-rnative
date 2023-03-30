import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function SvgAdd(props) {
  return (
    <Svg
      width={56}
      height={56}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M22 28h12m-6-6v12"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default SvgAdd
