import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function SvgLineStatus(props) {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M3.353 15.05l-.73.17.73-.17zm0-6.1l-.73-.17.73.17zm17.294 0l-.73.172.73-.172zm0 6.1l-.73-.172.73.172zm-5.597 5.597l-.172-.73.172.73zm-6.1 0l.172-.73-.172.73zm0-17.294l.172.73-.172-.73zm6.1 0l-.172.73.172-.73zm-7.193 8.87a.75.75 0 001.004 1.115l-1.004-1.115zm2.209-.979l.501.558-.501-.558zm1.561.197l.624-.417-.624.417zm.746 1.118l-.624.417.624-.417zm1.561.197l-.501-.558.501.558zm2.209-.979a.75.75 0 00-1.004-1.115l1.004 1.115zm-3.068 1.51l-.094.745.094-.745zm-2.15-2.575l-.093.745.093-.745zm-6.842 4.166a12.604 12.604 0 010-5.756l-1.46-.343a14.104 14.104 0 000 6.442l1.46-.343zm15.834-5.756a12.603 12.603 0 010 5.756l1.46.343a14.104 14.104 0 000-6.442l-1.46.343zm-5.039 10.795a12.603 12.603 0 01-5.756 0l-.343 1.46c2.119.497 4.323.497 6.442 0l-.343-1.46zM9.122 4.083a12.604 12.604 0 015.756 0l.343-1.46a14.103 14.103 0 00-6.442 0l.343 1.46zm0 15.834a6.761 6.761 0 01-5.039-5.039l-1.46.343a8.261 8.261 0 006.156 6.156l.343-1.46zm6.099 1.46a8.261 8.261 0 006.156-6.156l-1.46-.343a6.761 6.761 0 01-5.039 5.039l.343 1.46zm-.343-17.294a6.761 6.761 0 015.039 5.039l1.46-.343a8.261 8.261 0 00-6.156-6.156l-.343 1.46zM8.78 2.623a8.261 8.261 0 00-6.156 6.156l1.46.343a6.761 6.761 0 015.039-5.039l-.343-1.46zm.082 10.715l1.706-1.536-1.003-1.115-1.707 1.536 1.004 1.115zm2.142-1.481l.746 1.119 1.248-.833-.746-1.119-1.248.833zm3.433 1.456l1.707-1.536-1.004-1.115-1.706 1.536 1.003 1.115zm-2.687-.338c.143.214.292.442.443.611.165.185.415.399.79.446l.186-1.489a.356.356 0 01.142.05c.026.016.027.024.001-.005a1.838 1.838 0 01-.118-.155 13.848 13.848 0 01-.196-.29l-1.248.832zm1.684-.777c-.106.096-.19.17-.262.232-.073.063-.12.1-.153.121-.032.021-.029.015 0 .005a.356.356 0 01.15-.013l-.187 1.489c.374.047.67-.099.875-.237.188-.126.39-.31.58-.482l-1.003-1.115zm-2.866-.396c.106-.096.19-.17.262-.232.073-.063.12-.1.153-.121.032-.021.029-.015 0-.005a.356.356 0 01-.15.013l.187-1.489c-.374-.047-.67.099-.875.237-.188.126-.39.31-.58.482l1.003 1.115zm1.684-.777c-.143-.214-.292-.442-.443-.611-.165-.185-.415-.399-.79-.446l-.186 1.489a.356.356 0 01-.142-.05c-.026-.016-.027-.024-.001.005.025.03.062.076.118.155.055.078.117.17.196.29l1.248-.832z"
        fill={props.color || '#212121'}
      />
    </Svg>
  )
}

export default SvgLineStatus
