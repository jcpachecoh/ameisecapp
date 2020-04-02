import React from 'react';

import location from '../../../public/assets/location.png';
import telephone from '../../../public/assets/telephone.png';
import mail from '../../../public/assets/mail.png';

import InfoContactoItem from './InfoContactoItem';
import { StylesInfoContacto } from './styles';

function InfoContacto() {
  return (
    <StylesInfoContacto>
      <InfoContactoItem icon={location} text={'Calle 37 bis sur 68h-23'} />
      <InfoContactoItem icon={telephone} text={'+57-1-7112232'} />
      <InfoContactoItem icon={mail} text={'contacto@rossyssweaters.com'} />
    </StylesInfoContacto>
  );
}

export default InfoContacto;
