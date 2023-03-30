import React from 'react'
import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components'

const BackgroundIcon = styled.View`
  ${({ theme }) => css`
    width: ${theme.size.std};
    height: ${theme.size.std};
    background: ${theme.colors.secondary};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${theme.borderRadius.l};
  `}
`

const IconButton = ({ onPress, icon, ...props }) => {
  return (
    <TouchableOpacity onPress={onPress} {...props}>
      <BackgroundIcon>{icon}</BackgroundIcon>
    </TouchableOpacity>
  )
}

export default IconButton
