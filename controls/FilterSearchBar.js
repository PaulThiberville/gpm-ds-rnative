import React from "react";
import styled, { css } from "styled-components";
import { SearchBar } from "./SearchBar";
import { LineFilter } from "../icons/components";

const SettingsInput = styled.View`
  ${({ theme }) => css`
    position: relative;
    border-radius: ${theme.borderRadius.l};
  `}
`;
const ButtonSettingsIcon = styled.TouchableOpacity`
  ${({ theme }) => css`
    position: absolute;
    z-index: 1;
    right: 16px;
    top: 14px;
    padding-left: ${theme.space.std};
    border-left-width: 2px;
    border-left-color: ${theme.colors.grey2 + 40};
  `}
`;

const FilterSearchBar = ({ value, onChange, ...props }) => {
  return (
    <SettingsInput>
      <ButtonSettingsIcon {...props}>
        <LineFilter />
      </ButtonSettingsIcon>
      <SearchBar
        placeholder="Rechercher un avantage"
        value={value}
        onChange={(InputValue) => onChange(InputValue)}
      />
    </SettingsInput>
  );
};
export default FilterSearchBar;
