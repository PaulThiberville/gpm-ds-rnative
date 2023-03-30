import { Search as SearchIcon } from "../icons/components";
import React from "react";
import styled, { css } from "styled-components";

const Search = styled.View`
  ${({ theme }) => css`
    width: ${theme.size.fill};
    padding: ${theme.space.std};
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${theme.colors.grey1};
    border-radius: ${theme.borderRadius.l};
  `}
`;

const StyledTextInput = styled.TextInput`
  ${({ theme }) => css`
    padding: ${theme.space.none};
    padding-left: ${theme.space.xs};
  `}
`;

const SearchBar = ({ placeholder, value, onChange }) => {
  return (
    <Search>
      <SearchIcon />
      <StyledTextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
      />
    </Search>
  );
};

export default SearchBar;
