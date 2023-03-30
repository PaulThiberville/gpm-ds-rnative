import React from 'react'
import styled, { css } from 'styled-components'

const StyledTextInput = styled.TextInput`
  ${({ theme }) => css`
    background-color: ${theme.colors.grey1};
    border-radius: ${theme.borderRadius.l};
    padding: ${theme.space.std} ${theme.space.m};
    flex: 1;
    min-height: ${theme.size.m};
  `}
`

const TextInput = ({ ...props }) => {
  return <StyledTextInput {...props} />
}

export default TextInput
