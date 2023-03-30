import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function SvgLineCard(props) {
  return (
    <Svg
      width={24}
      height={25}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M3.203 9.45h17.594M2.885 15.901a13.077 13.077 0 010-6.302 7.353 7.353 0 015.546-5.407l.453-.101a14.401 14.401 0 016.232 0l.453.1A7.353 7.353 0 0121.115 9.6c.514 2.07.514 4.233 0 6.302a7.353 7.353 0 01-5.546 5.407l-.453.101a14.402 14.402 0 01-6.232 0l-.453-.1A7.353 7.353 0 012.885 15.9z"
        stroke={props.color || '#212121'}
        strokeWidth={1.5}
      />
      <Path
        d="M7 12.75h4"
        stroke={props.color || '#212121'}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default SvgLineCard
