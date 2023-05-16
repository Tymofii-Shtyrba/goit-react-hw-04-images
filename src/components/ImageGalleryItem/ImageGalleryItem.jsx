import React from 'react';
import { StyledListItem, StyledImage } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export default function ImageGalleryItem({ image, openModal }) {
  const { id, webformatURL, tags } = image;
  return (
    <StyledListItem>
      <StyledImage id={id} src={webformatURL} alt={tags} onClick={openModal} />
    </StyledListItem>
  );
}

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
  openModal: PropTypes.func.isRequired,
};
