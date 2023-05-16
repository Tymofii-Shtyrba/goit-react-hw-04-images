import React from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { StyledOverlay, StyledModal } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ largeImageRef, onClose }) {
  const handleKeyDown = e => {
    if (e.code !== 'Escape') return;
    onClose();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return function () {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleBackdropClicl = e => {
    if (e.target !== e.currentTarget) return;
    onClose();
  };

  return createPortal(
    <StyledOverlay onClick={handleBackdropClicl}>
      <StyledModal>
        <img src={largeImageRef} alt="" />
      </StyledModal>
    </StyledOverlay>,
    modalRoot
  );
}

Modal.propTypes = {
  largeImageRef: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
