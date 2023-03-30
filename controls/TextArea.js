import React from 'react'
import styled, { css } from 'styled-components'

const Wrapper = styled.View`
  ${({ theme, bgWhite }) => css`
    padding: ${theme.space.std} ${theme.space.m};
    border: ${bgWhite ? `1px solid ${theme.colors.grey1}` : 'none'};
    background-color: ${bgWhite ? theme.colors.white : theme.colors.grey1};
    border-radius: ${theme.borderRadius.l};
    min-height: ${theme.size.l2};
    justify-content: space-between;
  `}
`

const Input = styled.TextInput`
  ${({ theme }) => css`
    width: ${theme.size.fill};
    padding: 0;
    margin-bottom: ${theme.space.xs};
  `}
`

const Count = styled.Text`
  ${({ theme }) => css`
    width: ${theme.size.fill};
    text-align: right;
    color: ${theme.colors.grey2};
    font-size: ${theme.size.xxs};
  `}
`

const TextArea = props => {
  return (
    <Wrapper bgWhite={props.bgWhite}>
      <Input multiline {...props} />
      {props.maxLength && (
        <Count>
          {props.value.length}/{props.maxLength}
        </Count>
      )}
    </Wrapper>
  )
}

export default TextArea
