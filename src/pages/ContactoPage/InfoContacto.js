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
        <InfoContactoItem icon={telephone} text={'+57-1-7112232'} />
        <InfoContactoItem icon={whatsapp} text={'+57-1-316-3611272'} />
        <InfoContactoItem icon={mail} text={'contacto@rossyssweaters.com'} />
      </StyledInfoDetails>
    </StylesInfoContacto>
  );
}

export default InfoContacto;
