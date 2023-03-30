import React from "react";
import styled, { css } from "styled-components";

const Button = styled.TouchableOpacity`
  ${({ theme, selected }) => css`
    background: ${selected ? theme.colors.primaryBG : theme.colors.grey1};
    padding: ${theme.space.l} ${theme.space.m};
    height: 56px;
    border-radius: ${theme.borderRadius.l};
    align-items: center;
    justify-content: center;
  `}
`;
const WrapperButton = styled.View`
  ${({ theme }) => css`
    margin-top: ${theme.space.std};
    width: ${theme.size.l};
    margin-right: ${theme.space.std};
  `}
`;
const Title = styled.Text`
  ${({ theme, selected }) => css`
    /* font-family: 'Poppins'; */
    color: ${theme.colors.grey3};
    font-weight: ${selected ? 500 : 400};
    font-size: ${theme.fontSize.s};
    text-align: center;
    margin-top: ${theme.space.xs};
  `}
`;

const ButtonPhotoPostLink = ({ title, icon, isSelected, ...props }) => {
  return (
    <WrapperButton>
      <Button selected={isSelected.includes(title)} {...props}>
        {icon}
      </Button>
      <Title selected={isSelected.includes(title)}>{title}</Title>
    </WrapperButton>
  );
};
export default ButtonPhotoPostLink;
