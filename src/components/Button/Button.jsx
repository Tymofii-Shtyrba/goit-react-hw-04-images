import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './Button.styled';

export default function Button({ learnMore }) {
  return (
    <StyledButton onClick={learnMore} type="button">
      Learn more
    </StyledButton>
  );
}

Button.propTypes = {
  learnMore: PropTypes.func.isRequired,
};
