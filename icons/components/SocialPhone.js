import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function SvgSocialPhone(props) {
  return (
    <Svg width={32} height={32} xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path
        fill="#0f0"
        d="M7.444 30h17.112A5.444 5.444 0 0030 24.556V7.444A5.444 5.444 0 0024.556 2H7.444A5.444 5.444 0 002 7.444v17.112A5.444 5.444 0 007.444 30z"
      />
      <Path
        fill="#fff"
        d="M24.906 21.476l-3.588-2.373a1.4 1.4 0 00-1.428-.013l-1.538.897a.823.823 0 01-.565.113.844.844 0 01-.353-.157 25.159 25.159 0 01-2.886-2.492 25.027 25.027 0 01-2.493-2.887c-.007-.01-.119-.15-.156-.353a.828.828 0 01.113-.565l.896-1.538c.258-.443.252-.99-.013-1.428l-2.373-3.587a.95.95 0 00-1.333-.258s-1.124.769-1.495 1.03c-.594.419-.785 1.055-.786 1.942-.002 1.247 1.073 5.155 5.6 9.683 4.529 4.528 8.436 5.602 9.684 5.6.887 0 1.523-.192 1.941-.786.262-.37 1.03-1.495 1.03-1.495a.95.95 0 00-.257-1.333z"
      />
    </Svg>
  )
}

export default SvgSocialPhone
