import * as React from 'react'
import Svg, { Path, G } from 'react-native-svg'

function SvgSocialStrava(props) {
  return (
    <Svg
      viewBox="0 0 0.205 0.205"
      width={32}
      height={32}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M.013.013h.179v.179h-.18z" fill="#fc4c02" />
      <G fill="#fff" fillRule="evenodd">
        <Path
          d="M.09.111l.028.05.027-.05H.128l-.01.02L.107.11z"
          opacity={0.6}
        />
        <Path d="M.093.04l.035.071h-.07zm0 .043l.014.028H.079z" />
      </G>
    </Svg>
  )
}

export default SvgSocialStrava
