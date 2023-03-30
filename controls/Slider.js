import React from "react";
import { View } from "react-native";
import styled, { css } from "styled-components";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import { useTheme } from "../hooks/useTheme";

const Title = styled.Text`
  ${({ theme }) => css`
    /* font-family: 'Poppins'; */
    font-size: ${theme.fontSize.std};
    font-weight: 600;
    color: ${theme.colors.black};
  `}
`;
const Wrapper = styled.View`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    margin-bottom: ${theme.space.m};
    align-items: center;
  `}
`;

const ValueSlider = styled.Text`
  ${({ theme }) => css`
    /* font-family: 'Poppins'; */
    font-size: ${theme.fontSize.std};
    font-weight: 900;
    color: ${theme.colors.black};
  `}
`;

const Slider = ({ title, min, max, initialValue, step, onChange }) => {
  const theme = useTheme();
  return (
    <View>
      {title && (
        <Wrapper>
          <Title>{title} :</Title>
          <ValueSlider> {initialValue[0]}</ValueSlider>
        </Wrapper>
      )}
      <MultiSlider
        markerContainerStyle={{
          backgroundColor: theme.colors.white,
          width: 24,
          height: 24,
          borderRadius: 50,
          borderWidth: 2,
          borderColor: theme.colors.primary,
        }}
        markerStyle={{
          backgroundColor: theme.colors.white,
        }}
        pressedMarkerStyle={{
          backgroundColor: theme.colors.white,
          borderColor: theme.colors.primary,
        }}
        selectedStyle={{
          backgroundColor: theme.colors.primary,
        }}
        trackStyle={{
          height: 8,
          backgroundColor: theme.colors.grey1,
          borderRadius: 8,
        }}
        min={min}
        max={max}
        values={initialValue}
        sliderLength={360}
        step={step}
        markerOffsetY={15}
        markerOffsetX={15}
        onValuesChange={(value) => onChange(value)}
      />
    </View>
  );
};

export default Slider;
