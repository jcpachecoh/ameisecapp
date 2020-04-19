import React from 'react';

import InputText from '../../components/InputText';
import TextArea from '../../components/TextArea';

import { StyledContactUsForm } from './styles';

export default function ContactUsForm() {
  return (
    <StyledContactUsForm>
      <label>Email</label>
      <InputText placeholder={'tucorreo@email.com'} />
      <TextArea
        placeholder={'Envianos tus inquitudes con gusto las responderemos'}
        label={'Mensaje'}
      />
    </StyledContactUsForm>
  );
}
