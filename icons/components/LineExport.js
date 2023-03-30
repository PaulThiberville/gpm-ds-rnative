import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function SvgLineExport(props) {
  return (
    <Svg
      width={24}
      height={25}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M9.32 7.31l2.56-2.56 2.56 2.56m-2.56 7.68V4.82M4 12.81c0 4.42 3 8 8 8s8-3.58 8-8"
        stroke="#292D32"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SvgLineExport
