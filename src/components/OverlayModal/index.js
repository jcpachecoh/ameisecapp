import React from 'react';
import PropTypes from 'prop-types';

import { StyledOverlayModal } from './styles';

function OverlayModal({ animationDirection, showOverlay, width, top, children }) {
  return (
    <StyledOverlayModal
      animationDirection={animationDirection}
      showOverlay={showOverlay}
      top={top}
      width={width}>
      <div>{children}</div>
    </StyledOverlayModal>
  );
}

OverlayModal.propTypes = {
  animationDirection: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  onClose: PropTypes.func,
  showOverlay: PropTypes.bool,
  top: PropTypes.string,
  width: PropTypes.string,
};

export default OverlayModal;
