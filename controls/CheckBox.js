import React from "react";
import { LineTick } from "../icons/components";
import styled, { css } from "styled-components";
import { useTheme } from "../hooks/useTheme";

const StyledCheckbox = styled.TouchableOpacity`
  ${({ theme }) => css`
    justify-content: center;
    align-items: center;
    width: ${theme.size.s};
    height: ${theme.size.s};
    border: ${({ checked }) =>
      checked
        ? `2px solid ${theme.colors.primary}`
        : `2px solid ${theme.colors.grey2}`};
    border-radius: ${theme.borderRadius.xs};
    background: ${({ checked }) =>
      checked ? theme.colors.primary : theme.colors.grey1};
  `}
`;

const Checked = styled.View`
  flex-direction: row;
  align-items: center;
`;

const CheckBox = ({ onValueChange, value }) => {
  const theme = useTheme();
  return (
    <StyledCheckbox
      checked={value}
      onPress={() => {
        onValueChange(!value);
      }}
    >
      <Checked>{value && <LineTick color={theme.colors.white} />}</Checked>
    </StyledCheckbox>
  );
};

export default CheckBox;
