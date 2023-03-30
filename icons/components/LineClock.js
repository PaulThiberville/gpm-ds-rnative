import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function SvgLineClock(props) {
  return (
    <Svg
      width={20}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M2.794 7.459A6.26 6.26 0 017.46 2.794a11.128 11.128 0 015.082 0 6.26 6.26 0 014.665 4.665 11.128 11.128 0 010 5.082 6.26 6.26 0 01-4.665 4.665 11.128 11.128 0 01-5.082 0 6.26 6.26 0 01-4.665-4.665 11.128 11.128 0 010-5.082z"
        stroke="#8E8E95"
      />
      <Path
        d="M12.083 12.083l-2.365-1.505V7.5"
        stroke="#8E8E95"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SvgLineClock
