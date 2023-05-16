import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { StyledList } from './ImageGallery.styled';
import PropTypes from 'prop-types';

export default function ImageGallery({ images, openModal }) {
  return (
    <StyledList>
      {images.map(image => {
        return (
          <ImageGalleryItem
            key={image.id}
            image={image}
            openModal={openModal}
          />
        );
      })}
    </StyledList>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  openModal: PropTypes.func.isRequired,
};
