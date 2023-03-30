import * as React from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'

function SvgEyesPswOpen(props) {
  return (
    <Svg
      width={20}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#eyesPswOpen_svg__clip0)" fill="#000">
        <Path d="M10 7.273A2.73 2.73 0 007.273 10 2.73 2.73 0 0010 12.727 2.73 2.73 0 0012.727 10 2.73 2.73 0 0010 7.273z" />
        <Path d="M10 3.182C5.455 3.182 1.573 6.009 0 10c1.573 3.991 5.455 6.818 10 6.818 4.55 0 8.427-2.827 10-6.818-1.573-3.99-5.45-6.818-10-6.818zm0 11.364A4.547 4.547 0 015.455 10 4.547 4.547 0 0110 5.455 4.547 4.547 0 0114.546 10 4.547 4.547 0 0110 14.546z" />
      </G>
      <Defs>
        <ClipPath id="eyesPswOpen_svg__clip0">
          <Path fill="#fff" d="M0 0h20v20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgEyesPswOpen
