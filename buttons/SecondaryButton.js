import useTheme from "../hooks/useTheme";
import React from "react";
import styled, { css } from "styled-components";

const StyledTouchableOpacity = styled.TouchableOpacity`
  ${({ theme }) => css`
    flex: 1;
    padding: 12px;
    border: ${`1px solid ${theme.colors.primary}`};
    color: ${theme.colors.primary};
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

const TextWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    height: ${theme.size.full};
  `}
`;

const AfterIconWrapper = styled.View`
  ${({ theme }) => css`
    margin-left: ${theme.spacing.xs};
  `}
`;

const SecondaryButton = ({
  onPress,
  label,
  icon: Icon,
  afterIcon: AfterIcon,
  ...props
}) => {
  const theme = useTheme();
  return (
    <StyledTouchableOpacity onPress={onPress} {...props}>
      {Icon && (
        <IconWrapper>
          <Icon color={theme.colors.primary} />
        </IconWrapper>
      )}
      <TextWrapper>
        <StyledText>{label}</StyledText>
        {AfterIcon && (
          <AfterIconWrapper>
            <AfterIcon color={theme.colors.primary} />
          </AfterIconWrapper>
        )}
      </TextWrapper>
    </StyledTouchableOpacity>
  );
};

export default SecondaryButton;
