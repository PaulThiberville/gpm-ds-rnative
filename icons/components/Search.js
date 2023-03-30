import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function SvgSearch(props) {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.525 1.6C6.044 1.6 1.6 6.044 1.6 11.525c0 5.481 4.444 9.925 9.925 9.925a9.925 9.925 0 100-19.85zm0 1.8a8.125 8.125 0 110 16.25 8.125 8.125 0 010-16.25zm8.62 15.483a.9.9 0 00-1.181 1.354l1.9 1.9.092.08a.9.9 0 001.18-1.353l-1.9-1.9-.092-.08z"
        fill="#8E8E95"
      />
    </Svg>
  )
}

export default SvgSearch
