import React from 'react';
import PropTypes from 'prop-types';

import { StyledOverlayModal } from './styles';

function OverlayModal({ animationDirection, showOverlay, children }) {
  return (
    <StyledOverlayModal animationDirection={animationDirection} showOverlay={showOverlay}>
      <div>{children}</div>
    </StyledOverlayModal>
  );
}

OverlayModal.propTypes = {
  animationDirection: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  onClose: PropTypes.func,
  showOverlay: PropTypes.bool,
};

export default OverlayModal;
