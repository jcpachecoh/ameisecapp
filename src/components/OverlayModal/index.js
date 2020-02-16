import React from 'react';
import PropTypes from 'prop-types';

import { StyledOverlayModal } from './styles';

function OverlayModal({ showOverlay, children }) {
  return (
    <StyledOverlayModal showOverlay={showOverlay}>
      <div>{children}</div>
    </StyledOverlayModal>
  );
}

OverlayModal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  onClose: PropTypes.func,
  showOverlay: PropTypes.bool,
};

export default OverlayModal;
