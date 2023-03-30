import React from 'react'
import styled, { css } from 'styled-components'

const Button = styled.TouchableOpacity`
  ${({ theme, selected }) => css`
    background: ${selected ? theme.colors.primary : theme.colors.grey1};
    padding: ${theme.space.l} ${theme.space.m};
    height: ${theme.size.m};
    border-radius: ${theme.borderRadius.l};
    align-items: center;
    justify-content: center;
  `}
`
const WrapperButton = styled.View`
  ${({ theme }) => css`
    width: ${theme.size.l};
    margin-left: ${theme.space.xs};
  `}
`

const ButtonPostPicture = ({ icon, isSelected, ...props }) => {
  return (
    <WrapperButton>
      <Button selected={isSelected} {...props}>
        {icon}
      </Button>
    </WrapperButton>
  )
}
export default ButtonPostPicture
