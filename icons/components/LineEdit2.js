import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function SvgLineEdit2(props) {
  return (
    <Svg
      width={24}
      height={25}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M17.25 11.742c-2.121.707-4.95-2.121-4.242-4.242m.871-.871l-4.57 4.57a15.501 15.501 0 00-4.077 7.2l-.22.884a.376.376 0 00.455.455l.883-.22a15.501 15.501 0 007.202-4.078l4.57-4.57a3 3 0 10-4.243-4.241z"
        stroke={props.color || '#212121'}
        strokeWidth={1.5}
      />
    </Svg>
  )
}

export default SvgLineEdit2
