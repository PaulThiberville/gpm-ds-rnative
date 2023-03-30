import { LinePlus } from "../icons/components";
import React from "react";
import styled, { css } from "styled-components";

const WrapperButton = styled.View`
  ${({ theme }) => css`
    padding: ${theme.space.xs};
    max-width: 72px;
    border-radius: ${theme.borderRadius.xl};
    justify-content: space-between;
    align-items: center;
  `}
`;
const Button = styled.TouchableOpacity`
  ${({ theme }) => css`
    padding: ${theme.space.m};
    border-radius: ${theme.borderRadius.l};
    justify-content: center;
    align-items: center;
    background: ${theme.colors.grey1};
  `}
`;

const ButtonText = styled.Text`
  ${({ theme }) => css`
    /* font-family: 'Poppins'; */
    margin-top: ${theme.space.xs};
    font-size: ${theme.fontSize.xs};
    font-weight: 500;
    color: ${theme.colors.grey2};
  `}
`;

const ThemeColorButton = (props) => {
  return (
    <WrapperButton>
      <Button {...props}>
        <LinePlus />
      </Button>
      <ButtonText>Perso</ButtonText>
    </WrapperButton>
  );
};

export default ThemeColorButton;
