import { useTheme } from "../hooks/useTheme";
import React from "react";
import { Switch as RNSwitch } from "react-native";
import styled, { css } from "styled-components";

const StyledSwitch = styled.View`
  ${({ theme }) => css`
    align-items: center;
    justify-content: center;
    border-radius: ${theme.borderRadius.s};
    width: ${theme.fontSize.xxl2};
    height: ${theme.fontSize.l};
    background: ${({ checked }) =>
      checked ? theme.colors.primary : theme.colors.grey2};
  `}
`;

const Switch = ({ value, onChange }) => {
  const theme = useTheme();

  return (
    <StyledSwitch checked={value}>
      <RNSwitch
        trackColor={{ false: theme.colors.grey2, true: theme.colors.primary }}
        thumbColor={theme.colors.white}
        ios_backgroundColor={theme.colors.grey2}
        onValueChange={onChange}
        value={value}
      />
    </StyledSwitch>
  );
};

export default Switch;
