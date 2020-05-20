import React from 'react';

import location from '../../../public/assets/location.png';
import telephone from '../../../public/assets/telephone.png';
import mail from '../../../public/assets/mail.png';
import whatsapp from '../../../public/assets/whatsapp.png';

import InfoContactoItem from './InfoContactoItem';
import { StylesInfoContacto, StyledInfoDetails } from './styles';
import ContactUsForm from './ContactUsForm';

function InfoContacto() {
  return (
    <StylesInfoContacto>
      <ContactUsForm />
      <StyledInfoDetails>
        <InfoContactoItem icon={location} text={'Calle 37 bis sur 68h-23'} />
        <InfoContactoItem icon={telephone} text={'+57-1-7284120'} />
        <InfoContactoItem icon={whatsapp} text={'+57-3104392240'} />
        <InfoContactoItem icon={mail} text={'admin@sweatersrossys.com'} />
      </StyledInfoDetails>
    </StylesInfoContacto>
  );
}

export default InfoContacto;
