import React, { useState } from 'react';

import { messages } from '../../constants/messages';
import InputText from '../InputText';
import Button from '../Button';
import Title from '../Title';
import { isDesktop } from '../../utils';

import { StyledEmailPromotion } from './styles';

export default function EmailPromotion() {
  const [email, setemail] = useState('');

  const handleEmail = evt => {
    setemail(evt.target.value);
  };

  const handleSubmit = () => {
    console.log('email', email);
  };

  const isDesktopDevice = isDesktop();
  return (
    <StyledEmailPromotion>
      <Title value={messages.emailPromotion} />
      <div>
        <InputText
          name={'newsletter'}
          type={'email'}
          placeholder={messages.email}
          value={email}
          onChange={handleEmail}
          width={isDesktopDevice ? '520px' : '200px'}
        />
        <Button onClick={handleSubmit} value={messages.submit} zIndex={0} width={'30%'} />
      </div>
    </StyledEmailPromotion>
  );
}
