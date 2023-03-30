import React from "react";
import styled, { css } from "styled-components";
import { TextInput } from "@/Components";

const ViewColor = styled.TouchableOpacity`
  ${({ theme }) => css`
    padding: ${theme.space.l};
    border-radius: 20px;
    border: ${({ colorSelected }) =>
      colorSelected
        ? `2px solid ${colorSelected}`
        : `2px solid ${theme.colors.grey2}`};
    margin-right: ${theme.space.xs};
    background: ${({ colorSelected }) =>
      colorSelected ? colorSelected : theme.colors.white};
  `}
`;
const Title = styled.Text`
  ${({ theme }) => css`
    /* font-family: 'Poppins'; */
    font-size: ${theme.fontSize.std};
    font-weight: 600;
    color: ${theme.colors.black};
    margin-bottom: ${theme.space.m};
  `}
`;

const Wrapper = styled.view`
  display: flex;
  flex-direction: row;
`;

const InputSelectColor = ({ title, ...props }) => {
  const checkHexadecimalValue = "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$";
  return (
    <>
      <Title>{title}</Title>
      <Wrapper>
        <ViewColor
          {...props}
          colorSelected={
            props.value.match(checkHexadecimalValue) && props.value
          }
        />
        <TextInput {...props} />
      </Wrapper>
    </>
  );
};

export default InputSelectColor;
