import React from 'react'
import styled, { css } from 'styled-components'

const Switch = styled.View`
  ${({ theme }) => css`
    width: ${theme.size.l2};
    height: ${theme.fontSize.xxl2};
    background: ${theme.colors.grey1};
    border-radius: ${theme.borderRadius.m};
    display: flex;
    flex-direction: row
    justify-content: center;
    align-items: center;
  `}
`
const StyledIcon = styled.TouchableOpacity`
  ${({ theme }) => css`
    width: ${theme.space.xxl};
    height: ${theme.space.xxl};
    background: ${({ active }) =>
      active ? theme.colors.white : theme.colors.grey1};
    border-radius: ${theme.borderRadius.m};
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`

const IconSwitch = ({ value, left, right }) => {
  return (
    <Switch>
      <StyledIcon
        activeOpacity={value === left.condition && 1}
        active={value === left.condition}
        onPress={left.action}
      >
        {left.icon}
      </StyledIcon>
      <StyledIcon
        activeOpacity={value === right.condition && 1}
        active={value === right.condition}
        onPress={right.action}
      >
        {right.icon}
      </StyledIcon>
    </Switch>
  )
}

export default IconSwitch
