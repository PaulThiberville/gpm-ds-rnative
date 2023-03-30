import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function SvgSocialMym(props) {
  return (
    <Svg
      width={32}
      height={32}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M16.01 15.27L22.452 2h5.385l-9.385 17.692V30h-4.885V19.692L4.164 2h5.403z"
        fill="#c0392b"
      />
    </Svg>
  )
}

export default SvgSocialMym
