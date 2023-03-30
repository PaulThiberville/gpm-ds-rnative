import React from "react";
import styled, { css } from "styled-components";
import TextInput from "./TextInput";

const StyledInputAdornment = styled.View`
  ${({ theme }) => css`
    padding-left: ${theme.space.xl};
    position: relative;
    background: ${theme.colors.grey1};
    border-radius: ${theme.borderRadius.l};
    flex-direction: row;
    align-items: center;
    height: ${theme.size.m};
  `}
`;
const Icon = styled.View`
  left: 15px;
  position: absolute;
  z-index: 1;
`;

const InputAdornment = ({ adornment, ...props }) => {
  return (
    <StyledInputAdornment>
      <Icon>{adornment}</Icon>
      <TextInput {...props} />
    </StyledInputAdornment>
  );
};

export default InputAdornment;
