import React from 'react'
import { View } from 'react-native'
import IconButton from './IconButton'
import styled, { css } from 'styled-components'

const Badge = styled.View`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    background: ${theme.colors.red};
    border-radius: ${theme.borderRadius.xl};
    width: ${theme.size.xs};
    height: ${theme.size.xs};
    position: absolute;
    z-index: 1;
    top: -2px;
    right: -2px;
    font-size: ${theme.fontSize.xxs};
    font-weight: 500;
    border: 1px solid ${theme.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`
const BadgeText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.fontSize.xxs};
    font-weight: 500;
  `}
`

const IconButtonBadge = ({ number, ...props }) => {
  return (
    <View>
      {number && (
        <Badge>
          <BadgeText>{number}</BadgeText>
        </Badge>
      )}
      <IconButton {...props} />
    </View>
  )
}
export default IconButtonBadge
