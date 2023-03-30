import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function SvgSetting(props) {
  return (
    <Svg
      width={40}
      height={40}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.877 0h.246c4.186 0 7.735.835 10.669 2.404a16.355 16.355 0 016.804 6.804C39.165 12.142 40 15.691 40 19.878v.245c0 4.186-.836 7.735-2.404 10.669a16.355 16.355 0 01-6.804 6.804C27.858 39.165 24.309 40 20.122 40h-.245c-4.186 0-7.735-.836-10.669-2.404a16.355 16.355 0 01-6.804-6.804C.835 27.858 0 24.309 0 20.122v-.245c0-4.186.835-7.735 2.404-10.669a16.355 16.355 0 016.804-6.804C12.142.835 15.691 0 19.878 0z"
        fill="#F4F4F4"
      />
      <Path
        d="M24.167 27.4l-.374-.65.374.65zm-3.086 1.486l-.156-.733.156.733zM15.833 27.4l-.375.65.375-.65zm3.086 1.486l.156-.733-.156.733zm9.366-5.638l-.72-.206.72.206zm-3.952 4.056l.374.65-.374-.65zm2.656-1.784l-.543-.517.543.517zm-2.656-12.824l.374-.65-.374.65zm2.656 1.784l-.543.517.543-.517zm1.296 2.272l-.72.206.72-.206zM15.833 12.6l-.375-.65.375.65zm3.086-1.486l.156.733-.156-.733zm5.248 1.486l-.374.65.374-.65zm-3.086-1.486l-.156.733.156-.733zM11.5 20h-.75.75zm.214-3.248l.722.206-.722-.206zm3.953-4.056l.375.65-.375-.65zm-2.656 1.784l-.544-.517.544.517zm-1.296 8.768l-.722.206.721-.206zm3.952 4.056l.375-.65-.375.65zm-2.656-1.784l-.544.517.544-.517zm3.03-12.174l.166-.096-.749-1.3-.165.096.749 1.3zm7.752-.096l.165.096.75-1.3-.166-.095-.75 1.3zm.165 13.404l-.165.096.749 1.3.165-.096-.749-1.3zm-7.75.096l-.166-.096-.75 1.3.166.095.75-1.3zm7.585 0c-1.564.902-2.206 1.261-2.868 1.402l.313 1.468c.949-.203 1.828-.72 3.304-1.57l-.75-1.3zm-8.335 1.3c1.476.85 2.355 1.367 3.304 1.57l.313-1.468c-.662-.14-1.304-.5-2.868-1.402l-.749 1.3zm5.467.102c-.61.13-1.24.13-1.85 0l-.313 1.468a5.936 5.936 0 002.476 0l-.313-1.468zM27.75 20c0 1.71-.007 2.417-.186 3.042l1.442.412c.25-.875.244-1.834.244-3.454h-1.5zm-3.043 7.954c1.377-.794 2.2-1.26 2.826-1.917l-1.087-1.034c-.44.462-1.032.812-2.488 1.651l.75 1.3zm2.857-4.912a4.727 4.727 0 01-1.118 1.96l1.087 1.035a6.227 6.227 0 001.473-2.582l-1.442-.413zm-3.606-9.696c1.456.839 2.048 1.189 2.488 1.651l1.087-1.034c-.626-.657-1.45-1.123-2.826-1.917l-.749 1.3zM29.25 20c0-1.62.007-2.58-.244-3.454l-1.442.412c.18.625.186 1.332.186 3.042h1.5zm-2.804-5.003a4.727 4.727 0 011.118 1.961l1.442-.412a6.227 6.227 0 00-1.473-2.583l-1.087 1.034zM16.207 13.25c1.564-.902 2.206-1.261 2.868-1.402l-.313-1.468c-.949.203-1.828.72-3.304 1.57l.75 1.3zm8.335-1.3c-1.476-.85-2.355-1.367-3.305-1.57l-.312 1.467c.662.142 1.304.501 2.868 1.403l.749-1.3zm-5.467-.102c.61-.13 1.24-.13 1.85 0l.313-1.468a5.936 5.936 0 00-2.476 0l.313 1.467zM12.25 20c0-1.71.007-2.417.186-3.042l-1.443-.412c-.25.875-.243 1.834-.243 3.454h1.5zm3.043-7.954c-1.377.794-2.2 1.26-2.826 1.917l1.087 1.034c.44-.462 1.032-.812 2.488-1.651l-.75-1.3zm-2.857 4.912a4.727 4.727 0 011.118-1.96l-1.087-1.035a6.227 6.227 0 00-1.474 2.583l1.443.412zM10.75 20c0 1.62-.007 2.58.243 3.454l1.443-.412c-.18-.625-.186-1.332-.186-3.042h-1.5zm5.292 6.654c-1.456-.839-2.048-1.189-2.488-1.651l-1.087 1.034c.625.657 1.45 1.123 2.826 1.917l.749-1.3zm-5.049-3.2c.278.97.783 1.857 1.474 2.583l1.087-1.034a4.727 4.727 0 01-1.118-1.961l-1.443.412zM20 21.973c-1.035 0-1.906-.866-1.906-1.973h-1.5c0 1.9 1.507 3.473 3.406 3.473v-1.5zM21.906 20c0 1.107-.87 1.973-1.906 1.973v1.5c1.899 0 3.406-1.573 3.406-3.473h-1.5zM20 18.027c1.035 0 1.906.866 1.906 1.973h1.5c0-1.9-1.507-3.473-3.406-3.473v1.5zm0-1.5c-1.899 0-3.406 1.573-3.406 3.473h1.5c0-1.107.87-1.973 1.906-1.973v-1.5z"
        fill={props.color || '#212121'}
      />
    </Svg>
  )
}

export default SvgSetting