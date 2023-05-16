import React from 'react';
import {
  StyledInput,
  StyledSearchButton,
  StyledSearchForm,
  StyledSearchbar,
} from './Searchbar.styled';
import PropTypes from 'prop-types';

export default function Searchbar({ onSearch }) {
  return (
    <StyledSearchbar>
      <StyledSearchForm onSubmit={onSearch}>
        <StyledSearchButton>
          <span>Search</span>
        </StyledSearchButton>
        <StyledInput
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Shearch images and photos"
        />
      </StyledSearchForm>
    </StyledSearchbar>
  );
}

Searchbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
