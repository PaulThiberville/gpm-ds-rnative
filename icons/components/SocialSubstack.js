import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function SvgSocialSubstack(props) {
  return (
    <Svg
      width={32}
      height={32}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M2.792 14.68v7.66h26.416v-7.66zM2.792 8.34v3.17h26.416V8.34zM2.792 2v3.17h26.416V2zM2.792 22.34h26.416V30L16 22.34 2.793 30z"
        fill="#ff6712"
      />
    </Svg>
  )
}

export default SvgSocialSubstack
