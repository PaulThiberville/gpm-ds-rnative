import useTheme from "../hooks/useTheme";
import React from "react";
import { Text } from "react-native";
import styled, { css } from "styled-components";
import clsx from "clsx";
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

const Button = ({ onPress, icon: Icon, label, loading, ...props }) => {
  const theme = useTheme();
  return (
    <StyledTouchableOpacity onPress={onPress} {...props}>
      {/* TODO: gérer le loading */}
      {Icon && <Icon className="mr-2" color={theme.colors.white} />}
      <Text
        className={clsx(
          backgroundIsLight(props.color) ? "text-black" : "text-white"
        )}
      >
        {label}
      </Text>
    </StyledTouchableOpacity>
  );
};

export default Button;
