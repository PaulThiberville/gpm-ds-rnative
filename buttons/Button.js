import useTheme from "../hooks/useTheme";
import React from "react";
import styled, { css } from "styled-components";
import { backgroundIsLight } from "../utils/colors";

const StyledTouchableOpacity = styled.TouchableOpacity`
  ${({ theme }) => css`
    flex: 1;
    flex-shrink: 0;
    padding: 12px;
    background: ${({ color }) => color || theme.colors.primary};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    align-items: center;
    border-radius: ${theme.borderRadius.m};
  `}
`;

const IconWrapper = styled.View`
  ${({ theme }) => css`
    margin-right: ${theme.spacing.xs};
  `}
`;

const StyledText = styled.Text`
  ${({ theme }) => css`
    color: ${(props) =>
      backgroundIsLight(props.color) ? theme.colors.black : theme.colors.white};
  `}
`;

const Button = ({ onPress, icon: Icon, label, loading, ...props }) => {
  const theme = useTheme();
  return (
    <StyledTouchableOpacity onPress={onPress} {...props}>
      {/* TODO: gérer le loading */}
      {Icon && (
        <IconWrapper>
          <Icon color={theme.colors.white} />
        </IconWrapper>
      )}
      <StyledText color={props.color}>{label}</StyledText>
    </StyledTouchableOpacity>
  );
};

export default Button;
