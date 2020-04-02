import React from 'react';
import { PropTypes } from 'prop-types';

import Icon from '../../components/Icon';

import { StylesInfoContactoItem } from './styles';

function InfoContactoItem({ icon, text }) {
  return (
    <StylesInfoContactoItem>
      <Icon size={'32px'} image={icon} />
      <span>{text}</span>
    </StylesInfoContactoItem>
  );
}

InfoContactoItem.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
};

export default InfoContactoItem;
